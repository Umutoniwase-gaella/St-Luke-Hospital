import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

function PatientDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="details-card">
        <h1>Patient Details</h1>

        <h2>Patient {id}</h2>

        <p>
          <strong>Patient ID:</strong> {id}
        </p>

        <p>
          <strong>Name:</strong> John Doe
        </p>

        <p>
          <strong>Age:</strong> 35
        </p>

        <p>
          <strong>Gender:</strong> Male
        </p>

        <p>
          <strong>Condition:</strong> Malaria
        </p>

        <p>
          <strong>Status:</strong> Admitted
        </p>

        <div className="nested-links">
          <Link to="history">Medical History</Link>

          <Link to="billing">Patient Billing</Link>
        </div>

        <button
          onClick={() => navigate("/patients")}
          className="back-button"
        >
          Back to Patients
        </button>

        <hr />

        <Outlet />
      </div>
    </div>
  );
}

export default PatientDetails;