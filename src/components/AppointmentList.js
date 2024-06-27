import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const AppointmentList = ({
  appointments,
  updateAppointment,
  deleteAppointment,
}) => {
  if (!appointments || appointments.length === 0) {
    return (
      <p className="text-center text-gray-500">No appointments available</p>
    );
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {appointments.map((appointment) => (
        <li
          key={appointment.id}
          className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
        >
          <div>
            <p className="text-lg font-semibold">{appointment.name}</p>
            <p className="text-gray-600 dark:text-gray-400">
              {appointment.date}
            </p>
            <p
              className={`text-sm ${
                appointment.status === "Completed"
                  ? "text-green-500"
                  : "text-yellow-500"
              }`}
            >
              {appointment.status}
            </p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() =>
                updateAppointment(appointment.id, { status: "Completed" })
              }
              className="text-green-500 hover:text-green-700"
            >
              <FontAwesomeIcon icon={faCheckCircle} />
            </button>
            <button
              onClick={() => deleteAppointment(appointment.id)}
              className="text-red-500 hover:text-red-700"
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default AppointmentList;
