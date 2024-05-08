import { useEffect, useState } from "react";
import axios from "axios";

const Park = () => {
  const [parks, setParks] = useState([]);
  const [parkData, setParkData] = useState()

  const fetchParks = async () => {
    let response = await axios.get('https://imgainationland-f8738abfcd85.herokuapp.com/park')
    setParks(response.data)
  }

  const handleChange = (e) => {
    setParkData(e.target.value)
  }


  useEffect(() => {
    fetchParks();
  }, []);


  return (
    <div>
      <form onChange={handleChange}>
      <input type="text" value={parkData} placeholder="Enter Theme Name"></input>
    <button type="submit">Enter</button>
      </form>
      {parks.map(park =>(
        <div key={park._id}> 
        {park.name} 
        <img src={park.image} alt="" />
        </div>
      ))}
    </div>
  )
}

export default Park

