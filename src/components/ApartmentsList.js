
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
                    <img src={apartment.img?.length ? apartment.img : "https://placehold.co/400x260?text=No%20photo%20available" } alt={apartment.title} />
                    <Link to={`/apartments/${apartment._id}`}>More Details</Link>
                </div>
            )
       
        })}
        

    </div>)
}