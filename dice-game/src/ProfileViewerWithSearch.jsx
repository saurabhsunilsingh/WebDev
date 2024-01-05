import { useEffect, useState } from "react";
import axios from "axios";
import ProfileSearchForm from "./ProfileSearchForm";

const BASE_URL = "https://api.github.com/users";

export default function ProfileViewerWithSearch() {
    const [username, setUsername] = useState("colt");
    const [profile, setProfile] = useState({ data: null, isLoading: true });

    useEffect(
        function fetchUserOnUsernameChanges() {
            async function fetchUser() {
                const userResult = await axios.get(`${BASE_URL}/${username}`);
                setProfile({ data: userResult.data, isLoading: false })
            }
            fetchUser();
        },
        [username]
    )

    const search = (username) => {
        setProfile({ data: null, isLoading: true });
        setUsername(username);
    }

    if (profile.isLoading) return <i>Loading...</i>;
    return (
        <div>
            <ProfileSearchForm search={search} />
            <b>{profile.data.name}</b>
            <img src={profile.data.avatar_url} alt="IMG" />
        </div>
    )
}