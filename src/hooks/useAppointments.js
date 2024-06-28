import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  fetchAppointments,
  createAppointment,
  updateAppointment as apiUpdateAppointment,
  deleteAppointment as apiDeleteAppointment,
} from "../services/api";

const useAppointments = () => {
  const queryClient = useQueryClient();

  const {
    data: appointments,
    isLoading,
    isError,
  } = useQuery("/appointments", fetchAppointments);

  const addAppointment = useMutation(
    (newAppointment) =>
      createAppointment(newAppointment).then((res) => res.data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("/appointments");
      },
    }
  );

  const updateAppointment = useMutation(
    (payload) => {
      const { id, updatedFields } = payload;
      return apiUpdateAppointment(id, updatedFields).then((res) => res.data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("/appointments");
      },
    }
  );

  const deleteAppointment = useMutation((id) => apiDeleteAppointment(id), {
    onSuccess: () => {
      queryClient.invalidateQueries("/appointments");
    },
  });

  return {
    appointments,
    isLoading,
    isError,
    addAppointment: addAppointment.mutate,
    updateAppointment: updateAppointment.mutate,
    deleteAppointment: deleteAppointment.mutate,
  };
};

export default useAppointments;
