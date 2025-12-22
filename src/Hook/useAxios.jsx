import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://habit-tracker-server-flax.vercel.app',
  
});

const useAxios = () => {
    return axiosInstance;
}

export default useAxios;