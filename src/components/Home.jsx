
const Home = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  };
  const imaginationLandStyle = {
    fontFamily: 'Brush Script MT, cursive',
    fontSize: '60px',
    color: 'blue',
  };
  return (
    <div style={containerStyle}>
      <div style={imaginationLandStyle}>
        Imagination Land
      </div>
    </div>
  );
};
export default Home;
