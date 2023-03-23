import React, { useEffect, useContext } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import UserContext from "../../contexts/UserContext";

function Dashboard() {
  const { searchUser } = useContext(UserContext);
  useEffect(() => {
    searchUser();
  }, []);

  return (
    <LayoutOne>
      <p>Dashboard</p>
    </LayoutOne>
  );
}

export default Dashboard;
