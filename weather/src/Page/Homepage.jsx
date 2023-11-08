import { useEffect, useState } from "react"
import Mapfunc from "../component/Map"
const Homepage=()=>{
    //api=`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`
    const [city,setCity]=useState("")
    const [data,setData]=useState([])
    //const [cur,setcur]=useState("")
    const [lon,setLon]=useState("")
    const [lat,setLet]=useState("")
    const [iframe,setiframe]=useState("")
     const api_key="3f9eb30a8c0b0d47f7cbdf5d16ba8100"
     const fetchReq=async()=>{
       await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`)
        .then((req)=>{
            return req.json()
        })
        .then((res)=>{
            console.log(res)
            setData(res)
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
    },[])
    return (
        <div>
            <h1>Weather app</h1>
            <div>
                <input onChange={(e)=>setCity(e.target.value)} type="text" placeholder="enter city"/>
                <button onClick={handalCity} type="submit">Search Weather</button>
            </div>
            <div>
                
                  {/*data &&  <Mapfunc name={data.name} cur={data.main.temp} max={data.main.max_temp} min={data.main.min_temp} />*/}
               
            </div>
            <div>

            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe width="600" height="500" id="gmap_canvas" src={iframe} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    <a href="https://embedgooglemap.net/124/">
                        </a><br/>
                        
                        <a href="https://www.embedgooglemap.net"></a>
                        
                        </div>
                        </div>


            </div>

            
        </div>
    )
}

export default Homepage