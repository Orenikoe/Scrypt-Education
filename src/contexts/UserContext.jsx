/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import { useState, createContext, useEffect } from "react";
import axios from "axios";

const UserContext = createContext();
export default UserContext;
export function UserContextProvider({ children }) {
  const [userDetails, setUserDetails] = useState(null);
  const [userNotFound, setUserNotFound] = useState(false);
  // const getUserId = async (username) => {
  //   await axios
  //     .get(`${import.meta.env.VITE_BACKEND_URL}/user/${username}`)
  //     .then((response) => {
  //       setUserDetails({
  //         id: response.data[0].id,
  //         username: response.data[0].username,
  //         email: response.data[0].email,
  //         role: response.data[0].role,
  //       });
  //     })
  //     .catch((err) => err);
  // };

  useEffect(() => {
    if (
      localStorage.getItem(
        "CognitoIdentityServiceProvider.12fkg6pe6sjq3n50bmulo8snia.LastAuthUser"
      ) === null
    ) {
    } else {
      getUserId(
        localStorage.getItem(
          "CognitoIdentityServiceProvider.12fkg6pe6sjq3n50bmulo8snia.LastAuthUser"
        )
      );
    }
  }, []);

  const InsertToSqlDb = async (userObj) => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/user`, userObj)
      .then((response) => response)
      .catch((err) => err);
  };

  const searchUser = () => {
    const username = localStorage.getItem(
      "CognitoIdentityServiceProvider.12fkg6pe6sjq3n50bmulo8snia.LastAuthUser"
    );
    getUserId(username);
  };

  return (
    <UserContext.Provider
      value={{
        InsertToSqlDb,
        userDetails,
        setUserDetails,
        userNotFound,
        setUserNotFound,
        searchUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
