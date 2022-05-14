import './App.css';
import ViewItems from "./components/ViewItems";
import Container from "@mui/material/Container";
import serverConstants from "./constants/server";

function App() {
    return (
        <div className="App">
            <Container maxWidth="lg">
                <ViewItems server={serverConstants.server}/>
            </Container>
        </div>
    );
}

export default App;
