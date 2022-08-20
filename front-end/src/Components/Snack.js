import { Link } from "react-router-dom";
function Snack({ snack }) {
  return (
    <div>
          <Link to={`/snacks/${snack.id}`}>
          <img src={snack.image} alt={snack.name} height={200}width={200}/>
          </Link>
    <h2>{snack.name}</h2>

    </div>
        
     
      
  );
}

export default Snack;

