import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
const API = process.env.REACT_APP_API_URL;

function SnackEditForm() {
  const navigate = useNavigate();
  const { id } = useParams();
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
    axios.get(`${API}/snacks/${id}`)
    .then((response) => setSnack(response.data.payload),
    
      (error) => navigate(`/snacks`)
    );
  }, [id, navigate]);
  const handleSubmit = (event) => {
    event.preventDefault();
    updateSnack(snack, id)
    navigate(`/snacks`)
  };
  return (
    <div className="Edit">
      <p>Snack Health is determined by</p>
        <ul>
          <li>Protein is above 5</li>
          <li>Or Fiber is above 5</li>
          <li>and Sugar is less than 5</li>
        </ul>
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
          <Form.Label htmlFor="fiber">Fiber</Form.Label>
          <Form.Control
            id="fiber"
            type="number"
            value={snack.fiber}
            placeholder="0"
            required
            onChange={handleTextChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="protein">Protein</Form.Label>
          <Form.Control
            id="protein"
            type="number"
            value={snack.protein}
            placeholder="0"
            required
            onChange={handleTextChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="added_sugar">Added Sugar</Form.Label>
          <Form.Control
            id="added_sugar"
            value={snack.added_sugar}
            type="number"
            placeholder="0"
            required
            onChange={handleTextChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="image">Image URL:</Form.Label>
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
        <input type="submit"/>
        <Link to={`/snacks/${id}`}>
          <Button variant="info">Nevermind!</Button>
        </Link>
      </Form>
    </div>
  );
}

export default SnackEditForm;
