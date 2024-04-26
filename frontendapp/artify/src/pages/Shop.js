import React,{useEffect,useState} from 'react'
import arts from "../data/data.json";
import Card from "../components/Card";
import { Link } from 'react-router-dom';
export default function Shop() {
  const [data,setData] = useState([])
 
  useEffect(() => {
    setData(arts)
  },[])
  return (
    <div className='p-5' >
        <div className="p-14 grid gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {
        
        data.length>0 && data.map((item) => {
          return (
            <Link to={`/cards/${item.title}`} key={item.title}>
            <Card
              url={item.url}
              title={item.title}
              price={item.price}
              artist = {item.artist}
            />
            </Link>
          ) 
        }
        )
      }
      </div>
    </div>
  )
}
