import { Alert, Container, Table } from "@material-ui/core";
import axios from "axios";
import moment from "moment";
import { React, useEffect, useState } from "react";
import { serverApi } from "./config";

export const ContactsDisplay = (props) => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const [error, setError] = useState(0);

    const getData = async () => {
        let response = await axios.get(`${serverApi}/contacts`, { 'headers': { Authorization: localStorage.getItem("accessToken") } });
        if (response.data.data) {
            setContacts(response.data.data)
        } else {
            setError(1)
        }
    }
    return <div style={{ minHeight: "50rem" }}>
        <div className="text-center">
            <h2>Contacts information</h2>
        </div>
        <br />
        {error === 1 &&
            <Alert severity="error">Something went wrong please try later...!</Alert>
        }

        <div className="table-responsive">
            <table className="table">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Event Date</th>
                    <th>Location</th>
                    <th>Created Date</th>
                </tr>
                {contacts.map((data, index) => {
                    return <tr>
                        <td>{data?.id}</td>
                        <td>{data?.name}</td>
                        <td>{data?.email}</td>
                        <td>{data?.phone}</td>
                        <td>{data?.cat}</td>
                        <td>{data?.contactDesc}</td>
                        <td>{moment(data?.dateevent).format("YYYY-MM-DD")}</td>
                        <td>{data?.location}</td>
                        <td>{moment(data?.datetime).format("YYYY-MM-DD HH:mm:ss")}</td>
                    </tr>
                })}

            </table>
        </div>

    </div>
}