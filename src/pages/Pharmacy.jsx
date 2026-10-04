import { Link, useSearchParams } from "react-router-dom";

function Pharmacy() {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");

  const medicines = [
    {
      id: 1,
      name: "Amoxicillin",
      category: "antibiotics",
      price: 8,
      quantity: 50,
    },
    {
      id: 2,
      name: "Paracetamol",
      category: "painkillers",
      price: 5,
      quantity: 100,
    },
    {
      id: 3,
      name: "Azithromycin",
      category: "antibiotics",
      price: 12,
      quantity: 30,
    },
    {
      id: 4,
      name: "Ibuprofen",
      category: "painkillers",
      price: 7,
      quantity: 60,
    },
    {
      id: 5,
      name: "Cetirizine",
      category: "allergy",
      price: 6,
      quantity: 40,
    },
  ];

  let filteredMedicines = medicines;

  if (category) {
    filteredMedicines = medicines.filter(
      (medicine) => medicine.category === category
    );
  }

  return (
    <div className="page">
      <h1>Pharmacy</h1>

      <p>View medicines available at St. Luke Hospital Pharmacy.</p>

      <div className="filter-buttons">
        <Link to="/pharmacy">All Medicines</Link>

        <Link to="/pharmacy?category=antibiotics">
          Antibiotics
        </Link>

        <Link to="/pharmacy?category=painkillers">
          Painkillers
        </Link>

        <Link to="/pharmacy?category=allergy">
          Allergy Medicines
        </Link>
      </div>

      {category && (
        <p className="filter-info">
          <strong>Current Category:</strong> {category}
        </p>
      )}

      <div className="pharmacy-container">
        {filteredMedicines.map((medicine) => (
          <div className="medicine-card" key={medicine.id}>
            <h2>💊 {medicine.name}</h2>

            <p>
              <strong>Medicine ID:</strong> {medicine.id}
            </p>

            <p>
              <strong>Category:</strong> {medicine.category}
            </p>

            <p>
              <strong>Price:</strong> ${medicine.price}
            </p>

            <p>
              <strong>Available Quantity:</strong> {medicine.quantity}
            </p>
          </div>
        ))}
      </div>

      {filteredMedicines.length === 0 && (
        <p className="no-results">
          <strong>No medicines found.</strong>
        </p>
      )}
    </div>
  );
}

export default Pharmacy;