import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Storelogo } from "../assets/icons/storelogo-icon.svg";
import { ReactComponent as Homeicon } from "../assets/icons/home-icon1.svg";
import { ReactComponent as Discount } from "../assets/icons/discount-icon.svg";
import { ReactComponent as Dashboard } from "../assets/icons/dashboard-icon.svg";
import { ReactComponent as Message } from "../assets/icons/message-icon.svg";
import { ReactComponent as Notification } from "../assets/icons/notification-icon.svg";
import { ReactComponent as Settings } from "../assets/icons/settings-icon.svg";
import { ReactComponent as Logout } from "../assets/icons/logout-icon.svg";

function MainNav() {
  return (
    <div className="navbar">
      <div className="navbar__icon navbar__iconbox--1">
        <Storelogo className="icon" />
      </div>

      <div className="navbar__icon navbar__iconbox--2">
        <Homeicon className="icon" />
      </div>

      <div className="navbar__icon navbar__iconbox--3">
        <Discount className="icon" />
      </div>

      <div className="navbar__icon navbar__iconbox--4">
        <Dashboard className="icon" />
      </div>

      <div className="navbar__icon navbar__iconbox--3">
        <Message className="icon" />
      </div>
      <div className="navbar__icon navbar__iconbox--4">
        <Notification className="icon" />
      </div>

      <div className="navbar__icon navbar__iconbox--4">
        <Settings className="icon" />
      </div>

      <div className="navbar__icon navbar__iconbox--4">
        <Logout className="icon" />
      </div>
    </div>
  );
}

export default MainNav;
