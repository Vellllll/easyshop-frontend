import { useState } from "react";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";

function Notification(){

    const [show, setShow] = useState(false);

    const handleShow = function(){
        setShow(true);
    }

    const handleClose = function(){
        setShow(false);
    }

    return (
        <>
            <Container className="TopSection">
                <Row>
                    <Col className=" p-1 " md={6} lg={6} sm={12} xs={12}>
                        <Card onClick={handleShow} className="notification-card">
                            <Card.Body>
                                <h6> Lorem Ipsum is simply dummy text of the printing</h6>
                                <p className="py-1  px-0 text-primary m-0"><i className="fa  fa-bell"></i>   Date: 22/12/2010 | Status: Unread</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className=" p-1 " md={6} lg={6} sm={12} xs={12}>
                        <Card onClick={handleShow} className="notification-card">
                            <Card.Body>
                                <h6> Lorem Ipsum is simply dummy text of the printing</h6>
                                <p className="py-1   px-0 text-primary m-0"><i className="fa  fa-bell"></i>   Date: 22/12/2010 | Status: Unread</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
                        <Card onClick={handleShow} className="notification-card">
                            <Card.Body>
                                <h6> Lorem Ipsum is simply dummy text of the printing</h6>
                                <p className="py-1  px-0 text-success m-0"><i className="fa  fa-bell"></i>   Date: 22/12/2010 | Status: Read</p>
                            </Card.Body>
                        </Card>

                    </Col>

                    <Col className="p-1" md={6} lg={6} sm={12} xs={12}>

                        <Card onClick={handleShow} className="notification-card">
                            <Card.Body>
                                <h5> Lorem Ipsum is simply dummy text of the printing</h5>
                                <p className="py-1  px-0 text-success m-0"><i className="fa fa-bell"></i>   Date: 22/12/2010 | Status: Read</p>
                            </Card.Body>
                        </Card>

                    </Col>

                    <Col className="p-1" md={6} lg={6} sm={12} xs={12}>

                        <Card onClick={handleShow} className="notification-card">
                            <Card.Body>
                                <h6> Lorem Ipsum is simply dummy text of the printing</h6>
                                <p className="py-1  px-0 text-success m-0"><i className="fa  fa-bell"></i>   Date: 22/12/2010 | Status: Read</p>
                            </Card.Body>
                        </Card>

                    </Col>

                    <Col className="p-1" md={6} lg={6} sm={12} xs={12}>

                        <Card onClick={handleShow} className="notification-card">
                            <Card.Body>
                                <h6> Lorem Ipsum is simply dummy text of the printing</h6>
                                <p className="py-1 px-0 text-success m-0"><i className="fa  fa-bell"></i>   Date: 22/12/2010 | Status: Read</p>
                            </Card.Body>
                        </Card>

                    </Col>

                </Row>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <h6>
                        <i className="fa fa-bell"></i> Date: 22/12/2010
                    </h6>
                </Modal.Header>
                <Modal.Body>
                    <h6>Lorem ipsum dolor sit amet.</h6>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus nemo facilis atque autem, asperiores reprehenderit molestias porro eius sit, excepturi beatae! Tempore eaque ab quos soluta amet veniam nobis fugiat?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Notification;
