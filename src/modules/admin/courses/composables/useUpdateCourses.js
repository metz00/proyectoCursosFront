import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { update } from "../services/courses.service";

const useUpdateCourses = () => {
  const queryClient = useQueryClient();

  const {
    mutate: updateCourse,
    isPending: isUpdating,
    isSuccess: isUpdateSuccess,
    isError: isUpdateError,
    error: updateError,
  } = useMutation({
    mutationFn: (payload) =>
      update(payload.id, {
        categoryId: payload.categoryId,
        course: payload.course,
        image: payload.image,
        description: payload.description,
        active: payload.active,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["courses"]);
    },
  });
  return {
    updateCourse,
    isUpdating,
    isUpdateSuccess,
    isUpdateError,
    updateError,
  };
};
export default useUpdateCourses;
