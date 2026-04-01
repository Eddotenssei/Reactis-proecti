import { Link, Outlet } from "react-router"


export default function Layout(){
    return <>
    <header>
        <nav>
            <Link>Home</Link>
            <Link to={"/register"}>Register</Link>
            <Link to={"/login"}>Login</Link>
        </nav>
        <Outlet />
    </header>
    </>
}