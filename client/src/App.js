import './App.css';
import ViewItems from "./components/ViewItems";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CreateItem from "./components/CreateItem";
import {Container} from "@mui/material";
import ItemAppBar from "./components/AppBar";
import EditItem from "./components/EditItem";
import DeleteItem from "./components/DeleteItem";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <ItemAppBar />
                <br/><br/>
                <Container maxWidth="lg">
                    <Routes>
                        <Route path="/" element={<ViewItems exact/>} />
                        <Route path="/create" element={<CreateItem />} />
                        <Route path="/edit" element={<EditItem />} />
                        <Route path="/delete" element={<DeleteItem />} />
                    </Routes>
                </Container>
            </BrowserRouter>
        </div>
    );
}

export default App;
