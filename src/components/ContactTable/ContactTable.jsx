import { Table } from 'react-bootstrap';
import ContactRow from '../ContactRow/ContactRow';
import { useState, useEffect } from 'react';

import './contacttable.scss';

const ContactTable = ({
  contacts,
  filterText,
  showActiveUser,
  checkedContactIdList,
  setCheckedContactIDList,
  handleShow,
  setIsMultiDelete,
  setDeleteContactId,
}) => {
  const [contactList, setContactList] = useState(contacts);

  useEffect(() => {
    const filteredContacts = contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filterText.toLowerCase()) ||
        (
          contact.name.toLowerCase()
        ).includes(filterText.toLowerCase()) ||
        contact.email.toLowerCase().includes(filterText.toLowerCase()) ||
        contact.phone.toLowerCase().includes(filterText.toLowerCase()) 
    );
    setContactList(filteredContacts);
  }, [contacts, filterText]);

  const contactListSorted = contactList.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });

  const contactListBinned = contactListSorted.reduce((result, word) => {
    // get the first letter. (this assumes no empty words in the list)
    const letter = word[0];
    
    // ensure the result has an entry for this letter
    result[letter] = result[letter] || [];
    
    // add the word to the letter index
    result[letter].push(word);
    
    // return the updated result
    return result;
  }, {})
  
  console.log(contactListBinned);

  return (
    <div className='main-content-list'>
      <Table>
        <thead>
          <tr>
            <th className='text-center col-1'>+</th>
            <th className='text-secondary col-5'>Контакт</th>
            <th className='text-secondary col-5'>Номер</th>
            <th className='text-center p-1 col-1'></th>
          </tr>
        </thead>
        <tbody>
          {contactListSorted.length > 0 ? (
            contactListSorted.map((contact, index) => (
              <ContactRow
                key={index}
                contact={contact}
                showActiveUser={showActiveUser}
                checkedContactIdList={checkedContactIdList}
                setCheckedContactIDList={setCheckedContactIDList}
                handleShow={handleShow}
                setIsMultiDelete={setIsMultiDelete}
                setDeleteContactId={setDeleteContactId}
              />
            ))
          ) : (
            <tr>
              <td colSpan='4' className='text-center text-secondary fw-bold'>
                Не найдено контактов
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default ContactTable;
