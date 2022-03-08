import React from "react";
import "./Header.css";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AppsIcon from "@material-ui/icons/Apps";
import { useSelector } from "react-redux";
import { selectUser, logout } from "../../features/userSlice";
import { Avatar } from "@material-ui/core";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>

        <img
          className="logo"
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
          alt="img"
        />
      </div>

      <div className="header__middle">
        <div className="input">
          <SearchIcon />
          <input type="text" placeholder="Search in gmail" />
          <ArrowDropDownIcon />
        </div>
      </div>

      <div className="header__right">
        <IconButton>
          <NotificationsIcon />
        </IconButton>

        <AppsIcon />

        <Avatar onClick={signOut} className="avatar" src={user?.photoUrl} />
      </div>
    </div>
  );
}

export default Header;
