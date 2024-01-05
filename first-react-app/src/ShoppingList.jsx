import ShoppingListItem from "./ShoppingListitem"

export default function ShoppingList({ items }) {
    return (
        <ul>
            {items.map((i) => (
                <ShoppingListItem
                    key={i.id}
                    item={i.item}
                    quantity={i.quantity}
                    completed={i.completed} />
                
                
                // <ShoppingListItem key={i.id} {...i} /> 
                //does what line 6-10 does but is clean and short here the spread operator take every key-value pair and passes them individually 
                //exactly what we did manually 
            ))}
        </ul>
    )
}








// {items.map((i) => (
//     <li
//         key={i.id}
//         style={{
//             color: i.completed ? "green" : "red",
//             textDecoration: i.completed ? "line-through" : "none",
//         }}>
//             {i.item} - {i.quantity}
//     </li>))}