import { useEffect, useState } from "react";
import axios from "axios";

const Park = () => {
  const [parks, setParks] = useState([]);
  const [parkData, setParkData] = useState();

  const fetchParks = async () => {
    let response = await axios.get(
      "https://imgainationland-f8738abfcd85.herokuapp.com/park"
    );
    setParks(response.data);
  };

  useEffect(() => {
    fetchParks();
  }, []);

  return (
    <div>
      <input></input>
      {parks.map((park) => (
        <h3 key={park._id}> {park.name} </h3>
      ))}
    </div>
  );
};

export default Park;
