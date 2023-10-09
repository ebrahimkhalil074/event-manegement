import Marquee from "react-fast-marquee";
import { useLoaderData, useLocation, useParams } from "react-router-dom";
import EventItem from "../EventItem";
import Title from "../title/Title";
import SuccessEvent from "../SuccessEvent";
import Organizer from "../Organizer";
import Footer from "../Footer";


const Details = () => {

const loaderData =useLoaderData()
const {id} =useParams()
console.log(loaderData,id);
  const findData =loaderData?.find(item => item.id == id)
  console.log(findData);
  const {description,category,category_img,event_item,success_event,organizer } =findData ||{}
    return (
        <div>
          <div className=" flex bg-base-100 space-y-3 text-center justify-center items-center  h-full">
  <figure><img className="w-full h-full" src={category_img}alt="Shoes" /></figure>
  <div className=" space-y-3 w-1/2 ">
   <h2 className=" text-5xl text-orange-300">
     {category}  
    </h2>
    <p className="text-4xl ">{description}</p> 
  </div>
</div>
<div>
  <div>
    <Title title={"Which  is Right For Your Event Ground?"}></Title>
  </div>
<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{
event_item?.map((item,i)=><EventItem key={i} item={item}></EventItem> )
}
</div>
</div>

<div>
<div className=" flex text-center justify-center items-center h-[30vh] ">
  <h1 className="text-5xl text-pink-500">Our Success Full Event</h1>
</div>
<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-3">
{
success_event?.map((item,i)=><SuccessEvent key={i} item={item}></SuccessEvent> )
}
</div>
</div>


<div>
<div className=" flex text-center justify-center items-center h-[30vh] ">
  <h1 className="text-5xl text-pink-500">Our Event Organizer</h1>
</div>

<Marquee>
<div className=" flex gap-4 ">
{
organizer?.map((item,i)=><Organizer key={i} item={item}></Organizer> )
}
</div>
</Marquee>


</div>
<Footer></Footer>
      </div>
    );
};

export default Details;