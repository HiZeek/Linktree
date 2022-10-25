import { Fragment } from "react";
import Container from "./components/ui/Container";
import Profile from "./components/pages/Profile";

function App() {
  return (
    <Fragment>
      <Container>
        <Profile />
      </Container>
    </Fragment>
  );
}

export default App;
