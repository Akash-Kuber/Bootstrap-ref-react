import React from 'react'
// ../ whay double dot slash because first Navbar must out of component
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;


  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'> 

      <Link to="/">
        <img src={logo} alt='logo' width={160} height={32} loading='lazy' />
      </Link>

      <nav>
        <ul className='gap-x-6 text-richblack-100 flex'>
            <li>
                <Link to="/">Home</Link>
            </li>

            <li>
                <Link to="/">About</Link>
            </li>

            <li>
                <Link to="/">Contact</Link>
            </li>
            
        </ul>
      </nav>

      {/* Login - SignUp - LogOut - Dashboard */}

      <div className='flex items-center gap-x-4'>

        {/* here we take Link tag in bkt because we want to attach usestate variable with it */}
        { !isLoggedIn &&
            <Link to="/login">
                <button className='text-richblack-100 bg-richblack-800 py-[8px] px-[12px] 
                rounded-[8px] border border-richblack-700' >
                    Log in
                </button>
            </Link>
        }

        { !isLoggedIn &&
            <Link to="/signup">
                <button className='text-richblack-100 bg-richblack-800 py-[8px] px-[12px] 
                rounded-[8px] border border-richblack-700'>
                    Sign up
                </button>
            </Link>
        }

        { isLoggedIn &&
            <Link to="/">
                <button className='text-richblack-100 bg-richblack-800 py-[8px] px-[12px] 
                rounded-[8px] border border-richblack-700'>
                    Log Out
                </button>
            </Link>
        }

        { isLoggedIn &&
            <Link to="/">

                <button onClick={() => {
                    setIsLoggedIn(false);
                    toast.success("Logged Out");
                }} className='text-richblack-100 bg-richblack-800 py-[8px] px-[12px] 
                rounded-[8px] border border-richblack-700'>
                    Dashboard
                </button>

            </Link>
        }

      </div>

    </div>

  )
}

export default Navbar
