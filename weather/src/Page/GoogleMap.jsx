


export default function GoogalemapLoc({gMap}){
    return (
        <div>
            <iframe style={{ width:"80%",
             height:"500px",
              
               frameBorder:"0",
                scrolling:"no",
                 marginHeight:"0" ,
                 marginWidth:"0"}}  id="gmap_canvas"
                 src={gMap}>
                    
                 </iframe>
        </div>
    )
}