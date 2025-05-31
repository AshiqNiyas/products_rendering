import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const getUser = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    console.log(response.data);
    setUser(response.data);
  };

  useEffect(() => {
    getUser();
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="bg-white   mx-auto min-h-screen flex justify-center items-center">
      <div className="p-6 px-10 rounded-md shadow-lg max-w-lg">
        <h1>{user.name}</h1>
        <p>{user.username}</p>
        <p>{user.email}</p>
        <Link to={"/"}>
          <button className="bg-blue-400 rounded-md p-1 mt-1">Go back</button>
        </Link>
      </div>
    </div>
  );
};

export default UserDetails;
