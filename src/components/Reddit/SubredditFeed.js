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
        const response = await axios.get(`${baseURL}${subreddit}.json`);

        {
          console.log(response);
        }

        setArticles(response.data.data.children);

        if (!response) {
          throw new Error();
        }
      } catch (error) {
        console.log("Error: ", error);
      }
    }

    console.log(subreddit);
    console.log(articles);

    // invoking the function immediately

    FetchDataHandler().catch((error) => console.log(error));
  }, [subreddit]);

  //   const onClickHandler = () => {
  //     console.log(subreddit);
  //   };

  return (
    <div>
      <section id="section__subreddit-feed">
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
                className="subreddit-input"
                defaultValue={subreddit}
              />
              {/* <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={onClickHandler}
              >
                Search
              </button> */}
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
      </section>
    </div>
  );
};

export default SubredditFeed;
