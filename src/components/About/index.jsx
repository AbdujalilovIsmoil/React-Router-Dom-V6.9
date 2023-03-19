import { useState, useEffect } from "react";
import Items from "./Items";

const index = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log(data);
      });
  }, []);

  return (
    <>
      <div className="container">
        <ul className="list-group w-100 mx-auto mt-4">
          {loading ? (
            <h1 className="text-center mt-4">Loading...</h1>
          ) : data.length ? (
            data.map((el) => <Items key={el.id} {...el} />)
          ) : (
            <h1 className="text-center mt-4">NOT FOUND</h1>
          )}
        </ul>
      </div>
    </>
  );
};

export default index;
