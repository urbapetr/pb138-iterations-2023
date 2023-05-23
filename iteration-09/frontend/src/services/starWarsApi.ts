import { User, Channel, Message, MessageReaction, ResponseMulti, ResponseSingle, Emoji } from "../models";
import axiosInstance from "./base";

export const getUsers = async (): Promise<ResponseMulti<User>> => {
    const response = await axiosInstance.get('/users');
    return response.data;
}

export const getChannels = async (): Promise<ResponseMulti<Channel>> => {
    const response = await axiosInstance.get('/channels');
    return response.data;
}

export const getSingleChannel = async (id: string): Promise<ResponseSingle<Channel>> => {
    const response = await axiosInstance.get(`/channels/${id}`);
    return response.data;
}

export const getEmojis = async (): Promise<ResponseMulti<Emoji>> => {
    const response = await axiosInstance.get('/emojis');
    return response.data;
}

export const getMessages = async (): Promise<ResponseMulti<Message>> => {
    const response = await axiosInstance.get('/messages');
    return response.data;
}

export const createChannel = async (name: string): Promise<ResponseSingle<unknown>> => {
    const response = await axiosInstance.post(`/channels/${name}`, { name });
    return response.data;
}
