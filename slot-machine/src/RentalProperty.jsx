export default function RentalProperty(properties) {
    return (
        <>
            <h1>{properties.name}</h1>
            <h2>${properties.price} a night</h2>
            <h3>{properties.rating}</h3>
        </>
    )
}
