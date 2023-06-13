import React, {useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

export default function Modalcomp({ show, handleClose , setMovies }) {
  const [newMovie, setNewMovie] = useState({
    id: Date.now(),
    title: "",
    description: "",
    postUrl: "",
    rate: 0,
  });
  const handleForm = (property) => {
    setNewMovie((prevState) => {
      return {
        ...prevState,
        [property.target.name]: property.target.value,
      };
    });
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          closeButton="closeButton"
          style={{ backgroundColor: "#292929" }}
        >
          <Modal.Title>Add movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                onChange={(event) => handleForm(event)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                onChange={(event) => handleForm(event)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>posterUrl</Form.Label>
              <div className="poster-input">
                <Form.Control
                  type="text"
                  name="posterUrl"
                  placeholder="Enter URL"
                  onChange={(event) => handleForm(event)}
                />
                <span style={{ fontWeight: "bold", marginLeft: "45%" }}>
                  {" "}
                  or{" "}
                </span>
                <Form.Label>CHOOSE FILE</Form.Label>
                <Form.Control
                  type="file"
                  name="posterFile"
                  onChange={(event) => handleForm(event)}
                />
              </div>
            </Form.Group>
            <Form.Group>
              <Form.Label>rate</Form.Label>
              <Form.Control
                type="number"
                name="rate"
                onChange={(event) => handleForm(event)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ marginLeft: "20%", marginTop: "10px" }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setMovies((prev) => [...prev, newMovie]);
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
