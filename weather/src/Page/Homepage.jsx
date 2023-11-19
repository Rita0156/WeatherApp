import { useEffect, useState } from "react"
//import Mapfunc from "../component/Map"
import GoogalemapLoc from "./GoogleMap"
import "./homepage.css"
import SevendayData from "./Sevenday"
import Temperature from "./Temperature"
const Homepage=()=>{
    
    const [src,setSrc]=useState("")
     const [parseCity,setParse]=useState("")
     const [info,setInfo]=useState([])
    const [city,setCity]=useState("")
    const [data,setData]=useState([])
    const information=[]
    const [iframe,setiframe]=useState("")
       
    const [max,setMax]=useState("")
    const [min,setMin]=useState("")
    const [rise,setRise]=useState("")
    const [set,setSet]=useState("")
     
     const api_key="3f9eb30a8c0b0d47f7cbdf5d16ba8100"
     
     const fetchReq=(lat,lon)=>{
       
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&q=${city}&appid=${api_key}`)
        .then((req)=>{
            return req.json();
        })
        .then((res)=>{
            console.log(res,"fetch req call")
            setData(res)
          setParse(res.name)  
        const mMax=(res.main.temp_max)
        const mMin=(res.main.temp_min);
        //console.log("max temp",mMax)
        const Fmin=((Number(mMin)-273.15))
        const Fmax=((Number(mMax)-273.15))
            setMin(Number(Fmin).toFixed(2))
            setMax(Number(Fmax).toFixed(2))
            
            setRise(res.sys.sunrise)
            setSet(res.sys.sunset)
            
            setiframe(`https://maps.google.com/maps?q=${res.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`)

            

        


        })
        .catch((e)=>{
                console.log(e)
         })
     }

    
     
     

     function getGeocur(){
        navigator.geolocation.getCurrentPosition(success)
         
        function success(position){
            console.log("inside success function",position)
            const latitude=position.coords.latitude
            const longitude=position.coords.longitude
            
            
            fetchReq(latitude,longitude)
            
            
        }
     }
     const weekday=async()=>{
        console.log("weekday");
       await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${parseCity}&appid=${api_key}`)
        .then((req)=>{
            console.log("req call")
            return req.json()
        })
        .then((res)=>{
            console.log("res data")
              console.log(res);
              setInfo(res.list)
              console.log(info,"information")
              for(let i=0; i<info.length; i++){
                if(i%8===0){
                    information.push(info[i])
                }
            }
        })
    }
   
    
    
     
    const handalCity=()=>{
        //getGeocur()
       fetchReq()
       //sevenDay()
       weekday()
       
    }
   
    
    useEffect(()=>{
        
       
        getGeocur() 
        //weekDayInfo()
        //weekday()
        //SevendayData()
         
    },[])
    useEffect(()=>{
        weekday()
    },[])
    
    
    return (
        <div style={{backgroundImage:"url(https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?cs=srgb&dl=pexels-pixabay-209831.jpg&fm=jpg)",paddingTop:"20px"}} >
            
            <div className="topbar" >
                <div className="search" style={{}} >
                <h3 style={{color:"white"}}>City :</h3>
                <input  onChange={(e)=>setCity(e.target.value)} type="text" placeholder="enter city name"/>
                </div >
                <button  onClick={handalCity} type="submit">Search Weather</button>
            </div>
            <h1 style={{color:"white"}}>Weather Information</h1>
            <div style={{display:"flex",width:"90%",margin:"auto",justifyContent:"space-between",marginBottom:"20px"}}>
           
               <Temperature cityName={data.name} min={min} max={max} rise={rise} set={set} />
            

            <div  style={{width:"50%"}}>
                <div className="gmap_canvas">
                    
                    <GoogalemapLoc gMap={iframe} />
                        
                </div>
                        
                

            </div>
            </div>
           <div>
              {information.map((i)=>(
                 <SevendayData maxTemp={i.main.temp_max}
                 minTemp={i.main.temp_min} props={i} />
              ))}
           </div>
             
        </div>
    )
}

export default Homepage;


