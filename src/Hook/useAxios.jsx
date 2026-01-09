import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://habit-tracker-server-woad.vercel.app',
  
});

const useAxios = () => {
    return axiosInstance;
}

export default useAxios;