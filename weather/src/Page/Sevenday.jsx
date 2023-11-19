import { useEffect,useState} from "react";
import DayFunc from "./Day";
import WeatherImages from "./WeatherImages";

const SevendayData=({minTemp,maxTemp,props})=>{
    
   // const [info,setInfo]=useState([])
    //const weatherData=[]
    

    //  const weekday=()=>{
    //     console.log("weekday");
    //      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API}`)
    //      .then((req)=>{
    //          console.log("req call")
    //          return req.json()
    //      })
    //      .then((res)=>{
    //          console.log("res data")
    //            console.log(res);
    //            setInfo(res.list)
    //      })
    //  }
   
    //  for(let i=0; i<40; i++){
    //      if(i%8===0){
             
             
    //         weatherData.push(info[i]);
    //      }
    //  }
   

    
    return (
         
                 
                    
                    <div className="weekday" >
                     <h3></h3>
                     <DayFunc props={props}/>
                     <WeatherImages temperature={props} />
                     <h3>{((minTemp)-273.15).toFixed(2)}°C</h3>
                     <h3>{((maxTemp)-273.15).toFixed(2)}°C</h3>
                    </div>
                
                
        
    )
}

export default SevendayData;