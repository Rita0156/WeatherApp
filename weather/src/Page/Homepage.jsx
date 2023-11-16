import { useEffect, useState } from "react"
//import Mapfunc from "../component/Map"
import GoogalemapLoc from "./GoogleMap"
import "./homepage.css"
import Temperature from "./Temperature"
const Homepage=()=>{
    const images=["https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Weather-heavy-overcast.svg/2048px-Weather-heavy-overcast.svg.png",
                 "https://iconape.com/wp-content/png_logo_vector/rainy-weather-symbol-logo.png",
                 "https://clipart-library.com/data_images/193485.png"
    ]
    const [src,setSrc]=useState("")
       // box-shadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset";
       //api=`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`
    const [city,setCity]=useState("")
    const [name,setData]=useState([])
       //const [cur,setcur]=useState("")
    //const [lon,setLon]=useState("")
    //const [lat,setLet]=useState("")
    const [iframe,setiframe]=useState("")
       //const [cur,setCur]=useState("")
    const [max,setMax]=useState("")
    const [min,setMin]=useState("")
    const [rise,setRise]=useState("")
    const [set,setSet]=useState("")
      //const temp=''
     const api_key="3f9eb30a8c0b0d47f7cbdf5d16ba8100"
     
     const fetchReq=(lat,lon)=>{
        console.log("calling api",lat,"lat",lon,"lon",city,"city",api_key,"api key")
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&q=${city}&appid=${api_key}`)
        .then((req)=>{
            return req.json();
        })
        .then((res)=>{
            console.log(res,"res")
            setData(res.name)
            
        const mMax=(res.main.temp_max)
        const mMin=(res.main.temp_min);
        const Fmin=((Number(mMin)-32)*(5/9)-50)
        const Fmax=((Number(mMax)-32)*(5/9)-50)
            setMin(((Fmin-32)*0.57).toFixed(2))
            setMax(((Fmax-32)*0.57).toFixed(2))
            if(max<20){
                setSrc("https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Weather-heavy-overcast.svg/2048px-Weather-heavy-overcast.svg.png")
            }
            else if (max>20 && max<35){
                setSrc("https://iconape.com/wp-content/png_logo_vector/rainy-weather-symbol-logo.png")
            }
            else if (max>35){
                setSrc("https://clipart-library.com/data_images/193485.png")
            }
            setRise(res.sys.sunrise)
            setSet(res.sys.sunset)
            const iSrc=`https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`
            setiframe(iSrc)
        })
     }

     function getGeocur(){
        navigator.geolocation.getCurrentPosition(success)
         
        function success(position){
            //console.log("inside success function",position)
            const latitude=position.coords.latitude
            const longitude=position.coords.longitude
            //console.log("lat",latitude)
           // setLet(latitude)
            //setLon(longitude)
            //console.log(lat)
            //console
            fetchReq(latitude,longitude)
            
        }
     }
    
     
    const handalCity=()=>{
        getGeocur()
       fetchReq()

    }
    
    useEffect(()=>{
        
       
        getGeocur() 

         
    },[])
    
    
    return (
        <div style={{backgroundImage:"url(https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?cs=srgb&dl=pexels-pixabay-209831.jpg&fm=jpg)",paddingTop:"20px"}} >
            
            <div className="topbar" >
                <div className="search" style={{}} >
                <h3 style={{color:"white"}}>City :</h3>
                <input style={{width:"900px",height:"45px",fontSize:"20px",textAlign:"center"}} onChange={(e)=>setCity(e.target.value)} type="text" placeholder="enter city name"/>
                </div >
                <button style={{width:"20%",fontSize:"20px",fontWeight:"bold"}} onClick={handalCity} type="submit">Search Weather</button>
            </div>
            <h1 style={{color:"white"}}>Weather Information</h1>
            <div style={{display:"flex",width:"90%",margin:"auto",justifyContent:"space-between",marginBottom:"20px"}}>
           
               <Temperature cityName={name} min={min} max={max} rise={rise} set={set} />
            

            <div  style={{width:"50%"}}>
                <div className="gmap_canvas">
                    
                    <GoogalemapLoc gMap={iframe} />
                        
                </div>
                        


            </div>
            </div>
            <div style={{display:"flex",width:"95%",margin:"auto",justifyContent:"space-between"}}>
                <div style={{backgroundColor:"rgba(0, 0, 0, 0.56)",padding:"20px",color:"white"}}>
                    <h3>Sun</h3>
                    <img style={{width:"100px",height:"100px"}} src={src}/>
                    <h3>31.34 °C</h3>
                    <h3>23.15 °C</h3>
                </div>
                <div style={{backgroundColor:"rgba(0, 0, 0, 0.56)",padding:"20px",color:"white"}} >
                    <h3>Mon</h3>
                    <img style={{width:"100px",height:"100px"}} src={src}/>
                    <h3>28.34 °C</h3>
                    <h3>20.15 °C</h3>
                </div>
                <div style={{backgroundColor:"rgba(0, 0, 0, 0.56)",padding:"20px",color:"white"}}>
                    <h3>Tue</h3>
                    <img style={{width:"100px",height:"100px"}} src={src}/>
                    <h3>40.34 °C</h3>
                    <h3>35.15 °C</h3>
                </div>
                <div style={{backgroundColor:"rgba(0, 0, 0, 0.56)",padding:"20px",color:"white"}}>
                    <h3>Wed</h3>
                    <img style={{width:"100px",height:"100px"}} src={src}/>
                    <h3>31.34 °C</h3>
                    <h3>23.15 °C</h3>
                </div>
                <div style={{backgroundColor:"rgba(0, 0, 0, 0.56)",padding:"20px",color:"white"}}>
                    <h3>Thu</h3>
                    <img style={{width:"100px",height:"100px"}} src={src}/>
                    <h3>27.34 °C</h3>
                    <h3>24.15 °C</h3>
                </div>
                <div style={{backgroundColor:"rgba(0, 0, 0, 0.56)",padding:"20px",color:"white"}}>
                    <h3>Fri</h3>
                    <img style={{width:"100px",height:"100px"}} src={src}/>
                    <h3>30.34 °C</h3>
                    <h3>25.15 °C</h3>
                </div>
                <div style={{backgroundColor:"rgba(0, 0, 0, 0.56)",padding:"20px",color:"white"}}>
                    <h3>Sat</h3>
                    <img style={{width:"100px",height:"100px"}} src={src}/>
                    <h3>29.34 °C</h3>
                    <h3>18.15 °C</h3>
                </div>
            </div>

            
        </div>
    )
}

export default Homepage


