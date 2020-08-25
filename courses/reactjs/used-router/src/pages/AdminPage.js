import React from "react";
import { Route, Redirect } from "react-router-dom";

const permission = false;

const AdminPage = () => {
  return (
    <Route
      render={() =>
        permission ? <h3>Admin panel - welcome!</h3> : <Redirect to="/login" />
      }
    />
  );
};

export default AdminPage;
