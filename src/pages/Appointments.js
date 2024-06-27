import React, { useState } from "react";
import { useAppointments } from "../hooks/useAppointments";
import AppointmentForm from "../components/AppointmentForm";
import AppointmentList from "../components/AppointmentList";

const Appointments = () => {
  const {
    appointments,
    isLoading,
    addAppointment,
    updateAppointment,
    deleteAppointment,
  } = useAppointments();
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("date");

  const filteredAppointments = (appointments || [])
    .filter((appointment) => {
      if (filter === "all") return true;
      return appointment.status === filter;
    })
    .filter((appointment) => {
      return appointment.name.toLowerCase().includes(search.toLowerCase());
    })
    .sort((a, b) => {
      if (sort === "date") return new Date(a.date) - new Date(b.date);
      return a.name.localeCompare(b.name);
    });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <h1 className="text-2xl mb-4">Appointments</h1>
      <AppointmentForm addAppointment={addAppointment} />
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 mr-2 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-100"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 mr-2 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-100"
        >
          <option value="all">All</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border p-2 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-100"
        >
          <option value="date">Sort by Date</option>
          <option value="name">Sort by Name</option>
        </select>
      </div>
      <AppointmentList
        appointments={filteredAppointments}
        updateAppointment={updateAppointment}
        deleteAppointment={deleteAppointment}
      />
    </div>
  );
};

export default Appointments;
