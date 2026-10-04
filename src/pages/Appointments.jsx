function Appointments() {
  const appointments = [
    {
      id: 1,
      patient: "John Doe",
      doctor: "Dr. Samuel",
      date: "2026-10-05",
      time: "09:00 AM",
      department: "General Medicine",
    },
    {
      id: 2,
      patient: "Alice Uwase",
      doctor: "Dr. Grace",
      date: "2026-10-06",
      time: "10:30 AM",
      department: "Pediatrics",
    },
    {
      id: 3,
      patient: "David Mugisha",
      doctor: "Dr. Patrick",
      date: "2026-10-07",
      time: "02:00 PM",
      department: "Laboratory",
    },
  ];

  return (
    <div className="page">
      <h1>Appointments</h1>

      <p>Manage scheduled appointments at St. Luke Hospital.</p>

      <div className="appointments-container">
        {appointments.map((appointment) => (
          <div className="appointment-card" key={appointment.id}>
            <h2>{appointment.patient}</h2>

            <p>
              <strong>Doctor:</strong> {appointment.doctor}
            </p>

            <p>
              <strong>Date:</strong> {appointment.date}
            </p>

            <p>
              <strong>Time:</strong> {appointment.time}
            </p>

            <p>
              <strong>Department:</strong> {appointment.department}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Appointments;