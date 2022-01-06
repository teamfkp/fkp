import { TextField } from "@material-ui/core";
import axios from "axios";
import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import { serverApi } from "./config";

export const Admin = (props) => {
    const [state, setState] = useState({ username: "" });
    const history = useHistory();

    const changeHandler = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        let response = await axios.post(`${serverApi}/admin`, state);
        if (response?.data?.status && response?.data?.accessToken) {
            localStorage.setItem("accessToken", response?.data?.accessToken);
            history.push("/dashboard");
        }
        else alert("Please try again..!");
    }

    return <div align="center">
        <TextField
            fullWidth
            onChange={changeHandler}
            value={state.username}
            label="Username"
            type="text"
            margin="dense"
            name="username"
            sx={{ width: 250 }}
        /><br />
        <TextField
            fullWidth
            onChange={changeHandler}
            value={state.password}
            label="Password"
            type="password"
            margin="dense"
            name="password"
            sx={{ width: 250 }}
        /><br />
        <button
            className="custom-btn btn-5"
            onClick={submitHandler}
            type="submit"
        >
            <span>Submit</span>
        </button>
    </div>
}