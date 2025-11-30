import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import UseAuth from './UseAuth';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  
});

const useAxiosSecure = () => {

    const navigate = useNavigate();
    const { user, signOutUser } = UseAuth();

   

    useEffect(() => {
        const requestInterceptor = instance.interceptors.request.use((config => {

            const token = user?.accessToken; 
            if (token) {
                config.headers.authorization = `Bearer ${token}`;
            }

            return config;
        }));
        instance.interceptors.response.use(res => {
            return res;
        }) , (error) => {
            const status = error.status
            if(status === 401 || status === 403){
            signOutUser()
            .then (() => {
                navigate('/register')
            })
        }
        
        };
        return () => {
            instance.interceptors.request.eject(requestInterceptor);
            instance.interceptors.response.eject();
        }

    }, [user, signOutUser, navigate]);

    return instance;
};

export default useAxiosSecure;