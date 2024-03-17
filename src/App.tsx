import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import routes from '@/router'
import { useRoutes, useNavigate, Outlet } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)
  const outlet = useRoutes(routes)

  return (
    <>


<div style={{width:"100vw",height:"100vh"}}>
      {outlet}
    </div>
    </>
  )
}

export default App
