import { useEffect, useState } from "react";
import './Post.css';
import { useDispatch } from "react-redux";

export default function Post(props){
    const dispatch = useDispatch();

    const [postData,setPostData] = useState({flag:false, postData:null});

    const [postId, setPostId] = useState(props.postId);
    const [currentUserId, setCurrentUserId] = useState(
        localStorage.getItem("psnUserId")
      );
    const [loveStatus, setLoveStatus] = useState(false);
    const [commentStatus, setCommentStatus] = useState(false);
    const [commentContent, setCommentContent] = useState("");
    const [sendButtonDisable, setSendButtonDisable] = useState(true);

    let likeFlag = false;

    function toggleLike(event){
        console.log(event.target);
        event.target.style.display = "none";
        let parent = event.target.parentNode;
        if(likeFlag){
            parent.children[0].style.display = "unset";
            parent.parentNode.children[1].innerHTML=parseInt(parent.parentNode.children[1].innerHTML)-1;
            likeFlag = false;
        }else{
            parent.children[1].style.display = "unset";
            parent.parentNode.children[1].innerHTML=parseInt(parent.parentNode.children[1].innerHTML)+1;
            likeFlag = true;
        }
        // onClick={(event)=>{document.getElementById("unlike-img").style.display = "none"; document.getElementById("like-img").style.display = "unset"; document.getElementById("likes").innerHTML=parseInt(document.getElementById("likes").innerHTML)+1;}}
    }

    // useEffect(()=>{
    //     // console.log("Yooooooooooooooooooooooooo")
    //     async function getPost(){
    //         let url = "http://localhost:3001/postdata";
    //         let res = await fetch(url);
    //         let data = await res.json();
    //         // console.log(data);
    //         setPostData({flag:true, postData: data});
    //     }

    //     getPost();
        
    // },[]);

    return (
        <div className='container'>
            <div className="post-div">
                <div className="card mb-4 post-container">
                    <div className="row g-0">
                        <div className="col-md-3">
                            <img src={props.image} className="img-fluid rounded-start post-image" alt="..."></img>
                        </div>
                        <div className="col-md-9">
                            <div className="card-body">
                                <h5 className="card-title">{props.firstName + " " + props.lastName}</h5>
                                <p className="card-text">{props.content}</p>
                                <div className="flex">
                                    <div onClick={(event)=>{toggleLike(event)}}>
                                        <img src={require("./unlike.png")} className="img-fluid rounded-start unlike-img" id="unlike-img" alt="..."></img>
                                        <img src={require("./like.png")} className="img-fluid rounded-start like-img" id="like-img" alt="..."></img>
                                    </div>
                                    <p className="card-text like-text" id="likes">""</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    );
}