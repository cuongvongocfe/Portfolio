import React from "react";
import SidenavTitle from "./SidenavTitle";

const Sidenav = () => {
  return (
    <div className="px-7 py-4">
      <SidenavTitle title="M" subTitle="enu" />
      <ul></ul>
      <SidenavTitle title="P" subTitle="rojects" />
      <ul></ul>
      <SidenavTitle title="L" subTitle="atest Posts" />
      <ul></ul>
      <SidenavTitle title="R" subTitle="each Me" />
      <ul>
        <li className="sidenavLi">+84833141499</li>
        <li className="sidenavLi">gtsvongoccuong@gmail.com</li>
      </ul>
    </div>
  );
};

export default Sidenav;
