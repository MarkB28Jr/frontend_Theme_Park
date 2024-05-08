import { useEffect, useState, useCallback } from "react";
import axios from "axios";

const Park = () => {
  const [parks, setParks] = useState([]);
  const [name, setThemeName] = useState("");
  // const [parkData, setParkData] = useState()

  const fetchParks = async () => {
    let response = await axios.get(
      "https://imgainationland-f8738abfcd85.herokuapp.com/park"
    );
    setParks(response.data);
  };

  const handleChange = useCallback((e) => {
    setThemeName(e.target.value);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const response = axios.post(
        "https://imgainationland-f8738abfcd85.herokuapp.com/park",
        { name }
      );
      setParks([...parks, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchParks();
  }, []);

  return (
    <div className="park">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Enter Theme Name"
          onChange={handleChange}
        ></input>
        <button type="submit">Enter</button>
      </form>
      {parks.map((park) => (
        <div key={park._id}>
          {park.name}
          <img src={park.image} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Park;
