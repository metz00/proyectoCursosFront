import { useQuery } from "@tanstack/vue-query";
import { computed } from "vue";
import { get } from "../services/users.service";

const useUsers = () => {
  const query = useQuery({
    queryKey: () => ["users"],
    queryFn: () => get(),
    staleTime: 10 * 60 * 1000,
    suspense: false,
  });

  const users = computed(() => {
    return query.isSuccess.value ? query.data.value || [] : [];
  });

  return {
    users,
    getIsLoading: query.isLoading,
    getIsSuccess: query.isSuccess,
    getIsError: query.isError,
    usersError: query.error,
    refetch: query.refetch,
  };
};

export default useUsers;