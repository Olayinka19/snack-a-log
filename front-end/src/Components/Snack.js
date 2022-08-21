import { Link } from "react-router-dom";
import healthyFood from "../assets/heart-solid.png";
import unhealthyFood from "../assets/heart-regular.png"
function Snack({ snack }) {
  return (
    <div className="Snack">
      <Link to={`/snacks/${snack.id}`}>
        <img src={snack.image} alt={snack.name} height={200} width={200} />
      </Link>
      <a href={`/snacks/${snack.id}`}></a>
     <h4> {snack.is_healthy ? <img src={healthyFood} alt="healthy food"></img> : <img src= {unhealthyFood} alt="unhealthy food"></img>} {snack.name} </h4> 
      
    </div>
  );
}

export default Snack;
