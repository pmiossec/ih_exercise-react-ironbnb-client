import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateApartment() {

    const [title, setTitle] = useState("");
    const [img, setImg] = useState("");
    const [pricePerDay, setPricePerDay] = useState("");

    const navigate = useNavigate();


    const createNewApartment = e => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/apartments`, {
            title, img, pricePerDay
        })
        .then(r => {
            console.log("created", r.data);
            navigate("/apartments");
        })
        .catch(console.log);
    }

    return (
        <div id="create-appartment">
        <h1>Create Apartment</h1>
        <form onSubmit={e => createNewApartment(e)}>

            <label>Title:
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
            </label>
            <label>Image Url:
                <input type="text" value={img} onChange={e => setImg(e.target.value)} />
            </label>
            <label>€/day
                <input type="number" value={pricePerDay} onChange={e => setPricePerDay(e.target.value)} required  />
            </label>

            <button type="submit">Create</button>

        </form>
        </div>);
}