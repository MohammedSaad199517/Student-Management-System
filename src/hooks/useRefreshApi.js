import { useContext } from "react";
import RefreshContext from "../context/RefreshApi";

const useRefresh = () => {
    return useContext(RefreshContext);
    
}

export default useRefresh;