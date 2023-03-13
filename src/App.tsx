import { Routes, Route, Outlet } from "react-router-dom"
import React from "react";
import { UserAuthRoute, UserPrivateRoute } from "./components/routes/UserRoute";

const Home = React.lazy(() => wait(1000).then(() => import('./pages/user/Home')))
const Login = React.lazy(() => wait(1000).then(() => import('./pages/user/Login')))
const Register = React.lazy(() => wait(1000).then(() => import('./pages/user/Register')))

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<SuspenseWrapper />}>
          <Route element={<UserPrivateRoute/>}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<UserAuthRoute />}>
            <Route path="/user/login" element={<Login />} />
            <Route path="/user/register" element={<Register />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

const SuspenseWrapper = () => {
  return (
    <React.Suspense fallback={<p>loading...</p>}>
      <Outlet />
    </React.Suspense>
  )
}

const wait = (num: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, num);
  })
}

export default App
