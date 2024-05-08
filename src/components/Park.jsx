// import { useEffect, useState, useCallback } from "react";
// import axios from "axios";

// const Park = () => {
//   const [parks, setParks] = useState([])
//   const [themeName, setThemeName] = useState("")
//   const [image, setImage] = useState("")
//   const [rides, setRides] = useState([])


//   const fetchParks = async () => {
//     let response = await axios.get('http://localhost:4000/park')
//     setParks(response.data)
//   }

//   // Handle Changes
//   const handleChange = useCallback((e) => {
//     setThemeName(e.target.value);
//   }, [])
//   const handleImageChange = useCallback((e) => {
//     setImage(e.target.value);
//   }, [])
//   const handleRidesChange = (e) => {
//     e.preventDefault()
//     console.log(e.target.value)
//     setRides([...rides, e.target.value])
//     // const newRides = [...rides];
//     // newRides[index].value = e.target.value;
//     // setRides(newRides);
//   }
//   console.log(rides)
//   // const handleAddRide = () => {
//   //   setRides([...rides, { value: "", label: "Select Rides" }]);
//   // }

//   // Handle Form Submit
//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       const response = await axios.post('http://localhost:4000/park', { name: themeName, image: image, rides: rides })
//       setParks([...parks, response.data])
//       console.log(response)
//       setThemeName("")
//       setImage("")
//       setRides([])
//     } catch (error) {
//       console.log(error)
//     }
//   };
// console.log(parks)
//   useEffect(() => {
//     fetchParks();
//   }, []);

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>Name the District</label>
//         <input
//           type="text"
//           value={themeName}
//           placeholder="Enter Name"
//           onChange={handleChange}
//         /><br></br>
//         <label>Enter URL link of Ride</label>
//         <input
//           type="text"
//           value={image}
//           onChange={handleImageChange}
//         /><br></br>
//         <div>
//           <label>Select a Ride</label>
//           <select multiple={true} value={rides} onChange={handleRidesChange}>
//             <option value="">Select Rides</option>
//             <option value="Roller Coasters">Roller Coasters</option>
//             <option value="Bumper Cars">Bumper Cars</option>
//             <option value="Bungee  Jumps">Bungee  Jumps</option>
//             <option value="Ferris Wheel">Ferris Wheel</option>
//             <option value="Tilt-A-Whir">Tilt-A-Whir</option>
//           </select>
//           <br />
//         </div>
//         {/* <button type="button" onClick={handleAddRide}>
//           Add Another Ride
//         </button><br></br> */}
//         <button type="submit">Enter</button>
//       </form>

//       <div className="parks">
//         <div>
//           {parks.map(park => (
//             <div key={park._id} className="park">
//               {park.name}
//               <img src={park.image} alt="" />
//               {park.rides?.map(ride =>(
//               <p>Rides: {ride}</p>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Park


import { useEffect, useState, useCallback } from "react";
import axios from 'axios'

const Park = () => {

  const [parks, setParks] = useState([])
  const [themeName, setThemeName] = useState("")
  const [image, setImage] = useState("")
  const [rides, setRides] = useState("")
  // const [food, setFood] = useState()

  const fetchParks = async () => {
    let response = await axios.get('http://localhost:4000/park')
    setParks(response.data)
  }

  // Handle Changes
  const handleChange = useCallback((e) => {
    setThemeName(e.target.value);
  }, []);
  const handleImageChange = useCallback((e) => {
    setImage(e.target.value);
  }, []);
  const handleRidesChange = useCallback((e) => {
    setRides(e.target.value);
  }, []);
  // const handleFoodChange = useCallback((e) => {
  //   setFood(e.target.value);
  // }, []);

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/park', { name: themeName, image: image, rides: rides })
      setParks([...parks, response.data])
      setThemeName("")
      setImage("");
      setRides("");
      // setFood("");
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchParks();
  }, []);

  return (

    <div className="park">
      <form onSubmit={handleSubmit} className="form-container">
        <label>Name the District: </label>
        <input

          type="text"
          value={themeName}
          placeholder="Enter Name"
          onChange={handleChange}
        />
        <br></br>
        <label>Image URL: </label>
        <input
          type="text"
          value={image}
          placeholder="Enter IMG URL"
          onChange={handleImageChange}
        />
        <br></br>
        <select value={rides} onChange={handleRidesChange}>
          <option value="">Select Rides</option>
          <option value="Roller Coasters">Roller Coasters</option>
          <option value="Bumper Cars">Bumper Cars</option>
          <option value="Bungee  Jumps">Bungee Jumps</option>
          <option value="Ferris Wheel">Ferris Wheel</option>
          <option value="Tilt-A-Whir">Tilt-A-Whir</option>
        </select><br></br>
        {/* <input
          type="text"
          value={food}
          placeholder="Enter Food"
          onChange={handleFoodChange}
        /> */}
        <button type="submit">Enter</button>
      </form>


      <div className="parkGrid">
        {parks.map((park) => (
          <div key={park._id} className="parkItem">
            <p className="parkName">{park.name}</p>
            <div>
              <img src={park.image} alt="" className="parkImg" />
              <p>Rides: {park.rides}</p>
              {/* <p>Food: {park.food}</p> */}
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Park

