import Modal from "react-bootstrap/Modal";
import Canvas from "./Canvas";

const NavModal = ({lgShow, setLgShow, target}) => {
    console.log(target)
    return (
        <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    导航
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Canvas expoints={[...target, 1]} scale={0.55}/>
            </Modal.Body>
        </Modal>
    )
}
export default NavModal
