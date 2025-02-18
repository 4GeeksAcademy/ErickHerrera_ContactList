import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardContact = ({ contact }) => {
    const { actions } = useContext(Context);

    const handleDelete = () => {
        actions.deleteContact(contact.id);
    };

    return (
        <div
            className="card mb-4 shadow-lg"
            style={{
                borderRadius: "10px",
                overflow: "hidden",
                border: "none",
                backgroundColor: "#ffffff",
            }}
        >
            <div
                className="card-header text-white"
                style={{
                    background: "linear-gradient(135deg, #667eea, #764ba2)",
                    padding: "1rem",
                }}
            >
                <h5
                    className="card-title mb-0"
                    style={{
                        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                    }}
                >
                    {contact.name}
                </h5>
            </div>
            <div className="card-body d-flex">
                <div className="me-3">
                    <img
                        src={`https://picsum.photos/seed/${contact.id}/100/100`}
                        alt="Contacto"
                        className="rounded-circle"
                        style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                            border: "3px solid #fff",
                        }}
                    />
                </div>
                <div className="flex-grow-1">
                    <p
                        className="card-text mb-2"
                        style={{ fontSize: "0.9rem", color: "#555" }}
                    >
                        <i className="fa fa-map-marker me-2"></i>
                        {contact.address}
                    </p>
                    <p
                        className="card-text mb-2"
                        style={{ fontSize: "0.9rem", color: "#555" }}
                    >
                        <i className="fa fa-phone me-2"></i>
                        {contact.phone}
                    </p>
                    <p
                        className="card-text mb-0"
                        style={{ fontSize: "0.9rem", color: "#555" }}
                    >
                        <i className="fa fa-envelope me-2"></i>
                        {contact.email}
                    </p>
                </div>
            </div>
            <div
                className="card-footer bg-light d-flex justify-content-end gap-2"
                style={{ padding: "0.75rem" }}
            >
                <Link
                    to={`/editContact/${contact.id}`}
                    className="btn btn-sm btn-outline-primary"
                >
                    <i className="fa fa-pencil me-1"></i> Editar
                </Link>
                <button
                    type="button"
                    className="btn btn-sm btn-outline-danger"
                    data-bs-toggle="modal"
                    data-bs-target={`#delete-contact-${contact.id}`}
                >
                    <i className="fa fa-trash me-1"></i> Eliminar
                </button>
            </div>
            <div
                className="modal fade"
                id={`delete-contact-${contact.id}`}
                tabIndex="-1"
                aria-labelledby={`deleteModalLabel-${contact.id}`}
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content" style={{ borderRadius: "10px" }}>
                        <div className="modal-header">
                            <h5 className="modal-title" id={`deleteModalLabel-${contact.id}`}>
                                Confirmar eliminación
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Cerrar"
                            ></button>
                        </div>
                        <div className="modal-body">
                            ¿Estás seguro de que deseas eliminar este contacto?
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cancelar
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                                onClick={handleDelete}
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardContact;
