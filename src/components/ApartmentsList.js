
import { Link } from "react-router-dom";

export default function ApartmentsList({apartments}) {
    
         if(apartments=== null){
                return <p>loading...</p>
            }   
        console.log(apartments);
    return (<div>

        {apartments.map((apartment)=>{

            return(
                <div key={apartment._id} className='apartment-box'>
                    <p>Title: {apartment.title}</p>
                    <p>Price per day: {apartment.pricePerDay}€</p>
                    <img src={apartment.img} alt={apartment.title} />
                    <Link to={`/apartments/${apartment._id}`}>More Details</Link>
                </div>
            )
       
        })}
        

    </div>)
}