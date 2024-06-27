import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";

const fetchAppointments = async () => {
  const { data } = await axios.get("http://localhost:3000/appointments");
  return data;
};

const useAppointments = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery(
    "appointments",
    fetchAppointments
  );

  const addAppointment = useMutation(
    (newAppointment) =>
      axios.post("http://localhost:3000/appointments", newAppointment),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("appointments");
      },
    }
  );

  const updateAppointment = useMutation(
    (id, updatedFields) =>
      axios.patch(`http://localhost:3000/appointments/${id}`, updatedFields),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("appointments");
      },
    }
  );

  const deleteAppointment = useMutation(
    (id) => axios.delete(`http://localhost:3000/appointments/${id}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("appointments");
      },
    }
  );

  return {
    appointments: data,
    isLoading,
    isError,
    addAppointment: addAppointment.mutate,
    updateAppointment: updateAppointment.mutate,
    deleteAppointment: deleteAppointment.mutate,
  };
};

export { useAppointments };
