import { useEffect } from "react";
import { Routes as ReactRoutes, Route, useNavigate, useLocation } from "react-router-dom"

import { SignIn } from "../pages/SignIn"
import { Dashboard } from "../pages/Dashboard"
import { CreateRoom } from "../pages/CreateRoom";
import { RoomAdmin } from "../pages/AdminRoom";
import { SimpleRoom } from "../pages/SimpleRoom";

import { useAuth } from "../hooks/useAuth";

export function Routes() {
  const { user } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if(user === null) navigate("/");
  }, [location.pathname, user]);
  
  return (
    <ReactRoutes>
      <Route path="/" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/createroom" element={<CreateRoom />} />
      <Route path="/room/adminroom/:id" element={<RoomAdmin />} />
      <Route path="/room/:id" element={<SimpleRoom />}/>
    </ReactRoutes>
  );
}
