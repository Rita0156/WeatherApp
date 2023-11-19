import { useState } from "react";
import "./temp.css";
const Temperature=({cityName,min,max,rise,set})=>{
    const today=new Date();
     const month = today.getMonth()+1;
     const year = today.getFullYear();
     const date = today.getDate();
     const day=today.getDay()
     const currentDate = date + "/" + month + "/" + year;
     const [weekDay,setweekDay]=useState("")
     
    return (
        <div className="cont">
            <div>
            <div className="info" >
                    <h1 style={{color:"white"}}>City : {cityName}</h1>
                    <h3 style={{color:"white"}}>Date :-{currentDate}</h3>
                   
                  <div className="temp" >
                    
                      <h2>min temp - {min}°C</h2>
                      <h2>max temp - {max}°C</h2>
                  </div>
                  <div className="sunrise" >
                     <div>
                     <h3>Sunrise : {rise}</h3>
                     <h3>Sunset : {set}</h3>
                     </div>
                     <div>
                        <img src="https://png.pngtree.com/png-vector/20220907/ourmid/pngtree-beautiful-summer-sunset-vector-illustration-png-image_6141750.png" alt="sunrose"/>
                     </div>
                  </div>
                  </div>
            </div>
        </div>
    )
}
export default Temperature