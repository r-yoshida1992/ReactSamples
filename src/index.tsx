import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Index from "./components/index_wrapper/Index";

ReactDOM.render(
  <React.StrictMode>
      <Index/>
  </React.StrictMode>,
  document.getElementById('root')
);

// アプリでパフォーマンス測定を開始したい場合は、関数を渡します。
// 結果を記録する（例：reportWebVitals(console.log))
// または解析エンドポイントに送信します。詳細はこちら： https://bit.ly/CRA-vitals
reportWebVitals();
