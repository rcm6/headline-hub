import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";

function Reddit() {
  const [subreddit, setSubreddit] = useState([]);

  useEffect(() => {
    let ignore = false;

    async function FetchDataHandler() {
      const response = await axios.get("https://www.reddit.com/r/all/hot.json");

      const dataList = response.data;

      const listObjs = dataList.data.children;

      console.log(listObjs);

      const filteredList = listObjs.filter((list) => {
        if (list.data.thumbnail_height !== null) {
          return list;
        }
      });

      console.log(filteredList);

      const transformedList = filteredList.map((list) => {
        return {
          id: list.data.id,
          permalink: list.data.permalink,
          subreddit: list.data.subreddit,
          image: list.data.thumbnail,
        };
      });

      console.log(transformedList);

      if (!ignore) {
        setSubreddit(transformedList);
      }
    }

    // immediately invoking the function here
    FetchDataHandler();

    return () => {
      ignore = true;
    };
  }, [subreddit.id]);

  const carouselStyle = {
    width: "596px",
    height: "296px%",
    margin: "0 auto",
  };

  const carouselItemStyle = {
    width: "100%",
    height: "296px",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <section id="section__reddit">
      <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h3>Reddit</h3>
      </div>

      <Container>
        <Carousel
          className="carousel slide carousel-fade"
          style={carouselStyle}
        >
          {subreddit.map((post, index) => {
            return (
              <Carousel.Item key={index}>
                <img
                  className="d-block"
                  style={carouselItemStyle}
                  src={post.image}
                ></img>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Container>
    </section>
  );
}

export default Reddit;
