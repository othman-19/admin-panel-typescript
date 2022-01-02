import React, { FC , useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
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
        setLicenses(data.items);
      } catch (err) {
        return err;
      }
    })();
  }, []);
  return (
    <div className='container'>
      <AddLicenseModal />
      <div className="row">
        {licenses && (licenses.map(
          (license: License) => (
            <div className="col-sm-6">
              <div className="card" key={license.ID}>
                <div className="card-body">
                  <h5 className="card-title">license: {license.license}</h5>
                  <p className="card-text">application ID: {license.appID}</p>
                  <Link to="#" className="btn btn-primary">Licence Info</Link>
                </div>
              </div>
            </div>
          )
        ))}
        
      </div>
      <div className="row">
        {!licenses && (
          <p>loading...</p>
        )}
      </div>
    </div>

  );
}

export default Licenses;
