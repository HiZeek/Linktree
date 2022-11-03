import { Fragment } from "react";
import Container from "./components/ui/Container";
import Profile from "./components/pages/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Fragment>
      <Router>
        <Container>
          <Routes>
            <Route exact path="/" element={<Profile />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </Container>
      </Router>
    </Fragment>
  );
}

export default App;
