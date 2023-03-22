import { Card } from "react-bootstrap";

function CardComponent({ title, subreddit, permalink, image }) {
  return (
    <div className="d-flex align-self-stretch">
      <Card style={{ width: "15rem" }}>
        <a href={permalink} target="__blank" rel="noreferrer" className="reddit-card-link">
          <Card.Body>
            <img
              src={image}
              className="card-img-top"
              alt="..."
              style={{ height: 150 }}
            />
            <Card.Title>{subreddit}</Card.Title>
            <Card.Text>{title}</Card.Text>
          </Card.Body>
        </a>
      </Card>
    </div>
  );
}

export default CardComponent;
