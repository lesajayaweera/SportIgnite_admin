import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login({isAuthenticated}){
    const navigate = useNavigate();

    const [username, SetUsername] = useState('');
    const [password,SetPassword]= useState('');
    return(
        <div>
            
        </div>
    );

}

export default Login;