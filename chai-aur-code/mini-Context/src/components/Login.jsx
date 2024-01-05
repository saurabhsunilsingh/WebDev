import { useContext, useState } from "react";
import UserContext from "../context/userContext";


function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password })
    }

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                name=""
                id=""
                placeholder="username"
                onChange={(e) =>
                    setUsername(e.target.value)
                }
                value={username} />

            <input
                type="text"
                name=""
                id=""
                placeholder="password"
                onChange={(e) =>
                    setPassword(e.target.value)
                }
                value={password} />

            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login;