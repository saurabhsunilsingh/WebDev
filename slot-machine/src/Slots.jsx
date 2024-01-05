export default function Slots({ val1, val2, val3 }) {
    const isCombo = val1 == val2 && val1 == val3;

    return (
        <>
            <h1>{val1} {val2} {val3}</h1>
            <h2 style={{ color: isCombo ? "green" : "red" }}>{isCombo ? "You Win" : "You Lose"}</h2>
            <h2>{isCombo && "Congrats!!"}</h2>

        </>
    )


}