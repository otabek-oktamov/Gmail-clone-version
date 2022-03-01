import { Checkbox, IconButton } from "@material-ui/core";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import React from "react";
import { useHistory } from "react-router-dom";
import "./MailRow.css";
import { useDispatch } from "react-redux";
import { selectMail } from "../../features/mailSlice";
function MailRow({ id, title, subject, description, data }) {
  const history = useHistory();
  const distpatch = useDispatch();
  const openMail = () => {
    distpatch(
      selectMail({
        id,
        title,
        subject,
        description,
        data,
      })
    );
    history.push("/mail");
  };
  return (
    <div className="mailRow">
      <div className="mailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>
      <div className="mailRow__main" onClick={openMail}>
        <h3 className="mailRow__title">{title}</h3>
        <div className="mailRow__subject">
          <h4>
            {subject} -{" "}
            <span className="mailRow__description">{description}</span>
          </h4>
        </div>
        <div className="mailRow__data">{data}</div>
      </div>
    </div>
  );
}

export default MailRow;
