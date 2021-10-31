import React from "react";

import { ReactComponent as Option } from "../assets/icons/option-icon.svg";
import { ReactComponent as BorderIcon } from "../assets/icons/addproduct-border.svg";
import { ReactComponent as PlusIcon } from "../assets/icons/plus-icon.svg";
import { ReactComponent as HeartIcon } from "../assets/icons/heart-icon.svg";
import { ReactComponent as RestaurantIcon } from "../assets/icons/restaurant-icon.svg";
import { ReactComponent as ProductIcon } from "../assets/icons/product-icon.svg";
import { ReactComponent as NotificationIcon } from "../assets/icons/settings-notification-icon.svg";
import { ReactComponent as SecurityIcon } from "../assets/icons/security-icon.svg";
import { ReactComponent as InfoCircleIcon } from "../assets/icons/infocircle-icon.svg";

import foodedit1 from "../assets/images/foodedit-1.png";
import foodedit2 from "../assets/images/foodedit-2.png";
import foodedit3 from "../assets/images/foodedit-3.png";
import foodedit4 from "../assets/images/foodedit-4.png";
import foodedit5 from "../assets/images/foodedit-5.png";

import FoodEditBox from "../components/FoodEditBox";
import FoodTypeList from "../components/FoodTypeList";
import SettingOptions from "../components/SettingOptions";

function Settings() {
  return (
    <div className="settings">
      {/* Settings Header */}
      <h2 className="settings-header">Settings</h2>

      <div className="settings-container">
        {/* Left Side  */}
        <div className="settings-container__left">
          <SettingOptions
            Icon={HeartIcon}
            header="Appearance"
            word="Dark and Light mode, Font size"
          />
          <SettingOptions
            Icon={RestaurantIcon}
            header="Your Restaurant"
            word="Dark and Light mode, Font size"
          />
          <SettingOptions
            Icon={ProductIcon}
            header="Products Management"
            word="Manage your product, pricing, etc"
          />
          <SettingOptions
            Icon={NotificationIcon}
            header="Notifications"
            word="Customize your notifications"
          />
          <SettingOptions
            Icon={SecurityIcon}
            header="Security"
            word="Configure Password, PIN, etc"
          />
          <SettingOptions
            Icon={SecurityIcon}
            header="Security"
            word="Configure Password, PIN, etc"
          />
          <SettingOptions
            Icon={InfoCircleIcon}
            header="About Us"
            word="Find out more about Posly"
          />
        </div>

        {/* Right Side  */}
        <div className="settings-container__right">
          <div className="settings-container__right__headercomponent">
            <div className="settings-container__right__header">
              <h2 className="settings-container__right__header--text">
                Products Management
              </h2>
              <div className="settings-container__right__header--managebox">
                <div className="icon">
                  <Option />
                </div>
                <p className="manageword">Manage Categories</p>
              </div>
            </div>
            <FoodTypeList />
          </div>

          <div className="settings-container__right__dishedit">
            <div className="settings-container__right__dishedit--addnewbox">
              <BorderIcon className="icon" />

              <div className="plusiconandtext">
                <PlusIcon className="plusiconandtext--icon" />
                <p className="plusiconandtext--text">Add New Dish</p>
              </div>
            </div>

            <FoodEditBox image={foodedit1} />
            <FoodEditBox image={foodedit2} />
            <FoodEditBox image={foodedit3} />
            <FoodEditBox image={foodedit4} />
            <FoodEditBox image={foodedit5} />
          </div>

          <div className="settings-container__right__changesbtn">
            <button className="settings-container__right__changesbtn--discard">
              Discard Changes
            </button>

            <button className="settings-container__right__changesbtn--save">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
