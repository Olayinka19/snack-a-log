import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import healthyFood from "../assets/heart-solid.png";
import unhealthyFood from "../assets/heart-regular.png"
function SnackDetails() {
  const [snack, setSnack] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${API}/snacks/${id}`).then((response) => {
      setSnack(response.data.payload);
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
        <aside>
         {snack.is_healthy ? <img src = {healthyFood} alt="healthy food" /> : null } 
        </aside>
      <div>
        <img src={snack.image} alt={snack.name} height={200} width={200} />
        <h5>Protein: {snack.protein}</h5>
        <h5>Fiber: {snack.fiber}</h5>
        <h5>Added Sugar: {snack.added_sugar}</h5>
       </div>
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
