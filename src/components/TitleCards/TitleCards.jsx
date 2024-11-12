import { Link } from 'react-router-dom';
import './Style.css';
import { useEffect, useRef, useState } from 'react';


const TitleCards = ({title, componentHeader}) => {

const [apiData, setApiData] = useState([])

const cardsRef = useRef();

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWMyYzkzYTkxNGU0YTE1M2RjOWVkODJhZjA4ZGJlZSIsIm5iZiI6MTczMDc1MzUxOS42MTU1Njc3LCJzdWIiOiI2NTY5ZWFmYWEzMTNiODAwYzRlN2ViMzkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.uOh6_SEQZWXTqQpdTf0c5wyPFmjU9XmwKInP-4Xd6q0'
  }
};


const handleWhell= (e) => {
  e.preventDefault();
  cardsRef.current.scrollLeft += e.deltaY;
}

useEffect(()=>{
  
  fetch(`https://api.themoviedb.org/3/movie/${title}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel',handleWhell)
},[])


  return (
    <div className='titlecards'>
      <h2>{componentHeader?componentHeader:'Popular on Netflix'}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card)=>(
          <Link to={`/player/${card.id}`} className="card" key={card.id}>
            <img src={`https://image.tmdb.org/t/p/w500/`+card.backdrop_path} alt={card.original_title} />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TitleCards