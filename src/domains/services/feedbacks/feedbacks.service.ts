import { axiosInstance } from "@/configs";
import { FeedbacksBodyRequest } from "@/domains/models/feedbacks";
import axios from "axios";

export const apiFeedbacks = {
    getAllFeedbacks: async () => {
        await axiosInstance
            .get('/api/feedbacks')
            .then((response) => {
                return response.data
            }) 
            .catch((error) => {
                if (axios.isAxiosError(error)){
                    return error.response?.data
                }
            })
    },
    postFeedbacks: async (data: FeedbacksBodyRequest): Promise<boolean | undefined> => {
        try {
            await axiosInstance.post("/api/feedbacks", data)
            return true
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return false;
            }
        }
    },
    updateFeedback: async (id: string, data: FeedbacksBodyRequest) => {
        await axiosInstance
            .put(`api/feedbacks/${id}`, data)
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                if (axios.isAxiosError(error)) {
                    return error.response?.data
                }
            })
    },
    deleteFeedback: async (id: string) => {
        await axiosInstance 
            .delete (`/api/feedbacks/${id}`)
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                if(axios.isAxiosError(error)){
                    return error.response?.data
                }
            })
    }

}