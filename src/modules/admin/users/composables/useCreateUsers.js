import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { create } from "../services/users.service";

const useCreateUsers = () => {
  const queryClient = useQueryClient();

  const {
    mutate: createUser,
    isPending: isUpdating,
    isError: isCreateError,
    isSuccess: isCreateSuccess,
    error: createError,
  } = useMutation({
    mutationFn: (payload) => create(payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });
  return {
    createUser,
    isUpdating,
    isCreateError,
    isCreateSuccess,
    createError,
  };
};
export default useCreateUsers;