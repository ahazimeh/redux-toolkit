import { useEffect, useState } from "react";
import {
  MDBRow,
  MDBInput,
  MDBBtn,
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";
import "./App.css";

function App() {
  const [value, setValue] = useState<string>();
  const [query, setQuery] = useState();
  const [health, setHealth] = useState("vegan");
  const [show, setShow] = useState(false);
  const [recipe, setRecipe] = useState({});
  return (
    <div
      className="App"
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "1000px",
        alignContent: "center",
      }}
    >
      <MDBNavbar light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand className="text-center">
            <h5 className="fw-bold mt-2">🍔 Food Recipe App</h5>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
      <div className="row g-1 align-items-center mt-2">
        <MDBInput
          wrapperClass="col-auto"
          label="Search Recipe"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="col-auto">
          <MDBBtn>Search</MDBBtn>
        </div>
      </div>
    </div>
  );
}

export default App;
