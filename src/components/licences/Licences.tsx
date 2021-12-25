import React, { FC , useEffect, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { getLicences } from '../../services/license/licence.service';
import { Licence } from '../../Models';

const Licences: FC = () => {
  const [licences, setLicences] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const data = await getLicences();
        setLicences(data);
        return data;
      } catch (err) {
        return err;
      }
    })();
  }, []);
  return (
    <div className="list">
      {licences && (licences.map( (licence: Licence) => (<p key={licence._id}>{licence._id}</p>)))}
      {!licences && (
        <p>loading...</p>
      )}
    </div>

  );
}

export default Licences;
