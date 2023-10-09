import Navbar from "../COMPONENTS/Navbar/Navbar";

const Contact = () => {
    return (
       <div>
        <Navbar></Navbar>
         <div className="flex justify-center items-center h-screen">
           
           <div className=" space-y-5 p-20 bg-gray-300">
<h1 className="text-center text-4xl font-bold bg-pink-200 p-2 rounded-lg"> UNQUIRE BY FROM</h1>
<p>please fill this short form and one of our team will be in contact contact with shortly. </p>
<p>Please complite all fields below </p>  
<input type="text" placeholder="Name" className="input input-bordered input-error w-full  block" />
<input type="text" placeholder="Email" className="input input-bordered input-error w-full " />
<input type="text" placeholder="Phone" className="input input-bordered input-error w-full  block" />
<select className="select select-secondary w-full ">
 <option disabled selected>Pick your Event</option>
 <option>Wedding</option>
 <option>Birthday</option>
 <option>Anniversaries</option>
 <option>Engagement</option>
 <option>Retirement</option>
 <option>Baby Showers</option>
</select>
<br />
<textarea className="textarea textarea-secondary w-full" placeholder="Bio"></textarea>
<button className="btn btn-secondary" type="submit"> Submit</button>
         </div>
       </div>
       </div>
    );
};

export default Contact;