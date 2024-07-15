import React, { useEffect, useState, useCallback } from "react";
import { Table, Pagination, Form, Button, Modal } from "react-bootstrap";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  fetchContacts,
  updateContactStatus,
  deleteContact,
} from "../../../services/contactServices";

const ContactsList = () => {
  const [contacts, setContacts] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1); // Total de páginas para la paginación
  const [showModal, setShowModal] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState(null);
  const limit = 10; // Número de contactos por página
  const navigate = useNavigate();

  const fetchContactsData = useCallback(async () => {
    try {
      const response = await fetchContacts(page, limit);
      setContacts(response.data.contacts);
      setTotalPages(Math.ceil(response.data.total / limit));
    } catch (error) {
      console.error(error);
    }
  }, [page, limit]);

  useEffect(() => {
    fetchContactsData();
  }, [page, fetchContactsData]);

  const handleStatusChange = async (id, status) => {
    try {
      await updateContactStatus(id, status.toUpperCase());
      setContacts((prevContacts) =>
        prevContacts.map((contact) =>
          contact._id === id
            ? { ...contact, contactStatus: status.toUpperCase() }
            : contact
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteContact = async () => {
    try {
      await deleteContact(selectedContactId);
      setContacts((prevContacts) =>
        prevContacts.filter((contact) => contact._id !== selectedContactId)
      );
      setShowModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleShowModal = (id) => {
    setSelectedContactId(id);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedContactId(null);
  };

  return (
    <div className='p-5'>
      <h2 className='pb-3'>Contactos</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Empresa</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Meta o Desafío</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact._id}>
              <td>{contact.name}</td>
              <td>{contact.company}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>{contact.message}</td>  
              <td>
                <Form.Select
                  value={contact.contactStatus}
                  onChange={(e) =>
                    handleStatusChange(contact._id, e.target.value)
                  }
                >
                  <option value='NEW'>Nuevo</option>
                  <option value='CONTACTED'>Contactado</option>
                  <option value='LEAD'>Interesado</option>
                  <option value='CLOSED'>Cliente</option>
                </Form.Select>
              </td>
              <td className='d-flex justify-content-around'>
                <Button
                  variant='info'
                  size='sm'
                  onClick={() => navigate(`/admin/contact/${contact._id}`)}
                >
                  <FaEye />
                </Button>
                <Button
                  variant='warning'
                  size='sm'
                  onClick={() => navigate(`/admin/edit-contact/${contact._id}`)}
                >
                  <FaEdit />
                </Button>
                <Button
                  variant='danger'
                  size='sm'
                  onClick={() => handleShowModal(contact._id)}
                >
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        <Pagination.Prev
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
        />
        <Pagination.Item active>{page + 1}</Pagination.Item>
        <Pagination.Next
          onClick={() => setPage(page + 1)}
          disabled={page >= totalPages - 1}
        />
      </Pagination>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Estás seguro de que deseas eliminar este contacto?
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button variant='danger' onClick={handleDeleteContact}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ContactsList;
