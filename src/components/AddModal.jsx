
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
function Example({show, handleClose, apps, setApps, drName}) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  
  const handleSubmit = (e) =>{
    e.preventDefault(); 
    setApps([...apps, {
        id: new Date().getTime(),
        patient: name,
        day: date,
        consulted: false,
       
    },] )
    handleClose();
  }
  return (
    <>
     {/*  <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointments for {drName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Patient Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)} value={name}/>
        <Form.Text className="text-muted">
         
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="date">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" placeholder="Date" onChange={(e) => setDate(e.target.value)} value={date}/>
      </Form.Group>
      <div className='text-center'>
      <Button variant="success" type="submit" className='me-2'>
        Save
      </Button>
      <Button variant="danger" onClick={handleClose}>
            Close
        </Button>
      </div>
      
    </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;