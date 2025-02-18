import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Context } from "../store/appContext.js";

const AddContact = () => {
    const { store, actions } = useContext(Context);
    let navigate = useNavigate();
    const { id } = useParams(); 

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [showToast, setShowToast] = useState(false);

    function guardarContacto(e) {
        e.preventDefault();
        if (name.trim() === "" || phone.trim() === "" || email.trim() === "" || address.trim() === "") {
            alert("Empty fields");
            return;
        }
        const payload = {
            name: name,
            phone: phone,
            email: email,
            address: address
        };
        if (!id) {
            actions.createContact(payload);
        } else {
            actions.editContact(id, payload);
        }
        setShowToast(true);

        setTimeout(() => {
            setShowToast(false);
            navigate("/");
        }, 2000);

        setName("");
        setPhone("");
        setEmail("");
        setAddress("");
    }

    useEffect(() => {
        if (id && store.listContacts.length > 0) {
            const currentContact = store.listContacts.find(contact => contact.id == id);
            setName(currentContact.name);
            setPhone(currentContact.phone);
            setEmail(currentContact.email);
            setAddress(currentContact.address);
        }
    }, [id, store.listContacts]);

    return (
        <div className="container">
            <h1 className="text-center">{!id ? "Add a New Contact" : `Editing Contact: ${name}`}</h1>

            <form className="container" onSubmit={guardarContacto}>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput1" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput1" placeholder="Full name" onChange={(e) => setName(e.target.value)} value={name} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput3" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="Enter phone" onChange={(e) => setPhone(e.target.value)} value={phone} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput4" className="form-label">Address</label>
                    <input type="text" className="form-control" id="formGroupExampleInput4" placeholder="Enter address" onChange={(e) => setAddress(e.target.value)} value={address} required />
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </form>

            <Link to="/">volver a Contacts</Link>
            {showToast && (
                <div 
                    className="position-fixed top-50 start-50 translate-middle p-3" 
                    style={{ zIndex: 1050 }}
                >
                    <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header">
                            <strong className="me-auto">Success</strong>
                            <button 
                                type="button" 
                                className="btn-close" 
                                onClick={() => setShowToast(false)}
                            ></button>
                        </div>
                        <div className="toast-body">
                            Contact saved successfully!
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddContact;
