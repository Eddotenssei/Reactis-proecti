import { Link, Outlet } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";



export default function Layout() {
  

  return (
    <>
    <Navbar />
      <main>
        <Outlet />
      </main>
    <Footer />
    
    </>
  );
}