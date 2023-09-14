import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App";
import Menuitem from "../component/MenuItem";

// 早期為了讓使用者使用創造元素所使用的API
/*
第一個參數:元素標籤
第二個參數:props
第三個參數:夾帶在元素之間的內容
*/
React.createElement("div", undefined, "hello world");

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
let websiteMenu = ["首頁", "最新消息", "關於我們"];
let webstieArr = websiteMenu.map((list) => <li className="list">{list}</li>);
root.render(
  <StrictMode>
    <>
      <div>Hello World</div>
      <div>{`這裡面可以寫表達式，不過要寫字串要使用模板字串符2+2=${
        2 + 2
      }`}</div>
      {/* 如果需要在模板中使用class需要使用className */}
      <h1 className="Class01">我是測試Class用的文字啦</h1>
      {/* 這裡有兩層大括號：外層的 {} 是JSX的語法，告訴React我們要插入一個JavaScript表達式；內層的 {} 則是定義JavaScript物件的語法，其中的物件就是CSS的style屬性。 */}
      <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
        我是測試Class用的文字啦
      </h1>
      {/* React會自動展開Array元素 */}
      <ul>{webstieArr}</ul>
      <Menuitem version="1" data="一些測試文字" />
    </>
  </StrictMode>
);
