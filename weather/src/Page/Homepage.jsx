import { useState } from "react"

const Homepage=()=>{
    //api=`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`
    const [city,setCity]=useState("")
     const api_key="3f9eb30a8c0b0d47f7cbdf5d16ba8100"
    const handalCity=()=>{
        
    }
    return (
        <div>
            <h1>Weather app</h1>
            <div>
                <input type="text" placeholder="enter city"/>
                <button onClick={handalCity} type="submit">Search Weather</button>
            </div>
        </div>
    )
}

export default Homepage