import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

const DeleteModel = ({ show, handleClose, handleDelete }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size='md'
        backdrop='static'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Подтвердите удаление</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Вы уверенны что хотите удалить контакт(ы)?
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Отмена
          </Button>
          <Button variant='danger' onClick={handleDelete}>
            Удалить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteModel;
