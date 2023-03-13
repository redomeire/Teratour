import { Navigate, Outlet } from "react-router-dom"

const UserPrivateRoute = () => {
    if (localStorage.getItem('token'))
        return <Outlet />

    return <Navigate to="/user/login" />
}

const UserAuthRoute = () => {
    if (localStorage.getItem('token'))
        return <Navigate to="/" />

    return <Outlet />
}

export { UserPrivateRoute , UserAuthRoute }
