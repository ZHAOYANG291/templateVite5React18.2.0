import { Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Spin } from "antd";
import Show from "@/view/Show";
import Earth from "@/view/Earth";


//路由懒加载引入
const Login = lazy(() => import("@/view/Login"));
const Main = lazy(() => import("@/view/Main"));
const Home = lazy(() => import("@/view/Home"));
const User = lazy(() => import("@/view/User"));



//懒加载模式必须外包<React.Suspense>组件！！！！！
//封装高阶组件
const withLoading = (component: JSX.Element) => (
  <Suspense
    fallback={
      <div style={{ height: "100%", display: "flex" }}>
        {/* <Spin tip="Loading" size="large" style={{ margin: "auto" }} >
          <div>正在加载</div>
          </Spin> */}
             <Spin />
      </div>
    }
  >
    {component}
  </Suspense>
);

//路由表
const router = [
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: withLoading( <div>这是登录组件<Login /></div> )
  },
  {
    path: "/main",
    element: withLoading(<Main/> ),
    children: [
      {
        path: "/main/home",
        exact: true,//这个就是路径为/main的时候，默认显示/main/home这个组件
        element: withLoading( <Home/>),
      },
      {
        path: "/main/show",
        element: withLoading(<Show />)
      },
      {
        path: "/main/user",
        element: withLoading(<User />)
      },
      {
        path: "/main/earth",
        element: withLoading(<Earth />)
      },
    ]


  }
];
export default router;
