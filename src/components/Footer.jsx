import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/">Dashboard</Link>
        <Link to="/patients">Patients</Link>
        <Link to="/appointments">Appointments</Link>
        <Link to="/billing">Billing</Link>
        <Link to="/pharmacy">Pharmacy</Link>
      </div>

      <p>© 2026 St. Luke Hospital Management System</p>
      <p>Providing quality healthcare services to our community.</p>
    </footer>
  );
}

export default Footer;