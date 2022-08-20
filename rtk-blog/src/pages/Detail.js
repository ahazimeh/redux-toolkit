import { skipToken } from "@reduxjs/toolkit/dist/query";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useFetchBlogQuery } from "../services/blogsApi";
const Detail = () => {
  const { id } = useParams();
  const { data: blog, error, isError } = useFetchBlogQuery(id ? id : skipToken);
  useEffect(() => {
    isError && toast.error(error);
  }, [isError, error]);
  return (
    <>
      <MDBCard className="mb-3">
        <MDBCardImage
          position="top"
          src={blog?.imgURL}
          alt={blog?.title}
          style={{ height: "600px" }}
        />
        <MDBCardBody>
          <MDBCardTitle className="h3 fw-bold">{blog?.title}</MDBCardTitle>
          <MDBCardText className="text-start">
            <span className="span fw-bold">Created at - &nbsp;</span>
            <small className="text-muted h6">
              {blog?.timestamp.toDate().toLocaleString()}
              <MDBTypography blockquote className="text-start mb-0">
                {blog?.description}
              </MDBTypography>
            </small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </>
  );
};

export default Detail;
