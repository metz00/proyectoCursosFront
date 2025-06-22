import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { update } from "../services/users.service";

const useUpdateUsers = () => {
  const queryClient = useQueryClient();

  const {
    mutate: updateUsers,
    isPending: isUpdating,
    isSuccess: isUpdateSuccess,
    isError: isUpdateError,
    error: updateError,
  } = useMutation({
    mutationFn: (payload) =>
      update(payload.id, {
        email: payload.email,
        password: payload.password,
        role: payload.role,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });
  return {
    updateUsers,
    isUpdating,
    isUpdateSuccess,
    isUpdateError,
    updateError,
  };
};

export default useUpdateUsers;
