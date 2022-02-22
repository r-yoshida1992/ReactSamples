import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Index from "./components/index_wrapper/Index";
import HelloWorld from "./components/hello_world/HelloWorld";
import PostSampleFetch from "./components/post_sample_fetch/PostSampleFetch";
import PostSampleAxios from "./components/post_sample_axios/PostSampleAxios";
import CalcSample from "./components/calc_sample/CalcSample";
import SearchAddress from "./components/search_address/SearchAddress";
import TwitterClone from "./components/twitter_clone/TwitterClone";
import MicroModalSample from "./components/micro_modal_sample/MicroModalSample";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>

          <Routes>
              <Route path="/" element={<Index />}></Route>
              <Route path="/hello" element={<HelloWorld />}></Route>
              <Route path="/post_sample_fetch" element={<PostSampleFetch />}></Route>
              <Route path="/post_sample_axios" element={<PostSampleAxios />}></Route>
              <Route path="/calc_sample" element={<CalcSample />}></Route>
              <Route path="/search_address" element={<SearchAddress />}></Route>
              <Route path="/twitter_clone" element={<TwitterClone />}></Route>
              <Route path="/micro_modal" element={<MicroModalSample />}></Route>
          </Routes>

      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// アプリでパフォーマンス測定を開始したい場合は、関数を渡します。
// 結果を記録する（例：reportWebVitals(console.log))
// または解析エンドポイントに送信します。詳細はこちら： https://bit.ly/CRA-vitals
reportWebVitals();
