import * as React from 'react';
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

export default function Root() {
    return (
        <>
            <h1>Tournament manager</h1>
            <p>A simple application to showcase and test the features of React.js 18 in conjunction with Spring Boot 3.</p>
            <p>Main frontend page was built with Material UI (MUI for short).</p>
            <p>Currently employed technologies include:</p>
            <table style={{ border: '1px solid rgba(255, 85, 49, 0.36)', borderRadius: '4px', width: '65%', margin: '10px auto' }}>
                <thead>
                    <tr>
                        <th>Frontend</th>
                        <th>Backend</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Node.js 18.16</td>
                        <td>Openjdk-19</td>
                    </tr>
                    <tr>
                        <td>NPM 9.6.4</td>
                        <td>Spring Boot 3.0.6</td>
                    </tr>
                    <tr>
                        <td>Typescript 4.9.5</td>
                        <td>Kotlin 1.8.21</td>
                    </tr>
                    <tr>
                        <td>Vite 4.2.1</td>
                        <td>Gradle 8.0</td>
                    </tr>
                    <tr>
                        <td>React.js 18.2.0</td>
                        <td>Postgres 42.5.4</td>
                    </tr>
                    <tr>
                        <td>React Redux 8.0.5</td>
                        <td>Flyway 9.16.0</td>
                    </tr>
                    <tr>
                        <td>React Router 6.10</td>
                        <td>Spring Security 3.0.6</td>
                    </tr>
                    <tr>
                        <td>React Hook Form 7.43.0</td>
                        <td>Spring Data 3.0.6</td>
                    </tr>
                </tbody>
            </table>
            <p>And more...</p>
            <hr style={{ color: 'rgba(255, 85, 49, 0.36)', width: '65%' }}/>
            <p>You can check out the source code at github.com:
                <Button component={Link} to={'https://github.com/st58238/nnpia-sem01-frontend'} variant="outlined" className='btnCustom' sx={{ marginLeft: '10px' }}>
                    Frontend
                </Button>
                <Button component={Link} to={'https://github.com/st58238/nnpia-sem01-backend'} variant="outlined" className='btnCustom' >
                    Backend
                </Button>
            </p>
        </>
    );
}