import { QueryKey } from "@/domains/query-key"
import { apiFeedbacks } from "@/domains/services/feedbacks/feedbacks.service"
import { useQuery } from "@tanstack/react-query"

interface FeedbackHook {}

export const useFeedbacks = ({}: FeedbackHook) => {
    const {data, isLoading, error} = useQuery({
        queryKey: [QueryKey.LIST_FEEDBACKS],
        queryFn: () => apiFeedbacks.getAllFeedbacks
    })

    return {
        data,
        isLoading,
        error
    }
}