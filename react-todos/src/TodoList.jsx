import List from '@mui/material/List';
import { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

const initialTodos =
    [
        { id: 1, text: "walk the dog", completed: false },
        { id: 2, text: "walk the cat", completed: false },
        { id: 3, text: "walk the fish", completed: true },
        { id: 4, text: "walk the spider", completed: false },
        { id: 5, text: "walk the elephant", completed: false }
    ]

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if (!data) return [];
    return data;
}

export default function TodoList() {
    const [todos, setTodos] = useState(getInitialData)//initialTodos is replace
    // and initially rendered with todos avaliable on the local Storage.

    const removeTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((t) => t.id !== id);
        });
    };

    const toggleTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed }
                } else {
                    return todo;
                }
            })
        })
    }

    const addTodo = (text) => {
        setTodos(prevTodos => {
            return [...prevTodos, { text: text, id: crypto.randomUUID(), completed: false }]
        })

    }

    useEffect(() => {
        localStorage.setItem(
            "todos", JSON.stringify(todos)
        );
    }, [todos])//localStorage gets updated everytime our todos change


    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            m:3
        }}>
            <Typography variant="h3" component="h1" sx={{ flexGrow: 1 }}>
                To-Do
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map((todo) => (
                    <TodoItem todo={todo} key={todo.id} removeTodo={() => removeTodo(todo.id)} toggleTodo={() => toggleTodo(todo.id)} />
                ))}

                <TodoForm addTodo={addTodo} />
            </List>

        </Box>

    )


}



// export default function CheckboxList() {
//     const [checked, setChecked] = React.useState([0]);

//     const handleToggle = (value: number) => () => {
//         const currentIndex = checked.indexOf(value);
//         const newChecked = [...checked];

//         if (currentIndex === -1) {
//             newChecked.push(value);
//         } else {
//             newChecked.splice(currentIndex, 1);
//         }

//         setChecked(newChecked);
//     };

//     return (
//         <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//             {[0, 1, 2, 3].map((value) => {

//             })}
//         </List>
//     );
// }
