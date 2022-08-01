import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
      
const App =()=>{
   const[city , changecity] = useState("");  // object for whole info of city's current weather condition
   const[search , changesearch]=useState("");  //  name of searched city

   useEffect( () => {
     const fetchApi = async()=>{
       const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=69e75b08a5e09fa26892aaa8afc630bc`
       const response = await fetch (url);
       const resJson = await response.json();
        changecity(resJson.main);
     };

     fetchApi();
   }, [search])   

   return( 
     <>
     <div className="fluid-container py-4  ">
       <marquee><h1 className="heading">Welcome to Weather App</h1></marquee>
       <div className="row main_div">
       <div className="col-4"></div>
       <div className="col-3 content ">
        <input type="search" className="inputField text-center" placeholder="Enter your City" 
          value={search}
          onChange ={(event)=>{
                 changesearch(event.target.value)
          }}/>

      {!city ? (<h1 class="nofound">no data found </h1>):
        <>
         <h2 className="location text-center">{search}</h2>
         <h1 className="temp text-center py-4">Temp : {city.temp}&deg;C</h1>
         <h3 className="tempmin_max text-center py-4">Min : {city.temp_min}&deg;C | Max : {city.temp_max}&deg;C</h3>
        </>
      }
      </div>
      <div className="col-4"> </div>
      </div>
      </div>
     </>
   )
}

export default App;
