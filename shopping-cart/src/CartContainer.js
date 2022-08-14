import { useSelector, useDispatch } from "react-redux";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import CartItem from "./CartItem";

const CartContainer = () => {
  const { items, totalAmount } = useSelector((state) => state.cart);
  return (
    <>
      <h2 className="lead-mb-0 mt-2">Your Shopping Cart</h2>
      {items.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <footer>
        <hr />
        <div>
          <h4
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginRight: "60px",
            }}
          >
            Total <span>${totalAmount}</span>
          </h4>
        </div>
        <MDBBtn color="danger" style={{ width: "140px", marginTop: "50px" }}>
          Clear Cart
        </MDBBtn>
      </footer>
    </>
  );
};

export default CartContainer;
