import axios from "axios";
import { FETCH_USER } from "./type";

const fetchUser = () => {
  return function(dispatch) {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then(res => dispatch({ type: FETCH_USER, payload: res }));
  };
};
