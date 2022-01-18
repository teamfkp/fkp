import { Button } from "@material-ui/core";
import { React } from "react";
import { useHistory } from "react-router-dom";

export const Logout = (props) => {
    const history = useHistory();
    const logout = (e) => {
        localStorage.clear();
        history.push("/logout");
    }
    return <Button variant="contained" color="error" onClick={logout}>Logout</Button>
} 