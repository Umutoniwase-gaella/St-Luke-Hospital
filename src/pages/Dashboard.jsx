import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="page">
      <section className="dashboard-hero">
        <h1>St. Luke Hospital Management System</h1>
        <p>
          Welcome to St. Luke Hospital. Manage patients, appointments,
          billing, and pharmacy services in one place.
        </p>
        <Link to="/patients" className="dashboard-button">
          View Patients
        </Link>
      </section>

      <section className="dashboard-section">
        <h2>Hospital Services</h2>

        <div className="dashboard-cards">
          <div className="dashboard-card">
            <h3>👨‍⚕️ Patients</h3>
            <p>
              View and manage patient information and medical history.
            </p>
            <Link to="/patients">Manage Patients</Link>
          </div>

          <div className="dashboard-card">
            <h3>📅 Appointments</h3>
            <p>
              Manage appointments between patients and healthcare staff.
            </p>
            <Link to="/appointments">View Appointments</Link>
          </div>

          <div className="dashboard-card">
            <h3>💳 Billing</h3>
            <p>
              View hospital bills and manage patient payments.
            </p>
            <Link to="/billing">View Billing</Link>
          </div>

          <div className="dashboard-card">
            <h3>💊 Pharmacy</h3>
            <p>
              View available medicines and pharmacy categories.
            </p>
            <Link to="/pharmacy">View Pharmacy</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;