import { Link, useSearchParams } from "react-router-dom";

function Patients() {
  const [searchParams] = useSearchParams();

  const status = searchParams.get("status");

  const patients = [
    {
      id: 1,
      name: "John Doe",
      age: 35,
      gender: "Male",
      status: "admitted",
      condition: "Malaria",
    },
    {
      id: 2,
      name: "Alice Uwase",
      age: 28,
      gender: "Female",
      status: "discharged",
      condition: "Pneumonia",
    },
    {
      id: 3,
      name: "David Mugisha",
      age: 42,
      gender: "Male",
      status: "admitted",
      condition: "Typhoid",
    },
    {
      id: 4,
      name: "Grace Mukamana",
      age: 31,
      gender: "Female",
      status: "discharged",
      condition: "Flu",
    },
    {
      id: 5,
      name: "Eric Habimana",
      age: 25,
      gender: "Male",
      status: "admitted",
      condition: "Malaria",
    },
  ];

  let filteredPatients = patients;

  if (status) {
    filteredPatients = patients.filter(
      (patient) => patient.status === status
    );
  }

  return (
    <div className="page">
      <h1>Patients</h1>

      <p>View and manage patients at St. Luke Hospital.</p>

      <div className="filter-buttons">
        <Link to="/patients">All Patients</Link>

        <Link to="/patients?status=admitted">
          Admitted Patients
        </Link>

        <Link to="/patients?status=discharged">
          Discharged Patients
        </Link>
      </div>

      {status && (
        <p className="filter-info">
          <strong>Current Status:</strong> {status}
        </p>
      )}

      <div className="patients-container">
        {filteredPatients.map((patient) => (
          <div className="patient-card" key={patient.id}>
            <h2>{patient.name}</h2>

            <p>
              <strong>Patient ID:</strong> {patient.id}
            </p>

            <p>
              <strong>Age:</strong> {patient.age}
            </p>

            <p>
              <strong>Gender:</strong> {patient.gender}
            </p>

            <p>
              <strong>Condition:</strong> {patient.condition}
            </p>

            <p>
              <strong>Status:</strong> {patient.status}
            </p>

            <Link
              to={`/patients/${patient.id}`}
              className="patient-button"
            >
              View Patient
            </Link>
          </div>
        ))}
      </div>

      {filteredPatients.length === 0 && (
        <p className="no-results">
          <strong>No patients found.</strong>
        </p>
      )}
    </div>
  );
}

export default Patients;