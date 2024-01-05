
export default function ContactList(props) {
    const arr = props.data;

    console.log(arr)

    const listItem = arr.map((value, index) => {
        return <li key={index}>{value}</li>
    })

    console.log("list", listItem)

    return <ul>{listItem}</ul>
}