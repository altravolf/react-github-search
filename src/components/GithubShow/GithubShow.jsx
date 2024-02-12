import GithubRepos from "../GithubRepos/GithubRepos";
import './GithubShow.scss';
import dateFormat from "dateformat";

function GithubShow({ data, repos }) {

    const { login, id, avatar_url, public_repos, name, bio, html_url, created_at, followers, following } = data;

    return (
        <div className="GithubShow" id={id}>
            <div className="main-container">
                <div className="profile">
                    <div className="avatar">
                        <img src={avatar_url} alt={`${login} avatar`} />
                    </div>
                    <div className="title">
                        <div className="name">{name}</div>
                        <div className="login">
                            <a href={html_url} target="_blank">{login}</a>
                        </div>
                        <div className="joinDate">
                            Joined at <span>{dateFormat(created_at, "dd, mmmm, yyyy")}</span>
                        </div>
                    </div>
                </div>
                <div className="bio">
                    <p>{bio}</p>
                </div>

                <div className="info">
                    <div className="repos">
                        <span>Repos</span>
                        <span>{public_repos}</span>
                    </div>
                    <div className="followers">
                        <span>Followers</span>
                        <span>{followers}</span>
                    </div>
                    <div className="following">
                        <span>Following</span>
                        <span>{following}</span>
                    </div>
                </div>
            </div>
            <GithubRepos repos={repos} />
        </div>
    );
}

export default GithubShow;
