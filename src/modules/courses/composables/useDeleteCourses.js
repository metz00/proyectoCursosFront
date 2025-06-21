import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { remove } from "../services/courses.service";

const useDeleteCourses = () => {
  const queryClient = useQueryClient();

  const {
    mutate: deleteCourse,
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
  return{
    deleteCourse,
    isUpdating,
    isDeleteError,
    isDeleteSuccess,
    deleteError,
  }
};


export default useDeleteCourses;
