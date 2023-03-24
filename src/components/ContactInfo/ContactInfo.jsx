import ContactAvatar from '../ContactAvatar/ContactAvatar';
import ContactButton from '../ContactButton/ContactButton';
import { useEffect, useState } from 'react';

import './contactinfo.scss';

const ContactInfo = (props) => {
  const { id, name, email, phone, company, address } =
    props.activeContact;

  const [contact, setContact] = useState({
    id: id,
    name: name,
    email: email,
    phone: phone,
    company: company,
    address: address,
  });

  useEffect(() => {
    setContact({
      id: id,
      name: name,
      email: email,
      phone: phone,
      company: company,
      address: address,
    });
  }, [id, name, email, phone, company, address]);

  return (
    <div className='main-content-card'>
      <div className='container p-0'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='card mb-3'>
              <div className='card-body'>
                <div className='d-flex flex-column align-items-center text-center'>
                  <ContactAvatar
                    name={contact.name + ' ' + contact.name}
                    className={'info-avatar'}
                  />
                  <div className='mt-3 w-100'>
                    <h4 className='m-auto fullname'>
                      {contact.name}
                    </h4>
                    <p className='mb-1 text-secondary'>
                      {contact.company.name}
                    </p>
                  </div>
                </div>
                <div className='row mt-3'>
                  <div className='col-4'>
                    <h6 className=' mb-0 text-secondary'>Имя</h6>
                  </div>
                  <div className='col-8 truncate-string'>
                    {contact.name}
                  </div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-4'>
                    <h6 className=' mb-0 text-secondary '>Email</h6>
                  </div>
                  <div className='col-8'>{contact.email}</div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-4'>
                    <h6 className=' mb-0 text-secondary'>Номер</h6>
                  </div>
                  <div className='col-8  '>{contact.phone}</div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-4'>
                    <h6 className=' mb-0 text-secondary'>Компания</h6>
                  </div>
                  <div className='col-8  '>{contact.company.name}</div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-4'>
                    <h6 className=' mb-0 text-secondary'>Адрес</h6>
                  </div>
                  <div className='col-8  '>{contact.address.city}</div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-12 d-flex justify-content-center'>
                    <ContactButton
                      btnIcon={'pencil'}
                      btnText={'Редактировать контакт'}
                      setModalShow={props.setModalShow}
                      setIsEdit={props.setIsEdit}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
