import { useEffect } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";             // To redirect to other pages
import {AiFillLock} from 'react-icons/ai';
import { encode } from "base-64";
import axios from "axios";

export default function Login(props){
    const navigate = useNavigate();

    let loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
    if(loggedIn==true)
        return (<Navigate to='/' replace/>);


    // const handleSubmit = async (event)=>{
    //     event.preventDefault();
    //     let user = {
    //         username: event.target.elements.formEmail.value,
    //         password: event.target.elements.formPassword.value
    //     }
    //     // console.log(user);
    //     let url = 'http://localhost:8080/auth';
    //     let options = {
    //         method: 'POST',
    //         mode: 'cors',
    //         headers:{
    //             'content-type':'application/json',
    //             'accept':'application/json',
    //             'authorization':'basic'+encode(user.username + ":" +  user.password),
    //             'origin':'http://localhost:3000'
    //         },
    //         body: JSON.stringify(user)
    //     }

    //     let res = await fetch(url,options);             //2nd param used for POST requests
    //     let data = await res.json();
        
    //     if(data){
    //         localStorage.setItem('userId',user.username);
    //         localStorage.setItem('loggedIn',true);
    //         navigate('/');
    //     }else{
    //         alert("Login Failed!");
    //     }
    // }

    async function handleSubmit(event) {
        event.preventDefault();
        let user = {
            email: event.target.elements.formEmail.value,
            password: event.target.elements.formPassword.value
        }

        const response = await axios({
          method: "post",
          url: "http://localhost:8080/api/v1/users/signin",
          data: {
            email: user.email,
            password: user.password,
          },
        });
        
        if (response.data !== null && response.data.status === "fail") {
          alert(response.data.message);
        }
        
        if (response.data !== null && response.data.status === "success") {
        //   setResData(response.data);
          
          localStorage.setItem("psnUserId", response.data.payload.user.id);
          localStorage.setItem("psnUserFirstName", response.data.payload.user.firstName);
          localStorage.setItem("psnUserLastName", response.data.payload.user.lastName);
          localStorage.setItem("psnUserEmail", response.data.payload.user.email);
      
          localStorage.setItem("psnToken", response.data.payload.token);
          navigate("/");
        }
    
    }
    

    return(
        <div className="mt-5 flex-container">
            <div className="mt-4 py-4 px-5 card mid-container">
                <span className="mx-auto"><AiFillLock size={80} color={"grey"}></AiFillLock></span>
                <h4 className="text-center mb-4">Log In</h4>
                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3 required">
                        <input type="email" className="form-control" id="formEmail" required placeholder="Email"/>
                        <label for="formEmail">Email</label>
                    </div>
                    <div className="form-floating mb-3 required">
                        <input type="password" className="form-control" id="formPassword" required placeholder="Password"/>
                        <label for="formPassword">Password</label>
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary w-100">Log In</button>
                    </div>
                </form>
                <Link to='/signup' className="text-end"><small>Don't have an account? Sign Up</small></Link>
            </div>
        </div>
    );
}