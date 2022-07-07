import { Navigate } from "react-router-dom";

export default function ProtectedRoute(props){
    let token = localStorage.getItem("psnToken");

    if(token!==null)
        return props.children;
    else
        return (<Navigate to='/login' replace/>)
}