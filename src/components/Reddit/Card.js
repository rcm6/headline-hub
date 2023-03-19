import { Card } from "react-bootstrap";

function CardComponent({ title, subreddit, permalink, image }) {
  return (
    <div>
      <Card style={{ width: "20rem" }}>
        <Card.Body>
          <a href={permalink} target="__blank" rel="noreferrer">
            <img src={image} className="card-img-top" alt="..." />
          </a>
          <Card.Title>{subreddit}</Card.Title>
          <Card.Text>{title}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardComponent;
