import { useEffect,useState} from "react";
import DayFunc from "./Day";
import WeatherImages from "./WeatherImages";
import "./seven.css"
const SevendayData=({cityName,API})=>{
    
    const [info,setInfo]=useState([])
    let weatherData=[]
    const [weatherDataMap,setWeatherDataMap]=useState([])
    

      const weekday=()=>{
         console.log("weekday");
          fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API}`)
          .then((req)=>{
              console.log("req call")
              return req.json()
          })
          .then((res)=>{
              
                //console.log(res.list,"7day res");
                setInfo([...res.list])
               // console.log(info,"info")
                weatherData=[]
                for(let i=0; i<res.list.length; i++){
                  if(i%8===0){
                     //console.log("for loop i",i)
                     
                     weatherData.push(res.list[i]);
                  }
              }
              setWeatherDataMap([...weatherData])
              //console.log(weatherDataMap,"weatherdatamap")
               
          })
      }
     
      //console.log(weatherDataMap,"weatherdatamap-1")
      useEffect(()=>{
       
        weekday()
       
      },[])
   

    
    return (
         
                 
                    
                    <div className="weekday">
                        {weatherDataMap.length>0 && weatherDataMap.map((item)=>(
                            <div key={item.dt_text} className="weekday" style={{boxShadow:"rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;",display:'flex',flexDirection:"column",width:"15%"}} >
                            
                           <DayFunc props={item}/>
                            <WeatherImages key={item.dt.txt} temperature={item} />
                            <h3>{((item.main.temp_max)-273.15).toFixed(2)}°C</h3>
                            <h3>{((item.main.temp_min)-273.15).toFixed(2)}°C</h3>
                           </div>
                        ))}
                    </div>
                
                
        
    )
}

export default SevendayData;

//box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;