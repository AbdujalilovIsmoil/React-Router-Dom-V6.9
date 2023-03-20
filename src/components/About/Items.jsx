import React from "react";
import { Link } from "react-router-dom";

const Items = ({ name, id }) => {
  return (
    <>
      <Link to={`/about/${id}`} className="list-group-item">
        {id}. {name}
      </Link>
    </>
  );
};

export default Items;
