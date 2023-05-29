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
import {Container, CssBaseline} from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {store} from "./app/store";
import {useEffect} from "react";

function App() {
    useEffect(() => {
        store.subscribe(() => {
            const error = store.getState().error.value
            if (error != undefined) {
                let message = <>
                    {error?.title && <h4>{error.title}</h4>}
                    {error?.message && <p>{error.message}</p>}
                </>

                toast.error(message, {
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                })
            }
        })
    }, [])

    return (<>
            <CssBaseline />
            <Header />
            <ToastContainer/>
                <main>
                    <Container className='mainBox' sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Routes>
                            <Route path="/" element={<Root/>} />
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/users" element={<Users/>}/>
                            <Route path="/users/:page" element={<Users/>}/>
                            <Route path="/user" element={<User/>}/>
                            <Route path="/user/:id" element={<User/>}/>
                            <Route path="/tournaments" element={<Tournaments/>}/>
                            <Route path="/tournaments/:page" element={<Tournaments/>}/>
                            <Route path="/tournament/:id" element={<Tournament/>}/>
                            <Route path="/roles" element={<Roles/>}/>
                            <Route path="/roles/:page" element={<Roles/>}/>
                            <Route path="/role/:id" element={<Role/>}/>
                            <Route path="/matches" element={<Matches/>}/>
                            <Route path="/matches/:page" element={<Matches/>}/>
                            <Route path="/match/:id" element={<Match/>}/>
                        </Routes>
                    </Container>
                </main>
            <Footer />
        </>
    )
}

export default App
