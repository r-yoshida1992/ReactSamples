import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Index from "./components/index_wrapper/Index";
import HelloWorld from "./components/hello_world/HelloWorld";
import PostSample from "./components/post_sample/PostSample";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>

          <Routes>
              <Route path="/" element={<Index />}></Route>
              <Route path="/hello" element={<HelloWorld />}></Route>
              <Route path="/post_sample" element={<PostSample />}></Route>
          </Routes>

      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// アプリでパフォーマンス測定を開始したい場合は、関数を渡します。
// 結果を記録する（例：reportWebVitals(console.log))
// または解析エンドポイントに送信します。詳細はこちら： https://bit.ly/CRA-vitals
reportWebVitals();
