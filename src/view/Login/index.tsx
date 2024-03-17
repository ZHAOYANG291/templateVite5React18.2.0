import React from 'react';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Space } from 'antd';
import { Navigate, useNavigate } from 'react-router-dom';

const App: React.FC = () => {
  let navigateTo = useNavigate()

  return <div>这是登录界面， <Button onClick={() => { navigateTo("/main") }}>点我跳转到主页</Button> </div>
}



export default App;