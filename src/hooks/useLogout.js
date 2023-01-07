import axios from "../api/axios";
import useAuth from "./useAuth";
import Api from '../api/api'

const useLogout = () => {
    const { setAuth } = useAuth();

    const logout = async () => {
        setAuth({});
        try {
            const response = await Api.logout();
        } catch (err) {
            console.error(err);
        }
    }

    return logout;
}

export default useLogout