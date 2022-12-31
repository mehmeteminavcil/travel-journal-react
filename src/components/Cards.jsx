import LocationOnIcon from '@mui/icons-material/LocationOn';

function Cards(props){
    return(
        <div className="card">
            <div className='card--img_container'>
                <img className="card--img" src={props.Img} alt={props.description} />
            </div>
            <div className="card--info">
                <div className="card--location_container">
                    <LocationOnIcon style={{ color: "F55A5A", fontSize: "0.5rem"}} className='location--icon'/>
                    <span className='card--location_text'>{props.location}</span>
                    <a className='card--location_link' href={props.link} rel="noreferrer" target="_blank">View on Google Maps</a>

                </div>
                <h1  className="card--title">{props.title}</h1>
                <p className="card--date">{props.date}</p>
                <p className="card--description">{props.description}</p>

            </div>
        </div>
    )
}

export default Cards