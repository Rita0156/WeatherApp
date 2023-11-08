import { useEffect, useState } from "react"
import Mapfunc from "../component/Map"
const Homepage=()=>{
   // box-shadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset";
    //api=`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`
    const [city,setCity]=useState("")
    const [data,setData]=useState([])
    //const [cur,setcur]=useState("")
    const [lon,setLon]=useState("")
    const [lat,setLet]=useState("")
    const [iframe,setiframe]=useState("")
    //const [cur,setCur]=useState("")
    const [max,setMax]=useState("")
    const [min,setMin]=useState("")
    const [rise,setRise]=useState("")
    const [set,setSet]=useState("")
    //const temp=''
     const api_key="3f9eb30a8c0b0d47f7cbdf5d16ba8100"
     const fetchReq=async()=>{
       await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`)
        .then((req)=>{
            return req.json()
        })
        .then((res)=>{
            console.log(res)
            setData(res)
            
            setMax(res.main.temp_max)
            setMin(res.main.temp_min)
            setRise(res.sys.sunrise)
            setSet(res.sys.sunset)
            const iSrc=`https://maps.google.com/maps?q=${res.name},%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed`
            setiframe(iSrc)
        })
     }

     function getGeocur(){
        navigator.geolocation.getCurrentPosition(success)

        function success(position){
            const latitude=position.coords.latitude
            const longitude=position.coords.longitude
            fetchReq()
            setLet(latitude)
            setLon(longitude)
        }
     }
    
     
    const handalCity=()=>{
        getGeocur()
        fetchReq()

    }
    useEffect(()=>{
           fetchReq()
           getGeocur()
           handalCity()
    },[city])
    return (
        <div style={{backgroundImage:"url(https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?cs=srgb&dl=pexels-pixabay-209831.jpg&fm=jpg)"}} >
            <h1>Weather app</h1>
            <div style={{width:"90%",display:"flex",margin:"auto",justifyContent:"space-between",paddingLeft:"20px",paddingRight:"20px",paddingTop:"0px",paddingBottom:"0px",height:"20px"}}>
                <div style={{display:"flex",alignItems:"center"}}>
                <h2 style={{color:"white"}}>City :</h2>
                <input style={{width:"1000px"}} onChange={(e)=>setCity(e.target.value)} type="text" placeholder="enter city"/>
                </div>
                <button onClick={handalCity} type="submit">Search Weather</button>
            </div>
            <div style={{display:"flex",width:"90%",margin:"auto",justifyContent:"space-between"}}>
            <div key={data.id} style={{backgroundImage:"url(https://img.freepik.com/free-vector/dark-watercolor-background-design_1034-738.jpg)",width:"50%"}}>
                    <h1 style={{color:"white"}}>City : {data.name}</h1>
                
                  <div style={{display:"flex",justifyContent:"space-around", backgroundColor:"whitesmoke"}}>
                    
                      <h2>min temp - {min}</h2>
                      <h2>max temp - {max}</h2>
                  </div>
                  <div style={{display:"flex"}}>
                     <div>
                     <h3>Sunrise : {rise}</h3>
                     <h3>Sunset : {set}</h3>
                     </div>
                     <div>
                        <img style={{borderRadius:"70px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQThRcEATwQkIxWTrZ43f6XnhKTmjYVDrRJkQ&usqp=CAU"/>
                     </div>
                  </div>
            </div>
            

            <div  style={{width:"50%"}}>
                <div class="gmap_canvas">
                    <iframe width="600" height="500" id="gmap_canvas" src={iframe} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    
                        
                </div>
                        


            </div>
            </div>
            <div style={{display:"flex",width:"95%",margin:"auto",justifyContent:"space-between"}}>
                <div style={{backgroundColor:"rgba(0, 0, 0, 0.56)",padding:"20px",color:"white"}}>
                    <h3>Sun</h3>
                    <img style={{width:"100px",height:"100px"}} src="https://pnglib.nyc3.cdn.digitaloceanspaces.com/uploads/2020/11/sun-and-cloud-png_5fb26f319afd4.png"/>
                    <h3>31.34'C</h3>
                    <h3>23.15'C</h3>
                </div>
                <div style={{backgroundColor:"rgba(0, 0, 0, 0.56)",padding:"20px",color:"white"}} >
                    <h3>Mon</h3>
                    <img style={{width:"100px",height:"100px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Cartoon_cloud.svg/320px-Cartoon_cloud.svg.png"/>
                    <h3>28.34'C</h3>
                    <h3>20.15'C</h3>
                </div>
                <div style={{backgroundColor:"rgba(0, 0, 0, 0.56)",padding:"20px",color:"white"}}>
                    <h3>Tue</h3>
                    <img style={{width:"100px",height:"100px"}} src="https://assets.stickpng.com/images/5f48f8e868ecc70004ae6f8b.png"/>
                    <h3>40.34'C</h3>
                    <h3>35.15'C</h3>
                </div>
                <div style={{backgroundColor:"rgba(0, 0, 0, 0.56)",padding:"20px",color:"white"}}>
                    <h3>Wed</h3>
                    <img style={{width:"100px",height:"100px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Cartoon_cloud.svg/320px-Cartoon_cloud.svg.png"/>
                    <h3>31.34'C</h3>
                    <h3>23.15'C</h3>
                </div>
                <div style={{backgroundColor:"rgba(0, 0, 0, 0.56)",padding:"20px",color:"white"}}>
                    <h3>Thu</h3>
                    <img style={{width:"100px",height:"100px"}} src="https://assets.stickpng.com/images/5f48f8e868ecc70004ae6f8b.png"/>
                    <h3>27.34'C</h3>
                    <h3>24.15'C</h3>
                </div>
                <div style={{backgroundColor:"rgba(0, 0, 0, 0.56)",padding:"20px",color:"white"}}>
                    <h3>Fri</h3>
                    <img style={{width:"100px",height:"100px"}} src="https://assets.stickpng.com/images/5f48f8e868ecc70004ae6f8b.png"/>
                    <h3>30.34'C</h3>
                    <h3>25.15'C</h3>
                </div>
                <div style={{backgroundColor:"rgba(0, 0, 0, 0.56)",padding:"20px",color:"white"}}>
                    <h3>Sat</h3>
                    <img style={{width:"100px",height:"100px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Cartoon_cloud.svg/320px-Cartoon_cloud.svg.png"/>
                    <h3>29.34'C</h3>
                    <h3>18.15'C</h3>
                </div>
            </div>

            
        </div>
    )
}

export default Homepage