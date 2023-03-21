import "./style.css";

function RedditArticles(props) {
  const { title, permalink } = props.article;

  const baseURL = "https://www.reddit.com";

  if (title) {
    return (
      <article className="reddit-article">
        <a href={baseURL + permalink} target="_blank" rel="noreferrer">
          <h3 className="article-title">{title}</h3>
        </a>
      </article>
    );
  }
}

export default RedditArticles;
