import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

// 早期為了讓使用者使用創造元素所使用的API
/*
第一個參數:元素標籤
第二個參數:props
第三個參數:夾帶在元素之間的內容
*/
React.createElement("div", undefined, "hello world");

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <>
      <div>This is in Render</div>
      <div>{`這裡面可以寫表達式，不過要寫字串要使用模板字串符2+2=${
        2 + 2
      }`}</div>
      <App />
    </>
  </StrictMode>
);
