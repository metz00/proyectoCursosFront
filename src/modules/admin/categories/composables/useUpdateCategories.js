import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { update } from "../services/categories.service";

const useUpdateCategories = () => {
  const queryClient = useQueryClient();

  const {
    mutate: updateCategory,
    isPending: isUpdating,
    isSuccess: isUpdateSuccess,
    isError: isUpdateError,
    error: updateError,
  } = useMutation({
    mutationFn: (payload) =>
      update(payload.id, {
        category: payload.category,
        active: payload.active,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["courses"]);
    },
  });
  return {
    updateCategory,
    isUpdating,
    isUpdateSuccess,
    isUpdateError,
    updateError,
  };
};

export default useUpdateCategories;