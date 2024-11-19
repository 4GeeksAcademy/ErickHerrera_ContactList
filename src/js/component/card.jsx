import React, {useContext,useEffect} from "react";
import {Context} from "../store/appContext";
import { Link } from "react-router-dom";

export const Card = () => {
    const {store,actions}=useContext(Context)
    useEffect(()=>{
        actions.getContacts()
    },[])
    console.log(store.contacts);
    
    return (
        <>

{store.contacts.map((item,index)=>{
    return(
        <div className="card mb-3" style={{ maxWidth: "540px" }}key={index}>
        <div className="row g-0">
            <div className="col-md-4">
            <img
                                    src={`https://picsum.photos/300/188?random=${index + 1}`}
                                    className="img-fluid rounded-start" style={{ width: "150px", height:"150px", objectFit: "cover" }}
                                    alt="Contacto"
                                />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <h5 className="card-title">{item.phone}</h5>
                    <h5 className="card-title">{item.email}</h5>
                    <h5 className="card-title">{item.address}</h5>
                </div>
            </div>
        </div>
    </div>
    )
})}
 </>
    );
};
