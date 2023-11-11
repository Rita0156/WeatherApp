


export default function GoogalemapLoc({gMap}){
    return (
        <div>
            <iframe width="820"
             height="560"
              id="gmap_canvas"
               src={gMap}
               frameBorder="0"
                scrolling="no"
                 marginHeight="0" 
                 marginWidth="0">

                 </iframe>
        </div>
    )
}