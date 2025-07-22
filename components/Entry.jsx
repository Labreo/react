export default function Entry(props){
    return (
        <div className="entry-container">
            <img className="main-image" src={props.img.src} alt={props.img.alt} />
            
            <div className="Body">
                <span className="FirstLine">
                    <img className="Marker" src="images/marker.png" width="7px" height="9.55px" />
                    <p className="PlaceName">{props.country}</p>
                    <a href={props.googleMapsLink}>View on Google Maps</a>
                </span>

                <h1>{props.title}</h1>
                <h4>{props.dates}</h4>

                <p>{props.text}</p>
            </div>
        </div>
    );
}
