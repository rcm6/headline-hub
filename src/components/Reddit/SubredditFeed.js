import "./style.css";
import RedditArticles from "./RedditArticles";

import React, { useState, useEffect } from "react";
import axios from "axios";

const SubredditFeed = () => {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState("webdev");

  const baseURL = "https://www.reddit.com/r/";

  useEffect(() => {
    async function FetchDataHandler() {
      try {
        const response = await axios(`${baseURL}${subreddit}.json`);

        const limit = 10;
        setArticles(
          response.data.data.children.slice(0, limit).map((article) => article)
        );

        console.log(response.data.data.children);

        if (!response) {
          throw new Error();
        }
      } catch (error) {
        console.log("Error: ", error);
      }
    }

    // invoking the function immediately

    FetchDataHandler().catch((error) => console.log(error));
  }, [subreddit]);

  return (
    <div>
      <div className="container-fluid">
        <div className="subreddit-search">
          <div className="subreddit-heading">
            <span className="subreddit-search-heading">
              Search for a Subreddit
            </span>
          </div>
          <div className="subreddit-input-container">
            <input
              type="text"
              onChange={(event) => setSubreddit(event.target.value)}
              onClick={(event) => (event.target.value = "")}
              className="subreddit-input"
              defaultValue={subreddit}
            />
          </div>
        </div>
        <div className="subreddit-articles">
          {articles != null
            ? articles.map((article, index) => (
                <RedditArticles key={index} article={article.data} />
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default SubredditFeed;
