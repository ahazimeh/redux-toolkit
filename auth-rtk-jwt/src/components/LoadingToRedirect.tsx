import { MDBModal, MDBModalContent, MDBModalDialog } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoadingToRedirect = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => currentCount - 1);
    }, 1000);
    count === 0 && navigate("/auth");
    return () => clearInterval(interval);
  }, [count, navigate]);
  return (
    <div className="vh-100 gradient-custom">
      <MDBModal show={true}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <p className="mt-3">Redirect you in {count} sec</p>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
};

export default LoadingToRedirect;
