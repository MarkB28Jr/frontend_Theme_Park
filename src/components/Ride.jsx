
const Ride = ({name, image, type}) => {
    return (
        <div className="ride">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>Type: {type}</p>
        </div>
    );
};

export default Ride