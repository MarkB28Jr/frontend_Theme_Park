import { useEffect, useState } from "react";
import axios from 'axios'

const Park = () => {
  const [parks, setParks] = useState();

  const fetchParks = async () => {
    let response = await axios.get('https://imgainationland-f8738abfcd85.herokuapp.com/park')
    setParks(response.data)
  }

  // const fetchparks = async () => {
  //   try {
  //     const response = await fetch("/park");
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     const data = await response.json();
  //     setparks(data);
  //   } catch (error) {
  //     setError(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  useEffect(() => {
    fetchParks();
  }, []);

  return (
    <div>
      {parks.map(park =>(
        <h3 key={park._id}> {park.name} </h3>
      ))}
    </div>
  )
}
export default Park