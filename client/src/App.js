import './App.css';
import ViewItems from "./components/ViewItems";
import serverConstants from "./constants/server";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CreateItem from "./components/CreateItem";
import {Container} from "@mui/material";
import ItemAppBar from "./components/AppBar";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <ItemAppBar />
                <br/><br/>
                <Container maxWidth="lg">
                    <Routes>
                        <Route path="/" element={<ViewItems server={serverConstants.server} exact/>} />
                        <Route path="/create" element={<CreateItem />} />
                        {/*<Route path="/delete" element={<Invoices />} />*/}
                        {/*<Route path="/restore" element={<Invoices />} />*/}
                    </Routes>
                </Container>
            </BrowserRouter>
        </div>
    );
}

export default App;
