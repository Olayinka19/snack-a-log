import axios from "axios";
import { useState, useEffect } from "react";
import Snack from "./Snack.js";

const API = process.env.REACT_APP_API_URL;

function Snacks() {
  const [snacks, setSnacks] = useState([])
  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((response) => setSnacks(response.data))
      .catch((c) => console.warn("catch", c));
  }, []);
  return (
    <div className="Snacks">
          <section>
            {snacks.map((snack) => {
              return <Snack key={snack.id} snack={snack} />;
            })}
          </section>

    </div>
  );
}

export default Snacks;
