import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function NewPage() {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <div>
      <h1>tes modal123</h1>
      <Button onClick={() => setShow(!show)}>klik modal</Button>
      <Modal show={show}>
        <Modal.Body>Tessss</Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShow(!show)}>close modal</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default NewPage;
