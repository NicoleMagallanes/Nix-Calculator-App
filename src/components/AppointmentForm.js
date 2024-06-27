import React, { useState } from "react";

const AppointmentForm = ({ addAppointment }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment({ name, date, status: "Pending" });
    setName("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mr-2 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-100"
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-100"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add Appointment
      </button>
    </form>
  );
};

export default AppointmentForm;
