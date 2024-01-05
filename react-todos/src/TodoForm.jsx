import { Create } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function TodoForm({ addTodo }) {
    const [text, setText] = useState("");

    function handleChange(evt) {
        setText(evt.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        addTodo(text);
        setText("");
    }

    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="outlined-basic"
                    label="Add To-Do"
                    variant="outlined"
                    onChange={handleChange}
                    value={text}
                    InputProps={{
                        endAdornment: <InputAdornment position="start">
                            <IconButton aria-label="create todo" edge="end" type="submit">
                                <Create />
                            </IconButton>
                        </InputAdornment>,
                    }}
                />
            </form>
        </ListItem>
    )
}