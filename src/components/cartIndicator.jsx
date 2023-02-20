import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CartIndicator = () => {
  const navigate = useNavigate();

  const cartLength = useSelector((state) => state.jobOfferts.length);
  return (
    <div className="ml-auto mt-3 mb-4">
      <Button className="my-2  bg-dark" onClick={() => navigate("/cart")}>
        🛒 {cartLength}
      </Button>
    </div>
  );
};

export default CartIndicator;
