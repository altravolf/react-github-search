import { useState } from "react";
import GithubForm from "../GithubForm/GithubForm";
import './GithubSearch.scss';
import GithubShow from "../GithubShow/GithubShow";
// import { THE_DATA, REPO_DATA } from "../../dummy";

const THE_URL = "https://api.github.com/users/"


function GithubSearch() {

    const [username, setUsername] = useState("altravolf");
    const [repo_data, setRepoData] = useState([]);
    const [data, setData] = useState({});

    const getUsername = async (val) => {
        setUsername(val);
        await fetchGithub(val); // pass the new username directly
    }

    const fetchGithub = async (username) => { // accept username as a parameter
        const res = await fetch(THE_URL + username);
        const data = await res.json();

        const repo_res = await fetch(THE_URL + username + "/repos");
        const repo_data = await repo_res.json();

        setData(data)
        setRepoData(repo_data)
    }



    return (
        <div className="GithubSearch">

            <h1>GitHub Profile Search</h1>
            <GithubForm fetchGithub={getUsername} />

            {data.id ? <GithubShow data={data} repos={repo_data} /> : <div className="error" >No Data to Display</div>}

        </div>
    );
}

export default GithubSearch;
