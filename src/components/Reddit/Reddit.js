import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import { Container, Carousel, Stack } from "react-bootstrap";

import CardComponent from "./Card";

function Reddit() {
  const [subreddit, setSubreddit] = useState([]);

  useEffect(() => {
    let ignore = false;

    async function FetchDataHandler() {
      try {
        const response = await axios.get("https://www.reddit.com/r/all.json");

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
      } catch (error) {
        console.error("Error:", error);
      }
    }

    // immediately invoking the function here
    FetchDataHandler();

    return () => {
      ignore = true;
    };
  }, [subreddit.id]);

  // const carouselItemStyle = {
  //   width: "100%",
  //   borderRadius: "10px",
  //   backgroundPosition: "center",
  //   backgroundSize: "cover",
  // };

  // const carouselInner = {
  //   width: "296px",
  //   height: "100%",
  //   margin: "0 auto",
  // };

  return (
    <section id="section__reddit">
      <Container fluid>
        <Carousel style={{ height: 500 }}>
          {subreddit.map((post, index) => (
            <Carousel.Item style={{ height: 500 }} key={index}>
              <Stack
                direction="horizontal"
                className="h-100 justify-content-center align-items-center"
                gap={3}
              >
                <CardComponent {...post} />
                <CardComponent {...post} />
                <CardComponent {...post} />
              </Stack>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}

export default Reddit;

/* <Carousel
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
      </Carousel> */

/* 

          <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner" style={carouselInner}>
            {subreddit.map((post, index) => {
              return (
                <div className="carousel-item active" key={index}>
                  <div className="card">
                    <img src={post.image} className="" alt="..." />
                    <div className="card-body">
                      <p className="card-text">
                        <strong>r/{post.subreddit}</strong>
                      </p>
                      <p className="card-text">{post.title}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>



      */
