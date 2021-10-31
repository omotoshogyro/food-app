import React from "react";

import { ReactComponent as Coin } from "../assets/icons/coin-icon.svg";
import { ReactComponent as Order } from "../assets/icons/order-icon.svg";
import { ReactComponent as Customer } from "../assets/icons/customer-icon.svg";
import { ReactComponent as FilterOrder } from "../assets/icons/filterorder-icon.svg";
import { ReactComponent as DropdownIcon } from "../assets/icons/arrowdropdown-icon.svg";

import customer1 from "../assets/images/customer-1.png";
import customer2 from "../assets/images/customer-2.png";
import customer3 from "../assets/images/customer-3.png";
import customer4 from "../assets/images/customer-4.png";
import customer5 from "../assets/images/customer-5.png";
import customer6 from "../assets/images/customer-6.png";
import orderfood1 from "../assets/images/orderfood-1.png";
import orderfood2 from "../assets/images/orderfood-2.png";
import orderfood3 from "../assets/images/orderfood-3.png";

import StatisticsBox from "../components/StatisticsBox";
import OrderProfile from "../components/OrderProfile";
import OrderedFood from "../components/OrderedFood";
import CustomSelect from "../components/CustomSelect";

function Dashboard() {
  return (
    <div className="dashboard">
      {/* The left part of the dashboard */}
      <div className="dashboard-left">
        {/* Header and date */}
        <div className="dashboard-left__headercontainer">
          <div className="dashboard-left__titleanddate">
            <h2 className="dashboard-left__titleanddate--title">Dashboard</h2>
            <p className="dashboard-left__titleanddate--date">
              Tuesday 2 Feb, 2021
            </p>
          </div>
        </div>

        {/* 3 Statistics shapes */}
        <div className="dashboard-left__statisticsboxes">
          <StatisticsBox
            Icon={Coin}
            percentage="+32.4"
            total="10,243.00"
            title="Total Revenue"
          />
          <StatisticsBox
            Icon={Order}
            fall={true}
            percentage="-12.40"
            total="23,456"
            title="Total Dish Ordered"
          />
          <StatisticsBox
            Icon={Customer}
            percentage="+2.40"
            total="1,234"
            title="Total Customer"
          />
        </div>

        {/* Order report table */}

        <div className="dashboard-left__orderreport">
          <div className="dashboard-left__orderreport__header">
            <div className="dashboard-left__orderreport__header-titleandfilter">
              <h2 className="dashboard-left__orderreport__header-titleandfilter--header">
                Order Report
              </h2>
              <div className="dashboard-left__orderreport__header-titleandfilter--filterbox">
                <FilterOrder className="filterordericon" />
                <p className="filterordertext">Filter Order</p>
              </div>
            </div>

            <ul className="dashboard-left__orderreport__header-listheaders">
              <li>Customer</li>
              <li>Menu</li>
              <li>Total Payment</li>
              <li>Status</li>
            </ul>
          </div>

          <div className="dashboard-left__orderreport__table">
            <OrderProfile
              image={customer1}
              name="Eren Jaeger"
              menu="Spicy seasoned seafood noodles"
              price="125"
              status="Completed"
            />
            <OrderProfile
              image={customer2}
              name="Reiner Braunn"
              menu="Salted Pasta with mushroom sauce"
              price="145"
              status="Preparing"
            />
            <OrderProfile
              image={customer3}
              name="Levi Ackerman"
              menu="Beef dumpling in hot and sour soup"
              price="105"
              status="Pending"
            />
            <OrderProfile
              image={customer4}
              name="Historia Reiss"
              menu="Hot spicy fried rice with omelet"
              price="45"
              status="Completed"
            />
            <OrderProfile
              image={customer6}
              name="Hanji Zoe"
              menu="Hot spicy fried rice with omelet"
              price="245"
              status="Completed"
            />

            <OrderProfile
              image={customer5}
              name="Armin Arlert"
              menu="Hot spicy fried rice with omelet"
              price="435"
              status="Completed"
            />
          </div>
        </div>
      </div>

      {/* The right part of the dashboard */}
      <div className="dashboard-right">
        <div className="dashboard-right-top">
          <div className="dashboard-right-top__header">
            <h2 className="dashboard-right-top__header--text">Most Ordered</h2>
            <div className="dashboard-right-top__header--dropdown">

              <CustomSelect opt1="Today" opt2="Next" opt3="Upper"/>

            </div>
          </div>
          <div className="dashboard-right-top__horizontal-line"></div>

          <div className="dashboard-right-top__orderedfood-btn">
            <div className="orderfoods">
              <OrderedFood
                image={orderfood1}
                name="Spicy seasoned seafood noodles"
                qty="200"
              />
              <OrderedFood
                image={orderfood2}
                name="Salted pasta with mushroom sauce"
                qty="120"
              />
              <OrderedFood
                image={orderfood3}
                name="Beef dumpling in hot and sour soup"
                qty="80"
              />
            </div>

            <button className="dashboard-right-top__orderedfood-btn--btn">
              View All
            </button>
          </div>
        </div>

        <div className="dashboard-right-bottom">
          <div className="dashboard-right-bottom__container">
            <div className="dashboard-right-bottom__header">
              <h2 className="dashboard-right-bottom__header--text">
                Most Type of Order
              </h2>
            <CustomSelect opt1="Today" opt2="Next" opt3="Upper"/>
            </div>
          </div>

          <div className="dashboard-right-bottom__sectionchart">
            <div className="dashboard-right-bottom__sectionchart--chartcircle blue">
              <div className="dashboard-right-bottom__sectionchart--chartcircle orange">
                <div className="dashboard-right-bottom__sectionchart--chartcircle pink"></div>
              </div>
            </div>

            <div className="dashboard-right-bottom__sectionchart--stats">
              <div className="stat">
                <div className="statdot"></div>
                <div className="ordertypedetails">
                  <h4 className="type">Dine In</h4>
                  <p className="customers">200 customers</p>
                </div>
              </div>
              <div className="stat">
                <div className="statdot"></div>
                <div className="ordertypedetails">
                  <h4 className="type">To Go</h4>
                  <p className="customers">122 customers</p>
                </div>
              </div>
              <div className="stat">
                <div className="statdot"></div>
                <div className="ordertypedetails">
                  <h4 className="type">Delivery</h4>
                  <p className="customers">264 customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
