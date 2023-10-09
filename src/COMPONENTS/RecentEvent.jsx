import { useEffect, useState } from "react";
import EventCard from "./EventCard";
import Marquee from "react-fast-marquee";
const RecentEvent = () => {
    const[eventData,setEventData] =useState(null)
useEffect(()=>{
fetch("event.json")
.then(res => res.json())
.then( data =>setEventData(data) )

},[])

console.log(eventData);
    return (
       <div className="bg-gray-100">
        <h1 className="text-5xl font-bold text-pink-500 text-center p-6 shadow ">OUR RECENT EVENTS</h1>
         <Marquee>
            <div className="flex gap-5">
            {
                eventData?.map((item,i)=><EventCard key={i} item={item}></EventCard>)
            }
        </div>
        </Marquee>
       </div>
    );
};

export default RecentEvent;