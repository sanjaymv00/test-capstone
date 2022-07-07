import { useState, useEffect} from "react";

export default function Profile(props){
    // const [userData,setUserData] = useState({flag:false, userData:null});

    // useEffect(()=>{
    //     async function getUser(){
    //         let url = "http://localhost:3001/user";
    //         let options = {
    //             method: 'POST',
    //             headers:{
    //                 'content-type':'application/json'
    //             },
    //             body: JSON.stringify(localStorage.getItem('userId'))
    //         }

    //         let res = await fetch(url,options);
    //         let data = await res.json();
            
    //         console.log(data);
    //         setUserData({flag:true, userData: data});
    //     }

    //     getUser();
        
    // },[]);
    return(
        <div className="mt-5 flex-container">
            <div className="mt-5">
                    {/* {userData.flag && <div className="row">
                        <div className="col-3 card mid-container">
                        <div className="mb-4">
                            <p>Name: {console.log(userData.userData.name)}</p>
                        </div>
                        <div className="mb-3">
                            <p>Email: {userData.userData.email}</p>
                        </div>
                        <div className="mb-3">
                            <p>Picture: {userData.userData.picture}</p>
                        </div>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-8 card mid-container">
                            <div className="mb-3">
                                <p>Posts: {}</p>
                            </div>
                        </div>   </div>
                    } */}
                    <h3>Hey! This is my profile.</h3>
            </div>
        </div>    
    );
}