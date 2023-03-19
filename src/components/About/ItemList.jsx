import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ItemList = () => {
  const { id } = useParams();
  const navigation = useNavigate();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setData([data]);
        setLoading(false);
        console.log(data);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="box mt-5">
          <button
            style={{ fontSize: "14px" }}
            type="button"
            className="btn btn-primary my-2 px-5 py-3"
            onClick={() => navigation("/about")}
          >
            Back
          </button>
          <ul className="list-group w-100 mx-auto">
            {loading ? (
              <h1 className="text-center mt-4">Loading</h1>
            ) : data.length ? (
              data.map((el) => (
                <div className="rounded-5" key={el.id}>
                  <li className="list-group-item">Id: {el.id}</li>
                  <li className="list-group-item">Name: {el.name}</li>
                  <li className="list-group-item">Username: {el.username}</li>
                  <li className="list-group-item">Phone: {el.phone}</li>
                </div>
              ))
            ) : (
              <h1 className="text-center mt-3">NOT FOUND</h1>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ItemList;
