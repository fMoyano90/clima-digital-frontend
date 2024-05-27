// services/contactService.js
import axios from "axios";

const API_URL = "http://localhost:3001/v1";

const fetchContacts = (page, limit) => {
  return axios.get(`${API_URL}/contacts`, {
    params: { page: page + 1, limit },
  });
};

const fetchContactById = (id) => {
  return axios.get(`${API_URL}/contact/${id}`);
};

const updateContact = (id, contactData) => {
  return axios.put(`${API_URL}/contact/${id}`, contactData);
};

const updateContactStatus = (id, status) => {
  return axios.put(`${API_URL}/contact/${id}/status`, { status });
};

const deleteContact = (id) => {
  return axios.delete(`${API_URL}/contact/${id}`);
};

export {
  fetchContacts,
  fetchContactById,
  updateContact,
  updateContactStatus,
  deleteContact,
};
