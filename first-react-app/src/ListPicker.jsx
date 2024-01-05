export default function ListPicker({ values }) {
    const randIdx = Math.floor(Math.random() * values.length);
    const randomElement = values[randIdx];
    return (
        <div>
            <p>
                The list of values:{values}<br/>
                Random Element : {randomElement}
            </p>
        </div>
    )

}