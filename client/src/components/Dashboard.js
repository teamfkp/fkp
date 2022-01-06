import { Button } from "@material-ui/core";
import axios from "axios";
import { React, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { serverApi } from "./config";

export const Dashboard = (props) => {
    const history = useHistory()
    const logout = (e) => {
        localStorage.clear();
        history.push("/");
    }
    useEffect(() => {
        axios.get(`${serverApi}/contacts`, { auth: localStorage.getItem("accessToken") })
    }, [])
    return <div align="center" style={{ minHeight: "50rem" }}><h1>Dashboard</h1>
        <Button variant="outlined" color="error" onClick={logout}>Logout</Button>
    </div>
}