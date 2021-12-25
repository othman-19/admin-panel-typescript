import axios from 'axios';

const API_url = 'Fake_API_url'

const getLicences = async () => {
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

export { getLicences };