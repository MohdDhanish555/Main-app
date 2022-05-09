import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Blogs from "./screens/Blogs";
import ContactUs from "./screens/ContactUs";
import Home from "./screens/Home";

function App() {
  const [homeText, sethomeText] = useState<string>("");
  const [blogText, setblogText] = useState<string>("");
  const [contactText, setcontactText] = useState<string>("");
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              value={homeText}
              setValue={sethomeText}
              label="Home Text Field"
            />
          }
        />
        <Route
          path="/Blogs"
          element={
            <Blogs
              value={blogText}
              setValue={setblogText}
              label="Blogs Text Field"
            />
          }
        />
        <Route
          path="/ContactUs"
          element={
            <ContactUs
              value={contactText}
              setValue={setcontactText}
              label="Contact Us Text Field"
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
