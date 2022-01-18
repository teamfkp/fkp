import { Button } from "@material-ui/core";
import axios from "axios";
import { React, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { serverApi } from "./config";
import { Logout } from "./Logout";

export const Dashboard = (props) => {
    const [state, setState] = useState({
        files: null
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        uploadFile();
    }

    const uploadFile = async (File) => {
        var formData = new FormData();
        for (var i = 0; i <= state.files.length; i++) {
            formData.append('file', state.files[i])
        } 
        
        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }

        await axios.post(`${serverApi}/upload`, formData, {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'multipart/form-data',
                Authorization: localStorage.getItem("accessToken")
            }
        }).then(response => {
            console.log(response)
        });
    }

    const handleChange = (e) => {
        setState({ ...state, files: e.target.files })
    }
    return <div align="center" style={{ minHeight: "50rem", background: "radial-gradient(circle, rgba(63,180,251,1) 0%, rgba(255,255,255,1) 100%)", color: "white" }}><h1>Dashboard</h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <h2 >
                Slider Images
            </h2>
            <input type="file" multiple onChange={handleChange} /> <br />
            <button type="submit"> Submit</button>
        </form>
    </div>
}