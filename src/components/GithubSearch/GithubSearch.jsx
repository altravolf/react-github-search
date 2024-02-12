import { useState } from "react";
import GithubForm from "../GithubForm/GithubForm";
import './GithubSearch.scss';
import GithubShow from "../GithubShow/GithubShow";

const THE_URL = "https://api.github.com/users/"

const THE_DATA = {
    "login": "altravolf",
    "id": 117466387,
    "node_id": "U_kgDOBwBlEw",
    "avatar_url": "https://avatars.githubusercontent.com/u/117466387?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/altravolf",
    "html_url": "https://github.com/altravolf",
    "followers_url": "https://api.github.com/users/altravolf/followers",
    "following_url": "https://api.github.com/users/altravolf/following{/other_user}",
    "gists_url": "https://api.github.com/users/altravolf/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/altravolf/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/altravolf/subscriptions",
    "organizations_url": "https://api.github.com/users/altravolf/orgs",
    "repos_url": "https://api.github.com/users/altravolf/repos",
    "events_url": "https://api.github.com/users/altravolf/events{/privacy}",
    "received_events_url": "https://api.github.com/users/altravolf/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Vivek Sehrawat",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "Hey there, I'm Vivek Sehrawat - also known as altravolf. I'm a MERN stack developer who loves tackling complex problems and building exciting web applications. ",
    "twitter_username": null,
    "public_repos": 15,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-11-04T15:27:49Z",
    "updated_at": "2024-02-06T06:08:48Z"
}


function GithubSearch() {

    const [username, setUsername] = useState("altravolf");

    const fetchGithub = async (val) => {
        setUsername(val);
        /*     const res = await fetch(THE_URL + username);
            const data = await res.json();
            return data; */
    }


    return (
        <div className="GithubSearch">
            <GithubForm fetchGithub={fetchGithub} />
            <GithubShow data={THE_DATA} />
        </div>
    );
}

export default GithubSearch;
