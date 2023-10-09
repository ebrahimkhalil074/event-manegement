import "../../App"

const Title = ({title}) => {
    return (
        <div className="flex h-[30vh] justify-center roboto text-center items-center">
          <div>
          <h3 className="text-xl font-light text-green-500"> Choose Your Best One</h3> 
           <h1 className="text-4xl font-semibold mt-8 shadow shadow-black drop-shadow-lg">{title}</h1>
          </div>
        </div>
    );
};

export default Title;