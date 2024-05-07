import { useEffect, useState } from "react";

const Park = () => {
  const [parkData, setParkData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchParkData = async () => {
      try {
        const response = await fetch("/park");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setParkData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchParkData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error{error}</div>;

  return (
    <div>
      <h1>Theme Park Details</h1>
      {parkData ? (
        <div>
          <h2>{parkData.name}</h2>
          <img src={parkData.image} alt="Park Image" />
          <h3>Rides</h3>
          <ul>
            {parkData.rides.map((ride, index) => (
              <li key={index}>
                {ride.name} - {ride.ride}
              </li>
            ))}
          </ul>
          <h3>Food Options</h3>
          <ul>
            {parkData.food.map((food, index) => (
              <li key={index}>{food.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div>No park details available.</div>
      )}
    </div>
  );
};

export default Park