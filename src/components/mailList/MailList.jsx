import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import React from "react";
import "./MailList.css";
import Section from "../section/Section";
import MailRow from "../mailRow/MailRow";
import { useState, useEffect } from "react";
import db from "../../firebase";




function MailList() {
  const [emails, setEmails] = useState();
  useEffect(() => {
    db.collection("emails")
      .orderBy("timestap", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  return (
    <div className="mailList">
      <div className="mailList__settings">
        <div className="mailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="mailList__settingsRight">
          <IconButton>
            <NavigateBeforeIcon />
          </IconButton>
          <IconButton>
            <NavigateNextIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>

      <div className="mailList__sections">
        <Section
          icon={<InboxIcon />}
          title={"Primary"}
          color={"red"}
          selected
        />
        <Section icon={<PeopleIcon />} title={"Social"} color={"#1A73E8"} />
        <Section
          icon={<LocalOfferIcon />}
          title={"Promotions"}
          color={"green"}
        />
      </div>
      <div className="mailList__list">
        <MailRow
          title={"Twitch"}
          subject={"Hey fellow streamer !!!"}
          description={"this is a test"}
          data={"10pm"}
        />
      </div>
    </div>
  );
}

export default MailList;
