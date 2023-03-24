import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import './contactmodel.scss';

function ContactModel({
  activeContact,
  isEdit,
  show,
  onHide,
  title,
  addContact,
  editContact,
}) {
  const initialContact = {
    id: '_' + Math.random().toString(36).substr(2, 9),
    name: '',
    email: '',
    phone: '',
    company: {name: ''},
    address: {city: ''},
  };
  const [contact, setContact] = useState(initialContact);

  useEffect(() => {
    isEdit ? setContact(activeContact) : setContact(initialContact);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeContact, isEdit]);

  const [validated, setValidated] = useState(false);

  const handleFormSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      isEdit ? editContact(contact) : addContact(contact);
      setContact(initialContact);
      onHide(false);
      setValidated(false);
    }
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size='lg'
      backdrop='static'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          <Row className='mb-3'>
            <Form.Group as={Col} md='6' controlId='validationCustomFirstName'>
              <Form.Label>Имя</Form.Label>
              <Form.Control
                type='text'
                placeholder='Введите имя'
                value={contact.name}
                onChange={(e) =>
                  setContact({ ...contact, name: e.target.value })
                }
                required
              />
              <Form.Control.Feedback type='invalid'>
                Пожалуйста введите правильно имя.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md='6' controlId='validationCustomEmail'>
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type='email'
                  pattern='^[^\s@]+@[^\s@]+\.[^\s@]+$'
                  placeholder='Введите Email'
                  aria-describedby='inputGroupPrepend'
                  value={contact.email}
                  onChange={(e) =>
                    setContact({ ...contact, email: e.target.value })
                  }
                  required
                />
                <Form.Control.Feedback type='invalid'>
                  Пожалуйста введите валидный email.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <Form.Group as={Col} md='6' controlId='validationPhoneNumber'>
              <Form.Label>Номер телефона</Form.Label>
              <Form.Control
                type="text"
                placeholder='Введите номер телефона'
                value={contact.phone}
                onChange={(e) =>
                  setContact({ ...contact, phone: e.target.value })
                }
                required
              />
              <Form.Control.Feedback type='invalid'>
                Пожалуйста введи валидный номер.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md='6' controlId='validationCustom04'>
              <Form.Label>Компания</Form.Label>
              <Form.Control
                type='text'
                placeholder='Введите название компании'
                value={contact.company.name}
                onChange={(e) =>
                  setContact({ ...contact, company: { name: e.target.value } })
                }
                required
              />
              <Form.Control.Feedback type='invalid'>
                Пожалуйста введите валидное название компании.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <Form.Group as={Col} md='12' controlId='validationAddress'>
              <Form.Label>Адрес</Form.Label>
              <Form.Control
                as='textarea'
                placeholder='Введите адрес'
                rows={5}
                value={contact.address.city}
                onChange={(e) =>
                  setContact({ ...contact, address: { city: e.target.value }})
                }
                required
              />
              <Form.Control.Feedback type='invalid'>
                Пожалуйста введите валидный адрес.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Modal.Footer>
            <Button variant='secondary' onClick={onHide}>
              Отмена
            </Button>
            <Button type='submit'>Сохранить</Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ContactModel;
