import {useEffect, useState} from 'react'
import './Style.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate()

  const [apiData, setApiData] = useState({
    name:'',
    key:'',
    published_at:'',
    typeof:'',
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWMyYzkzYTkxNGU0YTE1M2RjOWVkODJhZjA4ZGJlZSIsIm5iZiI6MTczMDc1MzUxOS42MTU1Njc3LCJzdWIiOiI2NTY5ZWFmYWEzMTNiODAwYzRlN2ViMzkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.uOh6_SEQZWXTqQpdTf0c5wyPFmjU9XmwKInP-4Xd6q0'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  }, [])
  

  return (
    <div className='player'>
      <img src={back_arrow_icon} onClick={()=>{navigate('/')}}/>
      <iframe 
        src={`https://www.youtube.com/embed/${apiData.key}`} 
        width='90%' 
        height='90%' 
        frameBorder="0"
        title='trailer'
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player