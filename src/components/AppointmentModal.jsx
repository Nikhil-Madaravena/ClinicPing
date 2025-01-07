import PropTypes from "prop-types";
import { useState } from "react";
import "../components/css/AppointmentModal.css";

const AppointmentModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment scheduled:", formData);
    alert("Appointment scheduled successfully!");
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Schedule Appointment</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="contact"
            placeholder="Your Contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Additional Notes"
            value={formData.message}
            onChange={handleChange}
            rows="4"
          ></textarea>
          <button type="submit" className="btn-primary">
            Submit
          </button>
        </form>
        <button className="btn-secondary" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};
AppointmentModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AppointmentModal;
