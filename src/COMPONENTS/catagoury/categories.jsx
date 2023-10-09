import { useEffect, useState } from "react";
import Category from "./Catagory";


const Categories = () => {
const [categories,setCategories]=useState([])
useEffect(()=>{
fetch("category.json")
.then(res => res.json())
.then(data =>setCategories(data))
},[])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
            {
                categories.map((item,i)=><Category key={i} item={item}></Category>)
            }
        </div>
    );
};

export default Categories;