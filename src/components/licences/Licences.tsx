import React, { FC , useEffect, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../../app/App.css'
import { getLicenses } from '../../services/license/license.service';
import { License } from '../../Models';
import AddLicenseModal from './addLicenseModal';

const Licenses: FC = () => {
  const [licenses, setLicenses] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const data = await getLicenses();
        setLicenses(data);
        return data;
      } catch (err) {
        return err;
      }
    })();
  }, []);
  return (
    <>
    <AddLicenseModal />
    <div className="list">
      {licenses && (licenses.map((license: License) => (<p key={license._id}>{license._id}</p>)))}
      {!licenses && (
        <p>loading...</p>
      )}
    </div>
    </>

  );
}

export default Licenses;
