// services/contactService.js
import axios from "axios";

const API_URL = "https://clima-digital-bff-0c8760dd7b54.herokuapp.com/v1";

const fetchContacts = async (page, limit) => {
  try {
    const response = await axios.get(`${API_URL}/contacts`, {
      params: { page: page + 1, limit },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error; // Lanza el error para que pueda ser manejado por el llamador
  }
};

const fetchContactById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/contact/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching contact with ID ${id}:`, error);
    throw error;
  }
};

const updateContact = async (id, contactData) => {
  try {
    const response = await axios.put(`${API_URL}/contact/${id}`, contactData);
    return response.data;
  } catch (error) {
    console.error(`Error updating contact with ID ${id}:`, error);
    throw error;
  }
};

const updateContactStatus = async (id, status) => {
  try {
    const response = await axios.put(`${API_URL}/contact/${id}/status`, { status });
    return response.data;
  } catch (error) {
    console.error(`Error updating status of contact with ID ${id}:`, error);
    throw error;
  }
};

const deleteContact = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/contact/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting contact with ID ${id}:`, error);
    throw error;
  }
};

const submitContactForm = async (formData) => {
  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${API_URL}/contact`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(formData),
  };

  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export {
  fetchContacts,
  fetchContactById,
  updateContact,
  updateContactStatus,
  deleteContact,
  submitContactForm
};
