import React, { useState } from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCards.css'

function TinderCards() {
    const[people, setPeople] = useState([
        {
            name : "Mark",
            url : "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
        },
        {
            name : "LinusAtpug",
            url : "https://www.gmblrs.com/wp-content/uploads/2021/01/redtiger_trillionaire-logo2-500.webp",
        },
    ]);
    const swiped = (direction, nameTodelete) => {
        console.log("removing :" + nameTodelete);}

    const outOfFrame = (name) => {console.log(name + "Left the Screen")}
    return (
        <div className="TinderCards">
            <div className="TinderCardsContainer">
                 {people.map((person) => (
                 <TinderCard 
                    className="swipe" 
                    key={person.name} 
                    preventSwipe={["up", "down"]} 
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}>

                    <div style={{backgroundImage: `url(${person.url})`}}
                          className= "card"><h3>{person.name}</h3></div>

                 </TinderCard>))};
            
            </div>
        </div>
    )
}

export default TinderCards;