import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Search() {
  const [showFilter, setShowFilter] = useState(false);

  const handleFilterOpen = () => {
    setShowFilter(true);
  };

  const handleFilterClose = () => {
    setShowFilter(false);
  };

  return (
    <div className="container">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search news..."
          aria-label="Search news"
          aria-describedby="search-button"
          disabled
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="search-button"
          disabled
        >
          Search
        </button>
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="filter-button"
          onClick={handleFilterOpen}
        >
          Filter
        </button>
      </div>
      <Modal show={showFilter} onHide={handleFilterClose}>
        <Modal.Header closeButton>
          <Modal.Title>Filter Options</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Replace with your filter options */}
          <p>Filter Options</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleFilterClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Search;
