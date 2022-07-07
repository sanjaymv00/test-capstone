import { useEffect } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";             // To redirect to other pages
import {AiFillLock} from 'react-icons/ai';
import axios from "axios";

export default function Signup(props){
    
    const navigate = useNavigate();

    let loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
    if(loggedIn==true)
        return (<Navigate to='/' replace/>);

    // const handleSubmit = async (event)=>{
    //     event.preventDefault();
    //     let user = {
    //         username: event.target.elements.formName.value,
    //         // email: event.target.elements.formEmail.value,
    //         password: event.target.elements.formPassword.value
    //     }
    //     // console.log(user);

    //     let url = 'http://localhost:8080/subs';
    //     let options = {
    //         method: 'POST',
    //         mode: 'cors',
    //         headers:{
    //             'content-type':'application/json',
    //             'accept':'application/json',
    //             'origin':'http://localhost:3000'
    //         },
    //         body: JSON.stringify(user)
    //     }

    //     let res = await fetch(url,options);             //2nd param used for POST requests
    //     let data = await res.json();
        
    //     if(data){
    //         navigate('/login');
    //     }else{
    //         alert("Signup Failed!");
    //     }
    // }

    async function handleSubmit(event) {
        event.preventDefault();
        let user = {
            name: event.target.elements.formName.value,
            email: event.target.elements.formEmail.value,
            password: event.target.elements.formPassword.value
        }

        const response = await axios({
          method: "post",
          url: "http://localhost:8080/api/v1/users/save",
          data: {
            firstName: user.name,
            lastName: user.name,
            email: user.email,
            password: user.password,
            role: "user",
          },
        });
    
        // if (response.data !== null) {
        //   setResData(response.data);
        // }
        
        if (response.data !== null && response.data.status === "fail") {
          alert(response.data.message);      
        }
    
        if (response.data!== null && response.data.status === "success") {
          navigate("/login");
        }
    
      }

    return(
        <div className="mt-4 mb-3 flex-container">
            <div className="mt-2 py-4 px-5 card mid-container">
                <span className="mx-auto"><AiFillLock size={80} color={"grey"}></AiFillLock></span>
                <h4 className="text-center mb-4">Sign Up</h4>
                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3 required">
                        <input type="text" className="form-control" id="formName" required placeholder="Name"/>
                        <label for="form Name">Name</label>
                    </div>
                    <div className="form-floating mb-3 required">
                        <input type="email" className="form-control" id="formEmail" required placeholder="Email"/>
                        <label for="formEmail">Email</label>
                    </div>
                    <div className="form-floating mb-3 required">
                        <input type="password" className="form-control" id="formPassword" required placeholder="Password"/>
                        <label for="formPassword">Password</label>
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                    </div>
                </form>
                <Link to='/login' className="text-end"><small>Already have an account? Log In</small></Link>
            </div>
        </div>
    );
}