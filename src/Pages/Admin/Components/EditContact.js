import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  fetchContactById,
  updateContact,
} from "../../../services/contact.service";

const EditContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interestService: "",
    message: "",
    contactPreference: "",
    preferredContactTime: "",
    referralSource: "",
    internalNotes: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetchContactById(id);
        setFormData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Error al obtener el contacto");
        setLoading(false);
      }
    };

    fetchContact();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateContact(id, formData);
      navigate(`/contact/${id}`); // Redirigir a la vista del detalle del contacto después de la actualización
    } catch (error) {
      console.error(error);
      setError("Error al actualizar el contacto");
    }
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className='edit-contact'>
      <h2>Editar Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Nombre</label>
          <input
            type='text'
            className='form-control'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label>Empresa</label>
          <input
            type='text'
            className='form-control'
            name='company'
            value={formData.company}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label>Email</label>
          <input
            type='email'
            className='form-control'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label>Teléfono</label>
          <input
            type='text'
            className='form-control'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label>Servicio de Interés</label>
          <input
            type='text'
            className='form-control'
            name='interestService'
            value={formData.interestService}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label>Mensaje</label>
          <textarea
            className='form-control'
            name='message'
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label>Preferencia de Contacto</label>
          <select
            className='form-control'
            name='contactPreference'
            value={formData.contactPreference}
            onChange={handleChange}
          >
            <option value='Phone'>Teléfono</option>
            <option value='Email'>Email</option>
            <option value='WhatsApp'>WhatsApp</option>
          </select>
        </div>
        <div className='form-group'>
          <label>Horario Preferido</label>
          <select
            className='form-control'
            name='preferredContactTime'
            value={formData.preferredContactTime}
            onChange={handleChange}
          >
            <option value='Morning'>Mañana</option>
            <option value='Afternoon'>Tarde</option>
            <option value='Evening'>Noche</option>
          </select>
        </div>
        <div className='form-group'>
          <label>Referido Por</label>
          <input
            type='text'
            className='form-control'
            name='referralSource'
            value={formData.referralSource}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label>Notas Internas</label>
          <textarea
            className='form-control'
            name='internalNotes'
            value={formData.internalNotes}
            onChange={handleChange}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Guardar Cambios
        </button>
      </form>
    </div>
  );
};

export default EditContact;
