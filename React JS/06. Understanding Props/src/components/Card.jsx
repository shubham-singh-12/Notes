// =========================== Card.jsx ===========================
const Card = (props) => {
    return (
        <div>
            <div className="card">
                <img
                    src={props.image}
                    alt=""
                />
                <h1>{props.user}</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam, quia?
                </p>
                <button>View Profile</button>
            </div>
        </div>
    );
};

export default Card;
