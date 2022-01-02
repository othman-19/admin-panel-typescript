import axios from 'axios';
import { CreateLicense } from '../../Models';
import { License } from '../../Models';
import { API_URL } from '../config';

const getLicenses = async () => {
    const url = `${API_URL}/license`;
    const headers= {
      'Content-Type': 'application/json',
    };
  try {
    const response = await axios.get(url, {headers});
    const data = response.data;
    return data;
  } catch (err) {
    return {
      error: err,
    };
  }
};

const createLicense = async (licenseData: CreateLicense) => {
  const url= `${API_URL}/license`;
  const headers= {
    'Content-Type': 'application/json',
  };
  try {
    const response = await axios.post(url, licenseData, {headers});
    const data = response.data;
    return data;
  } catch (err) {
    return {
      error: err,
    };
  }
};

const deleteLicense = async (license: License) => {
  const url= `${API_URL}/license`;
  try {
    const response = await axios.delete(url, {data: license.ID});
    const data = response.data;
    return data;
  } catch (err) {
    return {
      error: err,
    };
  }
};


export { getLicenses, createLicense, deleteLicense };