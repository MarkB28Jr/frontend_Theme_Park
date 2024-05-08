import { useEffect, useState, useCallback } from "react";
import axios from "axios";

const Park = () => {
  const [parks, setParks] = useState([])
  const [themeName, setThemeName] = useState("")
  const [image, setImage] = useState("")
  const [rides, setRides] = useState([{ value: "", label: "Select Rides" }])


  const fetchParks = async () => {
    let response = await axios.get('https://imgainationland-f8738abfcd85.herokuapp.com/park')
    setParks(response.data)
  }

  // Handle Changes
  const handleChange = useCallback((e) => {
    setThemeName(e.target.value);
  }, [])
  const handleImageChange = useCallback((e) => {
    setImage(e.target.value);
  }, [])
  const handleRidesChange = useCallback((index, e) => {
    const newRides = [...rides];
    newRides[index].value = e.target.value;
    setRides(newRides);
  }, [rides])
  const handleAddRide = () => {
    setRides([...rides, { value: "", label: "Select Rides" }]);
  }

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('https://imgainationland-f8738abfcd85.herokuapp.com/park', { name: themeName, image: image, rides: rides })
      setParks([...parks, response.data])
      setThemeName("")
      setImage("")
      setRides([{ value: "", label: "Select Rides" }])
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    fetchParks();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name the District</label>
        <input
          type="text"
          value={themeName}
          placeholder="Enter Name"
          onChange={handleChange}
        /><br></br>
        <label>Enter URL link of Ride</label>
        <input
          type="text"
          value={image}
          onChange={handleImageChange}
        /><br></br>
        {rides.map((ride, index) => (
          <div key={index}>
            <label>Select a Ride</label>
            <select value={ride.value} onChange={(e) => handleRidesChange(index, e)}>
              <option value="">Select Rides</option>
              <option value="Roller Coasters">Roller Coasters</option>
              <option value="Bumper Cars">Bumper Cars</option>
              <option value="Bungee  Jumps">Bungee  Jumps</option>
              <option value="Ferris Wheel">Ferris Wheel</option>
              <option value="Tilt-A-Whir">Tilt-A-Whir</option>
            </select>
            <br />
          </div>
        ))}
        <button type="button" onClick={handleAddRide}>
          Add Another Ride
        </button><br></br>
        <button type="submit">Enter</button>
      </form>

      <div className="parks">
        <div>
          {parks.map(park => (
            <div key={park._id} className="park">
              {park.name}
              <img src={park.image} alt="" />
              <p>Rides: {park.rides}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Park
