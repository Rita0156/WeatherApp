

import "./gmap.css"
export default function GoogalemapLoc({gMap}){
    return (
        <div className="gmap">
            <iframe className="ifram" style={{ 
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