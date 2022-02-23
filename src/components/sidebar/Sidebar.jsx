import { Button } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SendIcon from "@material-ui/icons/Send";
import DescriptionIcon from "@material-ui/icons/Description";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import InboxIcon from "@material-ui/icons/Inbox";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import React, { useState } from "react";
import "./Sidebar.css";
import SidebarOption from "../sidebarOption/SidebarOption";
import { IconButton } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import { useDispatch } from "react-redux";
import { openSendMessage } from "../../features/mailSlice";

function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        className={"compose"}
        startIcon={
          <img src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png" />
        }
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <ul className="sidebar-list">
        <SidebarOption
          selected={true}
          title={"Index"}
          icon={<InboxIcon />}
          number={36}
        />
        <SidebarOption title={"Starred"} icon={<StarIcon />} number={7} />
        <SidebarOption title={"Snoozed"} icon={<AccessTimeIcon />} number={2} />
        <SidebarOption
          title={"Important"}
          icon={<LabelImportantIcon />}
          number={7}
        />
        <SidebarOption title={"Send"} icon={<SendIcon />} number={8} />
        <SidebarOption
          title={"Drafts"}
          icon={<DescriptionIcon />}
          number={13}
        />
        <SidebarOption title={"More"} icon={<ExpandMoreIcon />} />
      </ul>
      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
