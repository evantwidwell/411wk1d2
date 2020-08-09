import React from 'react';
import './App.css';

const BeerComponent = (props) => {
return (
<div className="App">

<div>
<img class = "beerImg" src={props.beer.image_url}/>
<h1>Beer: {props.beer.name}</h1>
<h3>{props.beer.tagline}</h3>
<p>{props.beer.description}</p>
<button onClick={()=>props.liked(props.beer)}>{props.button}</button>
<p></p>
</div>

</div>

);
}

export default BeerComponent