import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchContactById } from "../../../services/contactServices";

const ContactDetail = () => {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetchContactById(id);
        setContact(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Error al obtener el contacto");
        setLoading(false);
      }
    };

    fetchContact();
  }, [id]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className='contact-detail'>
      <h2>Detalle del Contacto</h2>
      <p>
        <strong>Nombre:</strong> {contact.name}
      </p>
      <p>
        <strong>Empresa:</strong> {contact.company}
      </p>
      <p>
        <strong>Email:</strong> {contact.email}
      </p>
      <p>
        <strong>Teléfono:</strong> {contact.phone}
      </p>
      <p>
        <strong>Servicio de Interés:</strong> {contact.interestService}
      </p>
      <p>
        <strong>Mensaje:</strong> {contact.message}
      </p>
      <p>
        <strong>Preferencia de Contacto:</strong> {contact.contactPreference}
      </p>
      <p>
        <strong>Horario Preferido:</strong> {contact.preferredContactTime}
      </p>
      <p>
        <strong>Referido Por:</strong> {contact.referralSource}
      </p>
      <p>
        <strong>Estado:</strong> {contact.contactStatus}
      </p>
      <p>
        <strong>Notas Internas:</strong> {contact.internalNotes}
      </p>
    </div>
  );
};

export default ContactDetail;
