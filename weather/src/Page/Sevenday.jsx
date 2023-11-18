import { useEffect,useState} from "react";
import DayFunc from "./Day";
import WeatherImages from "./WeatherImages";

const SevendayData=({cityName,API})=>{
    // const Images={
    //     hase:"https://clipart-library.com/images/pcoanLbei.png",
    //     sunny:"https://clipart-library.com/data_images/193485.png",
    //     rainy:"https://iconape.com/wp-content/png_logo_vector/rainy-weather-symbol-logo.png",
    //     cloudy:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Weather-heavy-overcast.svg/2048px-Weather-heavy-overcast.svg.png"
    // }
    //const [imgSrc,setImages]=useState("")
    const [info,setInfo]=useState([])
    const weatherData=[]
    //const day=""
    //const dayname=[]
    //const today=new Date()
   // const day=today.getDay()
    //console.log("inside 7 day func",cityName,API);

    const weekday=()=>{
        console.log("weekday");
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API}`)
        .then((req)=>{
            console.log("req call")
            return req.json()
        })
        .then((res)=>{
            console.log("res data")
              console.log(res.list);
              setInfo(res.list)
        })
    }
    //console.log(info)
    for(let i=0; i<info.length; i++){
        if(i%8===0){
             
             
            weatherData.push(info[i]);
        }
    }
   // const handalSrc=(temp)=>{
         
    //}

    useEffect(()=>{
     weekday()
    },[])
    return (
         <div  style={{display:"flex",width:"95%",margin:"auto",justifyContent:"space-between"}}>
                 {weatherData.map((item)=>(
                    
                    <div className="weekday" >
                     <DayFunc props={item}/>
                     <WeatherImages temperature={item.main.temp_max}/>
                     <h3>{((item.main.temp_min)-273.15).toFixed(2)}°C</h3>
                     <h3>{((item.main.temp_max)-273.15).toFixed(2)}°C</h3>
                    </div>
                 ))}
                
         </div>
    )
}

export default SevendayData;