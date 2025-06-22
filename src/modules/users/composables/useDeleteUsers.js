import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { remove } from "../services/users.service";

const useDeleteUsers = () => {
  const queryClient = useQueryClient();

  const {
    mutate: deleteUsers,
    isPending: isUpdating,
    isError: isDeleteError,
    isSuccess: isDeleteSuccess,
    error: deleteError,
  } = useMutation({
    mutationFn: (id) => remove(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });
  return{
    deleteUsers,
    isUpdating,
    isDeleteError,
    isDeleteSuccess,
    deleteError,
  }
};

export default useDeleteUsers;
