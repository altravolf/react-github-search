import './GithubShow.scss';

function GithubShow({ data }) {

    const { login, id, avatar_url, public_repo, name, bio, url, created_at } = data;

    return (
        <div className="GithubShow">
            <div className="main-container">
                <div className="profile">
                    <div className="avatar">
                        <img src={avatar_url} alt={`${login} avatar`} />
                    </div>
                    <div className="title">
                        <div className="name">{name}</div>
                        <div className="login">
                            <a href={url} target="_blank">{login}</a>
                        </div>
                        <div className="joinData">
                            Joined at { }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GithubShow;
