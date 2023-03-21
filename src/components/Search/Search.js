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

  const handleApplyFilter = () => {
    const categorySelect = document.getElementById("category-select");
    const languageSelect = document.getElementById("language-select");
    const sortBySelect = document.getElementById("sortby-select");

    const selectedValues = {
      category: categorySelect.value,
      language: languageSelect.value,
      sortBy: sortBySelect.value,
    };

    console.log(selectedValues);

    setShowFilter(false);
  };

  return (
    <section id="section__search">
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
            className="btn btn-outline-secondary icon"
            type="button"
            id="search-button"
            disabled
          ><i class="fa fa-search"></i>
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
            <div className="form-group">
              <label htmlFor="category-select">Category</label>
              <select id="category-select" className="form-control">
                <option value="">Select a category</option>
                <option value="business">Business</option>
                <option value="entertainment">Entertainment</option>
                <option value="health">Health</option>
                <option value="science">Science</option>
                <option value="sports">Sports</option>
                <option value="technology">Technology</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="language-select">Language</label>
              <select id="language-select" className="form-control">
                <option value="">Select a language</option>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="sortby-select">Sort By</label>
              <select id="sortby-select" className="form-control">
                <option value="">Select a sort option</option>
                <option value="publishedAt">Published At</option>
                <option value="relevancy">Relevancy</option>
                <option value="popularity">Popularity</option>
              </select>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleFilterClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleApplyFilter}>
              Apply
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </section>
  );
}

export default Search;
