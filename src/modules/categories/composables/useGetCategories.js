import { useQuery } from "@tanstack/vue-query";
import { computed } from "vue";
import { get } from "../services/categories.service";

const useCategories = (page, limit) => {
  const query = useQuery({
    queryKey: () => ["categories", page, limit],
    queryFn: () => get(page?.value || 1, limit?.value || 9999),
    staleTime: 10 * 60 * 1000,
    suspense: false,
  });

  const categories = computed(() => {
    return query.isSuccess.value ? query.data.value.data || [] : [];
  });
  const pagination = computed(() => {
    query.isSuccess.value ? query.data.value.pagination || {} : {};
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