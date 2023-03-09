import { Routes, Route, Outlet } from "react-router-dom"
import React from "react";

const Home = React.lazy(() => wait(1000).then(() => import('./pages/user/Home')))

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<SuspenseWrapper />}>
          <Route path="/" element={<Home/>} />
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
