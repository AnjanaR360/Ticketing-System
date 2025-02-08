import axios from "axios";

const API_URL = "http://localhost:8080/api";

// Configuration
export const fetchConfiguration = async () => {
  const response = await axios.get(`${API_URL}/config`);
  return response.data;
};

export const saveConfiguration = async (configuration) => {
  const response = await axios.post(`${API_URL}/config`, configuration);
  return response.data;
};

// Vendors
export const fetchVendors = async () => {
    const response = await axios.get(`${API_URL}/vendors`);
    return response.data;
};
  
export const addVendor = async (vendor) => {
    const response = await axios.post(`${API_URL}/vendors`, vendor);
    return response.data;
};


export const removeVendor = async (vendorId) => {
    const response = await axios.delete(`${API_URL}/vendors?id=${vendorId}`);
    return response.data;
};

export const startVendors = async () => {
    const response = await axios.get(`${API_URL}/vendors/start`);
    return response.data;
};

export const stopVendors = async () => {
    const response = await axios.get(`${API_URL}/vendors/stop`);
    return response.data;
};

// Customer
export const fetchCustomers = async () => {
    const response = await axios.get(`${API_URL}/customers`);
    return response.data;
};

export const addCustomer = async (customer) => {
    const response = await axios.post(`${API_URL}/customers`, customer);
    return response.data;
};

export const removeCustomer = async (customerId) => {
    const response = await axios.delete(`${API_URL}/customers?id=${customerId}`);
    return response.data;
};

export const startCustomers = async () => {
    const response = await axios.get(`${API_URL}/customers/start`);
    return response.data;
};

export const stopCustomers = async () => {
    const response = await axios.get(`${API_URL}/customers/stop`);
    return response.data;
};