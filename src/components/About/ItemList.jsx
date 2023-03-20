import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

const ItemList = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUsers([data]);
        setLoader(false);
        console.log(data);
      });
  }, []);

  return (
    <>
      <div className="container mt-5">
        <button
          style={{ fontSize: "15px" }}
          className="btn btn-primary my-3 py-3 px-5"
          type="button"
          onClick={() => navigate("/about")}
        >
          Back
        </button>
        <ul className="list-group">
          {loader ? (
            <Loader />
          ) : users.length ? (
            users.map((el) => (
              <div className="box rounded-5" key={el.id}>
                <li className="list-group-item">
                  <h5 className="mt-2">
                    Fullname: {el.name} {el.username}
                  </h5>
                </li>
                <li className="list-group-item">
                  <h5 className="mt-2">Phone: {el.phone}</h5>
                </li>
                <li className="list-group-item">
                  <h5 className="mt-2">Website: {el.website}</h5>
                </li>
              </div>
            ))
          ) : (
            <h1 className="text-center mt-5">NOT FOUND</h1>
          )}
        </ul>
      </div>
    </>
  );
};

export default ItemList;
