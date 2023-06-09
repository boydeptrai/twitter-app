import "./App.css";
import Login from "./components/Login";
import Main from "./components/Main";
import NotPage from "./components/NotPage";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppReducer from './reducers/AppReducer'
import { useReducer } from "react";
import AppContext from "./components/AppContext";

function App() {
  const initialState = {user: null, posts: []};
  const [state, dispatch] = useReducer(AppReducer,initialState)
  return (
    <AppContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      <Routes>
          <Route path="/"  element={<Main />} />
          <Route  path="/login" element={<Login />} />
          <Route  path="/register" element={<Register />} />
          <Route  path="*" element={<NotPage />} />
      </Routes>
    </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
