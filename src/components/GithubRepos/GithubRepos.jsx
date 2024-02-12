import './GithubRepos.scss';
import dateFormat from "dateformat";

function GithubRepos({ repos }) {
    return (
        <div className="GithubRepos">
            <h2>Repos</h2>
            <div className="repos">
                {repos.map((repo) => (
                    <div key={repo.id} className="repo">
                        <div className="repo-name">
                            <a href={repo.html_url} target="_blank">{repo.name}</a>
                        </div>
                        <div className="repo-info">
                            <div className="repo-created">
                                <span>Created at</span>
                                <span>{dateFormat(repo.created_at, "dd mmmm yyyy")}</span>
                            </div>
                            <div className="repo-updated">
                                <span>Last Updated at</span>
                                <span>{dateFormat(repo.updated_at, "dd mmmm yyyy")}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GithubRepos;
