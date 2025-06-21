import { useQuery } from "@tanstack/vue-query";
import { computed } from "vue";
import { get } from "@/modules/courses/services/courses.service";

const useCourses = (page, limit) => {
  const query = useQuery({
    queryKey: () => ["courses", page, limit],
    queryFn: () => get(page?.value || 1, limit?.value || 999999),
    staleTime: 10 * 60 * 1000,
    suspense: false,
  });

  const courses = computed( () => {
   return query.isSuccess.value ? query.data.value.data || [] : []    
  });
  const pagination = computed(() =>
    query.isSuccess.value
    ? query.data.value.page || { totalPages: 1, totalItems: 0 }
    : { totalPages: 1, totalItems: 0 }
  );
  return {
    courses,
    pagination,
    getIsLoading: query.isLoading,
    getIsSuccess: query.isSuccess,
    getIsError: query.isError,
    soccerFieldsError: query.error,
    refetch: query.refetch,
  };
};

export default useCourses;
