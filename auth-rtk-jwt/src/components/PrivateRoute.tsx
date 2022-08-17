import { useSelector } from "react-redux";
import { selectAuth } from "../features/authSlice";
import LoadingToRedirect from "./LoadingToRedirect";

export const PrivateRoute = ({ children }: { children: any }) => {
  const { token } = useSelector(selectAuth);
  return token ? children : <LoadingToRedirect />;
};
