import useAuth from "./useAuth";
import Api from '../api/api'
export default function useRefreshToken (){
    const {setAuth} = useAuth();
    const refresh=async()=>{
        const response = await Api.getRefreshToken();
    setAuth(prev =>{
    
        // console.log(JSON.stringify(prev))
        // console.log(response.data.accessToken);
        // console.log(response.data.role)
        return {
            ...prev,
            role:response.data.role,
            accessToken:response.data.accessToken,
            name:response.data.name
        }
    });
    return response.data.accessToken;
    }
    return refresh
}