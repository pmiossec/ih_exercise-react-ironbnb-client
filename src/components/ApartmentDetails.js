import axios from "axios"
import { useEffect,useState } from "react"
import {useParams} from 'react-router-dom'

export default function ApartmentDetails() {
    const {id} = useParams();
    // const navigate = useNavigate();
    
    const [details,setDetails] = useState({})

    useEffect(()=>{
        axios
            .get(`${process.env.REACT_APP_API_URL}/apartments/${id}`)
            .then((response)=>{
                setDetails(response.data);
            })
            .catch((e)=>{console.log(e)})
    })

    return (
        <div className="details-box">
            <h1>{details.title}</h1>
            <p>Price per day: {details.pricePerDay}€</p>
            {<img src={details.img?.length ? details.img : "https://placehold.co/400x260?text=No%20photo%20available"} alt={details.title} />}
        </div> )
}