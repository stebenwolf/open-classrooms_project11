import logements from "../assets/logements";

function Carrousel({id}) {
    return (
        <div>
            {logements[id].pictures.map((pic) => (
                <img src={pic} alt='Carousel Pic' />
            ))}
        </div>
    );
}

export default Carrousel;