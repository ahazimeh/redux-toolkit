import { MDBSpinner } from "mdb-react-ui-kit";

const Spinner = () => {
  return (
    <>
      <MDBSpinner
        grow
        className="me-2 mt-5"
        style={{ width: "3rem", height: "3rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </MDBSpinner>
    </>
  );
};

export default Spinner;
