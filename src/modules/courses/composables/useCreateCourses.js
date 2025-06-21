import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { create } from "../services/courses.service";

const useCreateCourses = () => {
  const queryClient = useQueryClient();

  const {
    mutate: createCourse,
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
  return{
    createCourse,
    isUpdating,
    isCreateError,
    isCreateSuccess,
    createError,
  }
};

export default useCreateCourses;