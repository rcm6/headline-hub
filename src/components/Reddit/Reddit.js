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
        const thumbnailHeight = list.data.thumbnail_height;
        const thumbnailString = list.data.thumbnail;

        if (thumbnailHeight !== null && thumbnailString.includes("https")) {
          return list.data;
        } else {
          return false;
        }
      });

      console.log(filteredList);

      const transformedList = filteredList.map((list) => {
        return {
          id: list.data.id,
          title: list.data.title,
          permalink: "https://www.reddit.com/" + list.data.permalink,
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
      <Container>
        <Carousel
          className="carousel slide carousel-fade carousel-dark"
          style={carouselStyle}
        >
          {subreddit.map((post, index) => {
            return (
              <Carousel.Item key={index}>
                <a href={post.permalink} target="__blank" rel="noreferrer">
                  <img
                    className="d-block"
                    style={carouselItemStyle}
                    src={post.image}
                    alt=""
                  ></img>
                  <Carousel.Caption
                    className="bg-dark text-white"
                    style={{ opacity: 0.7 }}
                  >
                    <h3>r/{post.subreddit}</h3>
                    <p>{post.title}</p>
                  </Carousel.Caption>
                </a>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Container>
    </section>
  );
}

export default Reddit;
