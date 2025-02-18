import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from 'react-router-dom'
import { Context } from "../store/appContext.js";
import Card from "../component/card.jsx"

const Contacts = () => {

    const { store, actions } = useContext(Context)
    console.log(store.listContacts)

    useEffect(() => {
        actions.getInfoContacts();
    }, []);

    return (

        <div className="w-75 mx-auto">
            <div className="d-flex justify-content-end">
                <Link to="/AddContact">
                <button className="btn text-white px-4 py-2 fw-bold rounded-pill shadow-sm" 
						style={{ backgroundColor: "#007BFF", border: "none" }}>
						Add New Contact
					</button>
                </Link>
            </div>
            <ul className="list-group mt-3">
                {store.listContacts && store.listContacts.length > 0 && store.listContacts.map((contact, index) => {
                    return (
                        <Card contact={contact} key={index} />
                    )
                })}
            </ul>
        </div>
    );
};
export default Contacts;