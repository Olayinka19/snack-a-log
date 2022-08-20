import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function SnackDetails() {
  const [snack, setSnack] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${API}/snacks/${id}`).then((response) => {
      setSnack(response.data);
    });
  }, [id, navigate, API]);
  const deleteSnack = () => {
    axios
      .delete(`${API}/snacks/${id}`)
      .then(() => {
        navigate(`/snacks`);
      })
      .catch((c) => console.error("catch", c));
  };
  const handleDelete = () => {
    deleteSnack();
  };
  return (
    <>
      <article>
        <h3>
          {snack.is_healthy? <span>❤️</span> : null} {snack.name}
        </h3>
        <img src={snack.image} alt={snack.name} height={200}width={200}/>
        <h5>Protein: {snack.protein}</h5>
        <h5>Fiber: {snack.fiber}</h5>
        <h5>Added Sugar: {snack.added_sugar}</h5>
        <div className="showNavigation">
          <div>
            {" "}
            <Link to={`/snacks`}>
              <button>Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/snacks/${id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </article>
    
    </>
  );
}

export default SnackDetails;