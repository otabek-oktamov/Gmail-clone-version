import React from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../../features/mailSlice";
import { db } from "../../firebase";
import firebase from "firebase";
function SendMail() {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const onSubmit = (FormData) => {
    console.log(FormData);
    db.collection("emails").add({
      to: FormData.to,
      subject: FormData.subject,
      message: FormData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch(closeSendMessage());
  };
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon
          className="closeIcon"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("to", { required: true })}
          placeholder="To"
          type="email"
        />
        {errors.to?.type === "required" && (
          <p className="sendMail__error"> To is required</p>
        )}
        <input
          {...register("subject", { required: true })}
          placeholder="Subject"
          type="text"
        />
        {errors.subject?.type === "required" && (
          <p className="sendMail__error"> Subject is required</p>
        )}
        <input
          {...register("message", { required: true })}
          placeholder="Message"
          type="text"
          className="sendMail__message"
        />
        {errors.message?.type === "required" && (
          <p className="sendMail__error"> Message is required</p>
        )}
        <div className="sendMail__options">
          <Button
            variant="contained"
            className="sendMail__send"
            type="submit"
            color="primay"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
