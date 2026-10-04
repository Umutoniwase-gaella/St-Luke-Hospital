import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>St. Luke Hospital</h2>

      <div className="nav-links">
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/patients">Patients</NavLink>
        <NavLink to="/appointments">Appointments</NavLink>
        <NavLink to="/billing">Billing</NavLink>
        <NavLink to="/pharmacy">Pharmacy</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;