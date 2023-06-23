import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import ApartmentsList from "./components/ApartmentsList";
import HomePage from "./components/HomePage";
import ApartmentDetails from "./components/ApartmentDetails";
import CreateApartment from "./components/CreateApartment";
import { useState,useEffect } from "react";
import axios from "axios";

function App() {
  const [apartments, setApartments] = useState(null);

  useEffect(() => {
		getApartmentsFromApi();
	}, []);


  const getApartmentsFromApi = () =>{
    axios
      .get(`https://ironbnb-m3.herokuapp.com/apartments`)
      .then((response)=>{
        setApartments(response.data)
      })
      .catch((e)=>{console.log(e)})
  }

  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/apartments' element={<ApartmentsList apartments={apartments}/>} />
          <Route path='/apartments/:id' element={<ApartmentDetails />} />
          <Route path='/apartments/create' element={<CreateApartment />} />
        </Routes>
       
    </div>
  );
}

export default App;
