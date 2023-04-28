import './App.css'
import {Route, Routes} from "react-router-dom";
import Header from "./component/ui/Header";
import Login from "./component/ui/model/Login";
import Footer from "./component/ui/Footer";
import Root from "./component/ui/model/Root";
import Users from "./component/ui/model/Users";
import User from "./component/ui/model/User";
import Tournaments from "./component/ui/model/Tournaments";
import Tournament from "./component/ui/model/Tournament";
import Roles from "./component/ui/model/Roles";
import Role from "./component/ui/model/Role";
import Matches from "./component/ui/model/Matches";
import Match from "./component/ui/model/Match";
import {CssBaseline} from "@mui/material";
import Box from "@mui/material/Box";
import Error from "./component/ui/Error"
import useError from "./features/error/errorMessage";

function App() {

    const [error] = useError()

    return (<>
            <CssBaseline />
            <Header />
            { error && <Error /> }
            <Box>
                <main>
                    <Routes>
                        <Route path="/" element={<Root/>} />
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/users" element={<Users/>}/>
                        <Route path="/user/:id" element={<User/>}/>
                        <Route path="/tournaments" element={<Tournaments/>}/>
                        <Route path="/tournament/:id" element={<Tournament/>}/>
                        <Route path="/roles" element={<Roles/>}/>
                        <Route path="/role/:id" element={<Role/>}/>
                        <Route path="/matches" element={<Matches/>}/>
                        <Route path="/match/:id" element={<Match/>}/>
                    </Routes>
                </main>
            </Box>
            <Footer />
        </>
    )
}

export default App
