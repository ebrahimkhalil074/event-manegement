import { useContext } from "react";
import { NavLink,Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";


const Navbar = () => {

  const {user, LogOut}=useContext(AuthContext)

    const Navlinks =<div className=" flex justify-center  items-center gap-6">
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/login'>Login</NavLink></li>
    <li><NavLink to='/register'>Register</NavLink></li>
   {
    user&& <li><NavLink to='/about'>About us</NavLink></li>
   }
   {
    user&& <li><NavLink to='/contact'>Contact</NavLink></li>
   }
    </div>
const handelLogOut=()=>{
 LogOut()
.then(res=>{
console.log(res,'out');
})
.catch(err =>{
  console.log(err);
})

}


    return (
        <div>
           <div className="navbar bg-base-100 shadow-2xl">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {
        Navlinks
      }
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">RAHI MANAGEMENT</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        Navlinks
      }
    </ul>
  </div>
  <div className="navbar-end">
    {user?
  <div className="flex justify-center items-center gap-2">
<h1>{user.displayName}</h1>
<img className="w-[50px] h-12 rounded-[50%]" src={user.photoURL} alt="" />
<button className="btn bg-pink-400 text-white" onClick={handelLogOut} >Log Out</button>
  </div>:
    <Link  to='/login' >Login</Link>}
  </div>
</div> 
        </div>
    );
};

export default Navbar;