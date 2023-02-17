import { Link, Outlet } from "react-router-dom";
import Logo from '../assets/dove.png';

export default function Root(){
  return (
    <>
    <nav className="navbar bg-dark navbar-dark mb-3">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img alt="" src={Logo} width={30} height={30} className="d-inline-block align-top" />
          Pigeon
        </Link>
      </div>
    </nav>
    <div className="container">
      <Outlet />
    </div>
    </>
  )
}