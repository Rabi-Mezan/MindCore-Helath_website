import { useContext } from "react"
import { AuthContext } from "../AuthProvider/Authprovider"


const useAuth = () => {
    return useContext(AuthContext);
}
export default useAuth;