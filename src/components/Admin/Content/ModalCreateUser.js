import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalCreateUser = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                size='xl'
                backdrop="static"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add new users</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form classname="row g-3">
                        <div classname="col-md-6">
                            <label classname="form-label">Email</label>
                            <input type="email" classname="form-control" />
                        </div>
                        <div classname="col-md-6">
                            <label classname="form-label">Password</label>
                            <input type="password" classname="form-control" />
                        </div>
                        <div classname="col-md-6">
                            <label classname="form-label">Username</label>
                            <input type="text" classname="form-control" />
                        </div>
                        <div classname="col-md-4">
                            <label classname="form-label">Role</label>
                            <select classname="form-select">
                                <option selected value='USER'>USER</option>
                                <option value='ADMIN'>ADMIN</option>
                            </select>
                        </div>
                        <div className='col-md-12'>
                            <label className='form-lable'>Image</label>
                            <input type='file'></input>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalCreateUser;