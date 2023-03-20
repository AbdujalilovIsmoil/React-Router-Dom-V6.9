import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import Items from "./Items";

const index = () => {
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoader(false);
      });
  }, []);

  return (
    <>
      <div className="container">
        <ul className="list-group w-100 mt-5">
          {loader ? (
            <Loader />
          ) : users.length ? (
            users.map((el) => <Items key={el.id} {...el} />)
          ) : (
            <h1 className="text-center mt-5">NOT FOUND</h1>
          )}
        </ul>
      </div>
    </>
  );
};

export default index;
