import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import { Container, Row, Col, Carousel, Stack } from "react-bootstrap";

import CardComponent from "./Card";
import SubredditFeed from "./SubredditFeed";

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

  return (
    <section id="section__reddit">
      <Container>
        <Row>
          <Col md="3">
            <div className="section-headings text-center text-md-start">
              <h4>Top popular on Reddit</h4>
            </div>
            <Carousel
              controls={false}
              indicators={false}
              style={{ height: 450 }}
            >
              {subreddit.map((post, index) => (
                <Carousel.Item style={{ height: 400 }} key={index}>
                  <Stack
                    direction="horizontal"
                    className="h-100 justify-content-center align-items-center"
                    gap={2}
                  >
                    <CardComponent {...post} />
                  </Stack>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col md="9">
            <div className="section-headings text-center text-md-start">
              <h4>Subreddit Search</h4>
            </div>
            <SubredditFeed />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Reddit;
