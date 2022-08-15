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
import { useGetRecipesMutation } from "./services/recipeApi";
import Card from "./components/Card";
import Spinner from "./components/Spinner";

function App() {
  const [value, setValue] = useState("");
  const [query, setQuery] = useState("");
  const [health, setHealth] = useState("vegan");
  const [show, setShow] = useState(false);
  const [recipe, setRecipe] = useState({});

  const [getRecipes, { isLoading, data }] = useGetRecipesMutation();

  useEffect(() => {
    getFoodRecipes();
  }, [query, health]);

  if (isLoading) {
    return <Spinner />;
  }

  const getFoodRecipes = async () => {
    await getRecipes({ query, health });
  };

  const handleSearch = () => {
    setQuery(value);
    setValue("");
  };

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
          <MDBBtn onClick={handleSearch}>Search</MDBBtn>
        </div>
      </div>
      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        {data?.hits?.map((item: any) => (
          <Card recipe={item.recipe} />
        ))}
      </MDBRow>
    </div>
  );
}

export default App;
