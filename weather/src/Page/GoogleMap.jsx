


export default function GoogalemapLoc({gMap}){
    return (
        <div>
            <iframe width="820"
             height="560"
              id="gmap_canvas"
               src={gMap}
               frameborder="0"
                scrolling="no"
                 marginheight="0" 
                 marginwidth="0">

                 </iframe>
        </div>
    )
}