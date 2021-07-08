import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Container from "@material-ui/core/Container";
import Navabar from "./Heder";
import "./App.css";

function App() {
  return (
    <Container>
      <ul>
        <li>
          <a href="#">Home</a>
          <ExpandMoreIcon />
        </li>
        <Navabar />
      </ul>
    </Container>
  );
}

export default App;
