import axios from 'axios';
import { CreateLicense } from '../../Models';
import { License } from '../../Models';

const API_url = 'Fake_API_url'

const getLicenses = async () => {
    const url= `${API_url}/license`;
    const headers= {
      'Content-Type': 'application/json',
    };
  try {
    const response = await axios.get(url, {headers});
    const users = response.data;
    return users;
  } catch (err) {
    return {
      error: err,
    };
  }
};

const createLicense = async (licenseData: CreateLicense) => {
  const url= `${API_url}/license`;
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
  const url= `${API_url}/license`;
  const headers= {
    'Content-Type': 'application/json',
  };
try {
  const response = await axios.post(url, license._id, {headers});
  const data = response.data;
  return data;
} catch (err) {
  return {
    error: err,
  };
}
};


export { getLicenses, createLicense, deleteLicense };