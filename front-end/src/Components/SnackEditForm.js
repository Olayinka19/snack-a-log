import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
const API = process.env.REACT_APP_API_URL;

function SnackEditForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [snack, setSnack] = useState({
    name: "",
    fiber: "",
    protein: "",
    added_sugar: "",
    is_healthy: false,
    image: "",
  });
  const updateSnack = (updatedSnack) => {
    axios
      .put(`${API}/snacks/${id}`, updatedSnack)
      .then(() => {
      navigate(`/snacks/${id}`);
      })
      .catch((error) => console.log(error));
  };
  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };
  useEffect(() => {
    axios.get(`${API}/snacks/${id}`).then(
      (response) => setSnack(response.data.payload),
      (error) => navigate(`/snacks`)
    );
  }, [id, navigate]);
  const handleSubmit = (event) => {
    event.preventDefault();
    updateSnack(snack.id);
  };
  return (
    <div className="Edit">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="name">Snack Name</Form.Label>
          <Form.Control
            id="name"
            className="mb-3"
            type="text"
            value={snack.name}
            placeholder="Name of Snack"
            onChange={handleTextChange}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="name">Fiber</Form.Label>
          <Form.Control
            id="fiber"
            type="text"
            value={snack.fiber}
            placeholder="0"
            required
            onChange={handleTextChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="name">Protein</Form.Label>
          <Form.Control
            id="protein"
            type="text"
            value={snack.protein}
            placeholder="0"
            required
            onChange={handleTextChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="name">Added_Sugar</Form.Label>
          <Form.Control
            id="added_sugar"
            value={snack.added_sugar}
            type="text"
            placeholder="0"
            required
            onChange={handleTextChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="name">Image URL:</Form.Label>
          <Form.Control
            id="image"
            value={snack.image}
            pattern="http[s]*://.+"
            type="text"
            placeholder="http://"
            required
            onChange={handleTextChange}
          ></Form.Control>
        </Form.Group>
        <br />
        <Button variaint="warning" type="submit">
          Submit
        </Button>
        <Link to={`/snacks/${id}`}>
          <Button variant="info">Nevermind!</Button>
        </Link>
      </Form>
    </div>
  );
}

export default SnackEditForm;
