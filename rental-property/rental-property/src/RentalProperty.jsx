import Property from "./Property";
import "./RentalProperty.css"

export default function RentalProperty({ properties }) {
    return (
        <>
            <div className="RentalProperty">
                {properties.map(i => (
                    <Property {...i} key={i.id} />
                ))}
            </div>

        </>
    )
}
