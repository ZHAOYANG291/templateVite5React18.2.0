import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
//全局样式
import "@/assets/styles/global.scss"
//组件样式
import App from './App'
import { HashRouter } from 'react-router-dom'
//状态管理与项目挂钩
import { Provider } from "react-redux"
import store from "@/store/index"

ReactDOM.createRoot(document.getElementById('root')! as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  </Provider>
)

console.log();

