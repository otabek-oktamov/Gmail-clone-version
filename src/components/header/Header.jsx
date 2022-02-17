import React from "react";
import './Header.css';
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AppsIcon from "@material-ui/icons/Apps";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Header() {
  return (
    <div className="header">
      <div className="header__left">

        <IconButton>
          <MenuIcon />
        </IconButton>

        <img
          className='logo'
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
          alt="img"
        />
      </div>

      <div className="header__middle">
        <div className="input">
          <SearchIcon />
          <input type="text" placeholder="Search in gmail"/>
          <ArrowDropDownIcon />
        </div>
      </div>

      <div className="header__right">

        <IconButton>
          <NotificationsIcon />
        </IconButton>

        <AppsIcon />

        <IconButton>
          <AccountCircleIcon fontSize="large" />
        </IconButton>

      </div>
    </div>
  );
}

export default Header;
