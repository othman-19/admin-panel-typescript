import React, { FC , useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../UI/Spinner';
import AddLicenseModal from './addLicenseModal';
import * as API from '../../services/typescript-fetch-client'
import { LicenseInfo } from '../../services/typescript-fetch-client';

const { licenseList, deleteLicense } = API.LicensingApiFp();

const Licenses: FC = () => {
  const [licenses, setLicenses] = useState<LicenseInfo[]>([]);
  const [loading, setloding] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await licenseList()();
        setLicenses(data.items);
        setloding(false)
      } catch (err) {
        setloding(false);
        throw err;
      }
    })();
  }, [loading, licenses]);

  const handleDeleteLicense = async (license: LicenseInfo) => {
    try {
      await deleteLicense(license.ID)();
      setLicenses(licenses.filter((item) => item.ID !== license.ID));
    } catch (error) {
      throw error
    }
  }
  return (
    <div className='container'>
      <AddLicenseModal />
      <div className="row">
        {licenses && (licenses.map(
          (license: LicenseInfo) => (
            <div className="col-sm-6" key={license.ID}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">license: {license.license}</h5>
                  <p className="card-text">application ID: {license.appID}</p>
                  <Link to="#" className="btn btn-primary mx-1">Licence Info</Link>
                  <button
                    type='submit'
                    className="btn btn-danger mx-1"
                    onClick={() => handleDeleteLicense(license)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )
        ))}
        
      </div>
      <div className="row">
        { loading && <Spinner /> }
      </div>
    </div>

  );
}

export default Licenses;
