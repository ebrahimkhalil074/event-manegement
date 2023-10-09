import { Link } from "react-router-dom";

const Category = ({item}) => {
    const {description,category,category_img,id} =item ||{}
    return (
        <div>
            <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
    <img className="w-full h-full " src={category_img} alt="profile-picture" />
  </div>
  <div className="p-6 text-center">
    <h4 className=" block font-sans text-4xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-pink-500">
     {category}
    </h4> 
    <p className=" block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased ">{description}</p> 
  </div>
  <div className="flex justify-center gap-4 p-2 ">
    <a
      href="#facebook"
      className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
    >
      <i className="fab fa-facebook" aria-hidden="true"></i>
    </a>
    <a
      href="#twitter"
      className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
    >
      <i className="fab fa-twitter" aria-hidden="true"></i>
    </a>
    <a
      href="#instagram"
      className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
    >
      <i className="fab fa-instagram" aria-hidden="true"></i>
    </a>
  </div>
  <div className="p-6 pt-3">
   <Link to={`/details/${id}`}> <button
      className="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans  font-bold text-xl text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
     See Details
    </button></Link>
  </div>
</div>
        </div>
    );
};

export default Category;