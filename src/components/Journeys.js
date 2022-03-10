import React from 'react'
import icon from './earth-asia-solid.svg'

export default function Journeys(props) {
    return (
        <div className="container">
            <div className="cards">
                <img src={`../images/${props.item.coverImg}`} alt="lol" className="journeyImg" />
            </div>
            <div className="content">
                <span>
                    <img src={icon} alt="icon" className="icon"></img>
                    <span className="journey-location">{props.item.location}</span>
                    <>{props.item.googleMaps &&
                        < a href={props.item.googleMaps}>View on Google Maps</a>
                    }
                    </>
                    <p className="journey-date">{props.item.journey.startDate} - {props.item.journey.endDate}</p>
                    <span><h1>{props.item.title}</h1></span>
                    <p className="journey-description">{props.item.description}</p>
                </span>
            </div>
        </div >

    )
}