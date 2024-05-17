import React, { useEffect, useState } from "react";
import { Table, Pagination, Form, Button } from "react-bootstrap";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const ContactsList = () => {
  const [contacts, setContacts] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchContacts();
  }, [page]);

  const fetchContacts = async () => {
    // Mock data to simulate API response
    const mockData = {
      contacts: [
        {
          id: "1",
          name: "John Doe",
          company: "Company Inc.",
          email: "johndoe@example.com",
          phone: "923456789",
          interestService: "Tienda Online",
          message: "Hello, I am interested in your service.",
          contactPreference: "Email",
          preferredContactTime: "En la mañana",
          referralSource: "Google",
          contactStatus: "New",
          internalNotes: "This is a test note.",
        },
        {
          id: "2",
          name: "Jane Smith",
          company: "Another Company Inc.",
          email: "janesmith@example.com",
          phone: "987654321",
          interestService: "Sistema Gestión",
          message: "I would like more information about your service.",
          contactPreference: "Celular",
          preferredContactTime: "En la tarde",
          referralSource: "Facebook",
          contactStatus: "Contacted",
          internalNotes: "Follow up next week.",
        },
        // Add more mock contacts as needed
      ],
      total: 2,
    };

    // Simulating network delay
    setTimeout(() => {
      setContacts(mockData.contacts);
    }, 500);
  };

  const handleStatusChange = (id, status) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === id ? { ...contact, contactStatus: status } : contact
      )
    );
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
            <th>Servicio</th>
            <th>Mensaje</th>
            <th>Preferencia Contacto</th>
            <th>Horario Contacto</th>
            <th>Referido Por</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.company}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>{contact.interestService}</td>
              <td>{contact.message}</td>
              <td>{contact.contactPreference}</td>
              <td>{contact.preferredContactTime}</td>
              <td>{contact.referralSource}</td>
              <td>
                <Form.Select
                  value={contact.contactStatus}
                  onChange={(e) =>
                    handleStatusChange(contact.id, e.target.value)
                  }
                >
                  <option value='New'>Nuevo</option>
                  <option value='Contacted'>Contactado</option>
                  <option value='Lead'>Interesado</option>
                  <option value='Closed'>Cliente</option>
                </Form.Select>
              </td>
              <td className='d-flex justify-content-around'>
                <Button variant='info' size='sm'>
                  <FaEye />
                </Button>
                <Button variant='warning' size='sm'>
                  <FaEdit />
                </Button>
                <Button variant='danger' size='sm'>
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
        <Pagination.Next onClick={() => setPage(page + 1)} />
      </Pagination>
    </div>
  );
};

export default ContactsList;
