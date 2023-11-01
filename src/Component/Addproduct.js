import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Addproduct() {
  const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [name,setName]=useState ("")
const [description,setDescription]=useState ("")
const [image,setImage]=useState ("")
const [price,setPrice]=useState ("0")
const [quantity,setQuantity]=useState ("0")
const Addprod =()=>{
var data={product:name,description:description,image:image,price:price,quantity:quantity}
localStorage.setItem("product",JSON.stringify(data))
}

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>product name</Form.Label>
              <Form.Control

onChange={(e)=>setName(e.target.value)}
                type="text"
                placeholder="put product name"
                autoFocus
              />
            </Form.Group>


            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>description</Form.Label>
              <Form.Control
              onChange={(e)=>setDescription(e.target.value)}
                type="text"
                placeholder="description"
                autoFocus
              />
            </Form.Group>


            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>image</Form.Label>
              <Form.Control
              onChange={(e)=>setImage(e.target.value)}
                type="text"
                placeholder="image product"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>price</Form.Label>
              <Form.Control
              onChange={(e)=>setPrice(e.target.value)}
                type="number"
                placeholder=""
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>quantity</Form.Label>
              <Form.Control
              onChange={(e)=>setQuantity(e.target.value)}
                type="number"
                placeholder=""
                autoFocus
              />
            </Form.Group>


             </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={Addprod}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Addproduct;