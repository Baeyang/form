import { useContext } from "react"
import { userContext } from "../Context/context"
import Swal from "sweetalert2";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

function Private() {
    const navigate = useNavigate();
    const {user }= useContext(userContext);
    console.log(user);
        return(
            <>
    {user.id !== undefined ? <Outlet></Outlet> :  <Navigate to = 'login'/>}
            </>
        )
    
}
export default Private;