import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

function Location() {
  return (
    <Card>
      <Card.Body>
        <Form>
      <Form.Group>
        <Form.Label>Enter city name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="City name"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </Card.Body>
    </Card>
  );
}

export default Location;