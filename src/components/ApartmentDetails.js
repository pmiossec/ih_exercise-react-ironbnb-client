import axios from "axios"
import { useEffect,useState } from "react"
import {useParams} from 'react-router-dom'

export default function ApartmentDetails() {
    const {id} = useParams();
    // const navigate = useNavigate();
    
    const [details,setDetails] = useState({})

    useEffect(()=>{
        axios
            .get(`https://ironbnb-m3.herokuapp.com/apartments/${id}`)
            .then((response)=>{
                setDetails(response.data);
            })
            .catch((e)=>{console.log(e)})
    })

    return (
        <div className="details-box">
            <h1>{details.title}</h1>
            <p>Price per day: {details.pricePerDay}€</p>
            <img src={details.img} alt={details.title} />
            

        </div> )
}