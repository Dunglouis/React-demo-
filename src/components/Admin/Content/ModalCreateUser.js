import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FiPlusCircle } from "react-icons/fi";

const ModalCreateUser = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [image, setImage] = useState("");
    const [role, setRole] = useState("User");
    const [previewImage, setPreviewImage] = useState("");

    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0])) // chuyen anh qua blob
            setImage(event.target.files[0])
        } else {
            // setPreviewImage("");
        }

    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                size='xl'
                backdrop="static" //khi click ra ngoai phan nhap dia chi email thi tao hieu ung noi len
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add new users</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form classname="row g-3">
                        <div classname="col-md-6">
                            <label classname="form-label">Email</label>
                            <input type="email" classname="form-control" value={email} onChange={(event) => setEmail(event.target.value)} />
                        </div>
                        <div classname="col-md-6">
                            <label classname="form-label">Password</label>
                            <input type="password" classname="form-control" value={password} onChange={(event) => setPassword(event.target.value)} />
                        </div>
                        <div classname="col-md-6">
                            <label classname="form-label">Username</label>
                            <input type="text" classname="form-control" value={username} onChange={(event) => setUsername(event.target.value)} />
                        </div>
                        <div classname="col-md-4">
                            <label classname="form-label">Role</label>
                            <select classname="form-select" onChange={(event) => setRole(event.target.value)}>
                                <option value='USER'>USER</option>
                                <option value='ADMIN'>ADMIN</option>
                            </select>
                        </div>
                        <div className='col-md-12'>
                            <label className='form-lable lable-upload' htmlFor='lableUpload'>
                                <FiPlusCircle />Upload file Image</label>
                            <input type='file' id='lableUpload' hidden onChange={(event) => handleUploadImage(event)}></input>
                        </div>
                        <div className='col-md-12 img-preview'>
                            {previewImage ?
                                <img src={previewImage} />
                                :
                                <span>Preview Image</span>
                            }


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