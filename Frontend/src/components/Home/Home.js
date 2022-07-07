import Post from '../Post/Post';
import PostContent from '../PostContent/PostContent';

export default function Home(props){
    // console.log(JSON.parse(localStorage.getItem('loggedIn')));
    // let loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
    let userId = localStorage.getItem('psnUserFirstName');

    let token = localStorage.getItem("psnToken");

    return (
        <div className="mt-5">
            <h2>Welcome to Socially!</h2>
            <br></br>
            {token!==null? <div className="post-content"><h4>Hello, {userId}. You are logged In.</h4><PostContent/></div>: <h4>Login or Signup to continue!</h4> }
        </div>
    );
    
}