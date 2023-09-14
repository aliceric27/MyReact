import React from "react";
import "../src/styles.css";
// 使用解構賦值來取props值
const Menuitem = ({ version, data }) => {
  return (
    <>
      <div className="menu-item">
        <p>我們是{`<MenuItem/>`}組件</p>
        <p>{`這是props.version:${version}`}</p>
        <p>{`這是props.data:${data}`}</p>
      </div>
    </>
  );
};

export default Menuitem;
