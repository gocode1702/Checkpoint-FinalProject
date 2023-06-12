import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./ButtonEvents.css";
import {textAlign} from '@mui/system';

function MessageToProf() {
    const [show, setShow] = useState(false);

    return (
        <> 
        < Button variant = "primary" onClick = {
            () => setShow(true)
        }
        className = "button  animated infinite tada " >
      
        <h6 style={{color:"black"}}>Message</h6>
    </Button>

    <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        style={{
            backgroundImage: " url(https://tailwindtoolbox.github.io/Rainblur-Landing-Page/header.png) "
        }}>
        <Modal.Header
            closeButton="closeButton"
            style={{
                backgroundColor: " url(https://tailwindtoolbox.github.io/Rainblur-Landing-Page/header.png)"
            }}>
            <Modal.Title id="example-custom-modal-styling-title">
                <h1
                    style={{
                        color: "rosybrown",
                        textAlign: "center"
                    }}>
                    {" "}
                    😃Thank you very much for your guidance and support👇
                </h1>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h3
                style={{
                    backgroundColor: "rosybrown"
                }}>
                👉Thank you for all three months of guidance and advice you have bestowed upon
                me. 👍 I hope to make you proud of my future endeavors as well
                ....Congratulations.Sincerely 🧑‍✈️
            </h3>
        </Modal.Body>
    </Modal>
</>
    );
}

export default MessageToProf;
