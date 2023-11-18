import { useState } from "react"

function DayFunc({props}){
     const [day,setday]=useState("")
     const today=new Date(props.dt_text);
     
     const dayNum=today.getDay()
     console.log(today,"today is ",dayNum,"din")
     switch (dayNum) {
        case 0:setday("Sun")
            
            break;

        case 1:setday("Mon")
            
            break;
        case 2:setday("Tue")
            
            break;
        case 3:setday("Wed")
            
            break;
        case 4:setday("Thu")
            
            break;

        case 5:setday("Fri")
            
            break;
        case 6:setday("Sat")
            
            break;
        
    
     }
     return (
        <h3>{day}</h3>
     )
}
export default DayFunc