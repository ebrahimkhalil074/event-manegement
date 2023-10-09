import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="container mx-auto roboto bg-pink-100">
           
           <Outlet></Outlet> 
        </div>
    );
};

export default Root;