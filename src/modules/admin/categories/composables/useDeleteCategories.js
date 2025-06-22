import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { remove } from "../services/categories.service";

const useDeleteCategories = () => {
  const queryClient = useQueryClient();

  const {
    mutate: deleteCategory,
    isPending: isUpdating,
    isError: isDeleteError,
    isSuccess: isDeleteSuccess,
    error: deleteError,
  } = useMutation({
    mutationFn: (id) => remove(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["courses"]);
    },
  });
  return {
    deleteCategory,
    isUpdating,
    isDeleteError,
    isDeleteSuccess,
    deleteError,
  };
};

export default useDeleteCategories;
