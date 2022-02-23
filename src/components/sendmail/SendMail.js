import React from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";

function SendMail() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const onSubmit = (d) => {
    console.log(d);
  };
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon className="closeIcon" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("to", { required: true })}
          placeholder="To"
          type="text"
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
