import { useQuery } from "@tanstack/vue-query";
import { computed } from "vue";
import { get } from "../services/categories.service";

const useCategories = (page, limit) => {
  const query = useQuery({
    queryKey: () => ["categories", page.value, limit.value],
    queryFn: () => get(page?.value || 1, limit?.value || 9999),
    staleTime: 10 * 60 * 1000,
    suspense: false,
  });

  const categories = computed(() => {
    return query.isSuccess.value ? query.data.value.data || [] : [];
  });
  
  const pagination = computed(() => {
    return query.isSuccess.value ? query.data.value.page || {} : {};
  });
  
  return {
    categories,
    pagination,
    getIsLoading: query.isLoading,
    getIsSuccess: query.isSuccess,
    getIsError: query.isError,
    categoriesError: query.error,
    refetch: query.refetch
  };
};

export default useCategories;