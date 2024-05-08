import { useEffect, useState, useCallback } from "react";
import axios from 'axios'

const Park = () => {
  const [parks, setParks] = useState([])
  const [themeName, setThemeName] = useState("")
  const [image, setImage] = useState("")
  const [rides, setRides] = useState()
  const [food, setFood] = useState()

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
  }, []);
  const handleRidesChange = useCallback((e) => {
    setRides(e.target.value);
  }, []);
  const handleFoodChange = useCallback((e) => {
    setFood(e.target.value);
  }, []);

  // Handle Form Submit
  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const response = await axios.post('https://imgainationland-f8738abfcd85.herokuapp.com/park', { name: themeName, image: image, rides: rides, food: food })
      setParks([...parks, response.data])
      setThemeName("")
      setImage("");
      setRides("");
      setFood("");
    } catch (error) {
      console.log(error)
    }
  }

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
        <input
          type="text"
          value={image}
          onChange={handleImageChange}
        /><br></br>
        <select value={rides} onChange={handleRidesChange}>
          <option value="">Select Rides</option>
          <option value="Roller Coasters">Roller Coasters</option>
          <option value="Bumper Cars">Bumper Cars</option>
          <option value="Bungee  Jumps">Bungee  Jumps</option>
          <option value="Ferris Wheel">Ferris Wheel</option>
          <option value="Tilt-A-Whir">Tilt-A-Whir</option>
        </select><br></br>
        <input
          type="text"
          value={food}
          placeholder="Enter Food"
          onChange={handleFoodChange}
        />
        <button type="submit">Enter</button>
      </form>

      <div>
        {parks.map(park => (
          <div key={park._id}>
            {park.name}
            <img src={park.image} alt="" />
            <p>Rides: {park.rides}</p>
            <p>Food: {park.food}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Park
