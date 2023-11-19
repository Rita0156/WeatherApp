import { useEffect, useState } from "react"

function DayFunc({props}){
    //console.log(props,"props");
    console.log("day function")
     const [day,setday]=useState("")
     const date=props.dt_txt.split(" ")
     //console.log(props.dt_txt,"props dt_text")
     //const parts=date[0].split("/")
     const today=new Date(date[0]);
     const get=today.getUTCDay()
     
           
    const changeDay=()=>{
        if(get===0){
            setday("Sun")
          }
          else if(get===1){
              setday("Mon")
          }
          else if(get===2){
              setday("Tue")
          }
          else if(get===3){
              setday("Wed")
          }
          else if(get===4){
              setday("Thu")
              
          }
          else if(get===5){
              setday("Fri")
          }
          else if(get===6){
              setday("Sat")
          }
    }
   // return weekDays;
  // }
  useEffect(()=>{
    changeDay()
  })

    return(
        <h3>{day}</h3>
     )
}
export default DayFunc