export default function Entry(props){
    return (
        <div className="entry-container">
            <img className="main-image" src={props.entry.img.src} alt={props.entry.img.alt} />
            
            <div className="Body">
                <span className="FirstLine">
                    <img className="Marker" src="images/marker.png" width="7px" height="9.55px" />
                    <p className="PlaceName">{props.entry.country}</p>
                    <a href={props.entry.googleMapsLink}>View on Google Maps</a>
                </span>

                <h1>{props.entry.title}</h1>
                <h4>{props.entry.dates}</h4>

                <p>{props.entry.text}</p>
            </div>
        </div>
    );
}