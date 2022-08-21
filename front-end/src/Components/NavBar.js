import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function NavBar() {
  return (
    <div className="Nav">
      <h1>
        <Link to="/snacks" className="Link">Snacks</Link>
      </h1>
      <Button>
        <Link to="/snacks/new" className="Link">
          New Snacks
        </Link>
      </Button>
    </div>
  );
}
