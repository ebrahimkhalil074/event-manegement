
const EventCard = ({item}) => {
    console.log(item);
    const{id,img,event_name} =item ||{}
    return (
        <div>
          <div className="card w-96 h-96 bg-base-100 shadow-xl image-full">
  <figure><img className="h-[250px]" src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-4xl">{event_name}</h2>
    
  </div>
</div>
        </div>
    );
};

export default EventCard;