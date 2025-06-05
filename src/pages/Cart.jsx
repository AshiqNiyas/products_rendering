import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
const Cart = ({ cart }) => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Cart page</h2>
      {cart?.map((item) => {
        return <Card key={item.id} product={item} />;
      })}
      <button onClick={() => navigate("/")}>go back</button>
    </div>
  );
};

export default Cart;
