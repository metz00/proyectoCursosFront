import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { create } from "../services/categories.service";

const useCreateCategories = () => {
  const queryClient = useQueryClient();

  const {
    mutate: createCategory,
    isPending: isUpdating,
    isError: isCreateError,
    isSuccess: isCreateSuccess,
    error: createError,
  } = useMutation({
    mutationFn: (payload) => create(payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["courses"]);
    },
  });
  return {
    createCategory,
    isUpdating,
    isCreateError,
    isCreateSuccess,
    createError,
  };
};

export default useCreateCategories;
