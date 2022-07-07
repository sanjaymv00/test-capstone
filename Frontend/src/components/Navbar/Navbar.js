import { useNavigate, Link } from 'react-router-dom';
import './Navbar.css';
import {AiOutlineSearch,AiFillHome} from 'react-icons/ai';
import {FaUserCircle} from 'react-icons/fa';
import {RiSettings4Fill} from 'react-icons/ri';

export default function Navbar(props){
    const navigate = useNavigate();
    let token = localStorage.getItem("psnToken");

    if(token===null){
        return (
            <div className="nav-bar">
    
                <div className='nav-container flex-fill d-flex align-items-center'>
                    <div className='d-flex align-items-center'>
                        <img src={require("../../assets/logo.png")} className="logo mx-2 position-relative" height={"35px"} ></img>
                    </div>
                    <div className=''>
                        <div className='search-box d-inline-flex mx-auto px-3 '>
                            <span className='mx-auto form-inline'><AiOutlineSearch className='search-icon' color='grey' size={22}/></span>
                            <form class="form-inline mx-auto">
                                <input class="form-control mx-auto" type="search" placeholder="Search" aria-label="Search" />
                            </form>
                        </div>
                    </div>
                </div>
                <div className='nav-container '></div>
                <div className='nav-btn-bar'>
                    <div className="nav-btn-container d-flex align-items-center">
                        {/* <button className="nav-btn" onClick={()=>{navigate('/')}}>Home</button> */}
                        <span className='mx-2 icon-container w-100'><Link to='/'><AiFillHome className='nav-btn-icon' size={22}/></Link></span>
                    </div>
                    <div className="nav-btn-container d-flex align-items-center">
                        <button className="mx-2 px-5 nav-btn my-2" onClick={()=>{navigate('/login')}}><strong>Log In</strong></button>
                    </div>
                    <div className="nav-btn-container d-flex align-items-center">
                        <button className="mx-2 px-5 nav-btn my-2" onClick={()=>{navigate('/signup')}}><strong>Sign Up</strong></button>
                    </div>
                </div>
                
            </div>
        );
    }else{
        return (
            <div className="nav-bar">
    
                <div className='nav-container flex-fill d-flex align-items-center'>
                    <div className='d-flex align-items-center'>
                        <img src={require("../../assets/logo.png")} className="logo mx-2 position-relative" height={"35px"} onClick={()=>{navigate('/')}}></img>
                    </div>
                    <div className=''>
                        <div className='search-box d-inline-flex mx-auto px-3 '>
                            <span className='mx-auto form-inline'><AiOutlineSearch className='search-icon' color='grey' size={22}/></span>
                            <form class="form-inline mx-auto">
                                <input class="form-control mx-auto" type="search" placeholder="Search" aria-label="Search" />
                            </form>
                        </div>
                    </div>
                </div>
                <div className='nav-container '></div>
                <div className='nav-btn-bar'>
                    <div className="nav-btn-container d-flex align-items-center">
                        {/* <button className="nav-btn" onClick={()=>{navigate('/')}}>Home</button> */}
                        <span className='mx-2 icon-container w-100'><Link to='/'><AiFillHome className='nav-btn-icon' size={22}/></Link></span>
                    </div>
                    <div className="nav-btn-container d-flex align-items-center">
                        {/* <button className="nav-btn" onClick={()=>{navigate('/')}}>Home</button> */}
                        <span className='mx-2 icon-container w-100'><Link to='/profile'><FaUserCircle className='nav-btn-icon' size={22}/></Link></span>
                    </div>
                    <div className="nav-btn-container d-flex align-items-center">
                        {/* <button className="nav-btn" onClick={()=>{navigate('/')}}>Home</button> */}
                        <span className='mx-2 icon-container w-100' onClick={()=>{localStorage.clear(); window.location.reload();}}><Link to='/profile'><RiSettings4Fill className='nav-btn-icon' size={22}/></Link></span>
                    </div>
                </div>
                
            </div>
        );
    }

    
}