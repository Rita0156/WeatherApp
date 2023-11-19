import { useEffect, useState } from "react";


function WeatherImages({temperature}){
     const temp=temperature.main.temp_max-273.15
    const [image,setimage]=useState("https://icons.veryicon.com/png/o/weather/icon-by-qning/weather-icon-cloudy.png");
     const changeImage=()=>{
        if(temp<23){
            setimage("https://icons.veryicon.com/png/o/weather/icon-by-qning/weather-icon-cloudy.png")
        }
       else if(temp>25){
          setimage("https://i.pinimg.com/originals/36/bf/f0/36bff0ab1300f5409722973b82ef9c96.png")
        }
     }
     useEffect(()=>{
        changeImage()
     })
         return (
            <div>
                <img style={{width:"100px",height:"100px"}} src={image} alt="day"/>
                      
            </div>
         )
}
export default WeatherImages;