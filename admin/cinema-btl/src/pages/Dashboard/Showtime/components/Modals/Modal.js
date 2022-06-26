import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import FormAddEdit from '../Forms/FormAddEdit';

function ModalForm(props) {
  const [show, setShow] = useState(props.isShow);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const handleShow = () => console.log('set show');

  const deBug = () =>
    console.log(
      props.cineplexs.filter((cineplex) => cineplex.id === 2)[0].Cinemas ||
        props.cineplexs.filter((cineplex) => cineplex.id === 2)[0]
    );

  const buttonAdd = (
    <Button
      className="button-add"
      onClick={
        props.cineplexs.filter((cineplex) => cineplex.id === 1)[0] ? handleShow : deBug
      }>
      <BsFillPlusSquareFill className="button-icon" />
      Add Showtime
    </Button>
  );

  return (
    <>
      {props.method === 'add' ? buttonAdd : ''}

      <Modal size="lg" show={show} backdrop="static" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormAddEdit
            handleClose={handleClose}
            cineplexs={props.cineplexs}
            data={props.data}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button form="form-add-edit" className="button-add" type="submit">
            {props.method === 'add' ? 'Submit' : 'Update'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalForm;
