export default function ColorList({ colors }) {

    const elements = [<p>Hello!</p>, <h1>Bye!</h1>]
    return <div>
        <p>Color List</p>
        {/* <p>{colors}</p> */}
        {/* {elements} */}
        <ul>{colors.map((colorProp) => (
            <li style={{ color: colorProp }}>
                {colorProp}
            </li>
        ))}
        </ul>

    </div >
}