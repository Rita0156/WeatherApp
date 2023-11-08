

const  Mapfunc=({max,name,cur,min})=>{
    return (
        <div>
            <h1>City : {name}</h1>
            <h2>Current temperature : {cur}</h2>
            <h2>Minimum temperature : {min}</h2>
            <h2>Maximum temperature : {max}</h2>
        </div>
    )
}
export default Mapfunc