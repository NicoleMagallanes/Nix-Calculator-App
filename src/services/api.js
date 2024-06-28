import axios from "axios";

// Determine base URL based on environment
const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://nicole-calendar-app.netlify.app"; // Replace with your production URL on Netlify

const api = axios.create({
  baseURL,
});

export const fetchAppointments = async () => {
  try {
    const response = await api.get("/appointments");
    return response.data;
  } catch (error) {
    console.error("Error fetching appointments:", error);
    throw error;
  }
};

export const createAppointment = async (appointment) => {
  try {
    const response = await api.post("/appointments", appointment);
    return response.data;
  } catch (error) {
    console.error("Error creating appointment:", error);
    throw error;
  }
};

export const updateAppointment = async (id, updates) => {
  try {
    const response = await api.patch(`/appointments/${id}`, updates);
    return response.data;
  } catch (error) {
    console.error(`Error updating appointment ${id}:`, error);
    throw error;
  }
};

export const deleteAppointment = async (id) => {
  try {
    await api.delete(`/appointments/${id}`);
  } catch (error) {
    console.error(`Error deleting appointment ${id}:`, error);
    throw error;
  }
};
