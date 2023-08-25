import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Player from '../Player/Player';


function PlayerListe() {

    const player = [
        {
          name: "MESSI",
          team: "barcelone",
          nationality:"argentine",
          jerseyNumber:"9",
          age:"33",
          image : 'https://assets-fr.imgfoot.com/media/cache/1200x900/lionel-messi-psg-2223-1.jpg'
        },
        {
          name: "Ronaldo",
          team: "real",
          nationality:"portugois",
          jerseyNumber:"7",
          age:"38",
          image : "https://static01.nyt.com/images/2022/12/30/multimedia/30soccer-ronaldo-1-76fd/30soccer-ronaldo-1-76fd-videoSixteenByNine3000.jpg"
        },
        {
          name: "Davids",
          team: "juvintise",
          nationality:"paye-bas",
          jerseyNumber:"9",
          age:"35",
          image:"https://www.calcionews24.com/wp-content/uploads/news/da/davids-juventus-giugno-2014-ifa.jpg"
        },
        {
          name: "CARLOS",
          team: "real",
          nationality:"brasilien",
          jerseyNumber:"10",
          age:"40",
          image: "https://tmssl.akamaized.net/images/foto/galerie/roberto-carlos-real-madrid-1599659843-47033.jpg"
        },
      ];

  return (
   player.map(ply=>
    <Player name={ply.name}  team={ply.team} nationality={ply.nationality} age={ply.age} jerseyNumber={ply.jerseyNumber} image={ply.image}/>
    
    )
   
  )
}

export default PlayerListe