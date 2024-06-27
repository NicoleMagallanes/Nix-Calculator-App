import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faToggleOn,
  faToggleOff,
} from "@fortawesome/free-solid-svg-icons";

const AppointmentItem = ({
  appointment,
  updateAppointment,
  deleteAppointment,
}) => {
  const toggleStatus = () => {
    updateAppointment(appointment.id, {
      status: appointment.status === "Pending" ? "Completed" : "Pending",
    });
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this appointment?")) {
      deleteAppointment(appointment.id);
    }
  };

  return (
    <div className="flex justify-between items-center border p-4 mb-2 dark:bg-gray-700 dark:border-gray-600">
      <div>
        <h3 className="text-xl">{appointment.name}</h3>
        <p>{new Date(appointment.date).toLocaleDateString()}</p>
        <p>Status: {appointment.status}</p>
      </div>
      <div>
        <button
          onClick={toggleStatus}
          className="text-yellow-500 py-1 px-2 mr-2"
        >
          <FontAwesomeIcon
            icon={appointment.status === "Pending" ? faToggleOff : faToggleOn}
          />
        </button>
        <button onClick={handleDelete} className="text-red-500 py-1 px-2">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default AppointmentItem;
