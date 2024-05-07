
const Ride = ({name, image, type}) => {
    return (
        <div class name="ride">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>Type: {type}</p>
        </div>
    );
};