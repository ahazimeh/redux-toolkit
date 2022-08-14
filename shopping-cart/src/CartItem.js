import { useSelector, useDispatch } from "react-redux";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

const CartItem = ({ id, img, title, price, amount }) => {
  return (
    <>
      {/* <div>CartItem</div> */}
      <div style={{ width: "70vw", maxWidth: "90red", margin: "0px auto" }}>
        <div className="row" style={{ marginTop: "10px", marginLeft: "120px" }}>
          <div className="col-sm-2">
            <img
              src={img}
              alt={title}
              className="img-fluid"
              style={{ objectFit: "cover", width: "5rem", height: "5rem" }}
            />
          </div>
          <div className="col-sm-2" margin>
            <h5>{title}</h5>
            <h5 style={{ color: "#617d98" }}>${price}</h5>
            <MDBIcon
              fas
              icon="trash"
              style={{ cursor: "pointer", color: "red" }}
            />
          </div>
          <div className="col-sm-8">
            <MDBIcon fas icon="chevron-up" style={{ cursor: "pointer" }} />
            <p style={{ marginTop: "10px" }}>{amount}</p>
            <MDBIcon fas icon="chevron-down" style={{ cursor: "pointer" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
