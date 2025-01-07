import "../components/css/Sidebar.css";

const Sidebar = ({ hospital, onScheduleAppointment }) => {
  return (
    <aside className="sidebar">
      <h2>Hospital Details</h2>
      <p>
        <strong>Name:</strong> {hospital.name}
      </p>
      <p>
        <strong>Address:</strong> {hospital.address}
      </p>
      <p>
        <strong>Contact:</strong> {hospital.contact}
      </p>
      <p>
        <strong>Services:</strong> {hospital.services?.join(", ")}
      </p>
      <button className="btn-primary" onClick={onScheduleAppointment}>
        Schedule Appointment
      </button>
    </aside>
  );
};

export default Sidebar;
