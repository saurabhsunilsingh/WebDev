import "./Property.css"

export default function Property({ name, price, rating, id }) {
    return (
        <div className="Property">
            <h3>{name}</h3>
            <h4>${price} a night</h4>
            <h5>{rating}</h5>
        </div>
        );
}