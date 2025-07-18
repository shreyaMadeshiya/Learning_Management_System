import { AiFillCloseCircle } from 'react-icons/ai'
import { FiMenu } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import Footer from '../Components/Footer';
import { logout } from '../Redux/Slices/AuthSlice';

function HomeLayout ({ children }){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // for checking if user is logged in

    const isLoggedIn = useSelector((state)=> state?.auth?.isLoggedIn);

    // for displaying the options acc to role 
    const role = useSelector((state)=> state?.auth?.role);

    function changeWidth(){
      const draweSide = document.getElementsByClassName("drawer-side");
        draweSide[0].computedStyleMap.width= 'auto';
    }

    function hideDrawer(){
        const element = document.getElementsByClassName("drawer-toggle");
        element[0].checked=false;

     
    }

    async function handleLogout(e){
         e.preventDefault();

        const res = await dispatch(logout());
        if(res?.payload?.success)
        navigate("/");
    }


    return(
        <div className="min-h-[90vh]">
            <div className="drawer absolute left-0 z-50 w-fit">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer" className="cursor-pointer relative">
                        <FiMenu
                           onClick={changeWidth}
                           size={"32px"}
                           className='font-bold text-white m-4'
                        />
                    </label>    
                </div>

                <div className="drawer-side ">
                    <label htmlFor="my-drawer" className='drawer-overlay'>
                    </label>
                    <ul className="menu p-4 h-1/1 w-48 sm:w-80 bg-base-100 text-base-content relative">
                        <li className="w-fit absolute right-2 z-50">
                            <button onClick={hideDrawer}>
                               < AiFillCloseCircle size={24} />
                            </button>
                        </li>

                        <li>
                            <Link to="/admin/dashboard">Home</Link>
                        </li>
                            {isLoggedIn && role == 'ADMIN' && (
                                <li>
                                    <Link> Admin DashBoard</Link>
                                </li>

                            )}
                        <li>
                            <Link to="/courses">All Courses</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>

                        <li>
                            <Link to="/about">About Us</Link>
                        </li>

                        {!isLoggedIn &&(
                            <li className='absolute bottom-4 w-[90%]'>
                            <div className='w-full flex items-center justify-center'>
                                <button className='bg-blue-500 hover:bg-blue-700 text-white  px-4 py-1 font-semibold rounded-md w-full '>
                                    <Link to="/login"> Login </Link>
 
                                </button>
                                <button className=' bg-pink-500 hover:bg-pink-700 text-white px-4 py-1 font-semibold rounded-md w-full'>
                                    <Link to="/Signup"> Signup </Link>
 
                                </button>

                            </div>
                            </li>
                        )}

                        {isLoggedIn &&(
                            <li className='absolute bottom-4 w-w[90%]'>
                            <div className='w-full flex items-center justify-center'>
                                <button className='bg-blue-500 hover:bg-blue-700 text-white  px-4 py-1 font-semibold rounded-md w-full '>
                                    <Link to="/user/profile"> Profile </Link>
 
                                </button>
                                <button className=' bg-pink-500 hover:bg-pink-700 text-white px-4 py-1 font-semibold rounded-md w-full'>
                                    <Link onClick={handleLogout}> Logout </Link>
 
                                </button>

                            </div>
                            </li>
                        )}
                    </ul>
                </div>

            </div>
             <main className="pt-16 px-4">
                {children}
            </main>

            <Footer />
        </div>
    );
}

export default HomeLayout;