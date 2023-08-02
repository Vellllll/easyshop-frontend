import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Favourite(){
    return (
        <Container className="text-center pt-3" fluid={true}>
            <div className="section-title text-center mb-55">
                <h2>My Favourite Items</h2>
                <p>Some of our exclusive collection.</p>
            </div>
            <Row>
                <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                    <Card className="image-box card w-100">
                        <img className="center w-75" src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/450179/item/idgoods_09_450179.jpg?width=320" alt="" />
                        <Card.Body>
                            <p className="product-name-on-card">Koleksi Atasan</p>
                            <p className="product-price-on-card">Harga: Rp199.000</p>
                            <Button className="btn btn-sm btn-danger">
                                <i className="fa fa-trash-alt"></i> Remove
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                    <Card className="image-box card w-100">
                        <img className="center w-75" src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/459616/item/idgoods_62_459616.jpg?width=320" alt="" />
                        <Card.Body>
                            <p className="product-name-on-card">Koleksi Luaran</p>
                            <p className="product-price-on-card">Harga: Rp199.000</p>
                            <Button className="btn btn-sm btn-danger">
                                <i className="fa fa-trash-alt"></i> Remove
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                    <Card className="image-box card w-100">
                        <img className="center w-75" src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/452112/item/idgoods_56_452112.jpg?width=320" alt="" />
                        <Card.Body>
                            <p className="product-name-on-card">Koleksi Bawahan</p>
                            <p className="product-price-on-card">Harga: Rp199.000</p>
                            <Button className="btn btn-sm btn-danger">
                                <i className="fa fa-trash-alt"></i> Remove
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                    <Card className="image-box card w-100">
                        <img className="center w-75" src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/455412/item/idgoods_58_455412.jpg?width=320" alt="" />
                        <Card.Body>
                            <p className="product-name-on-card">Koleksi Sweat</p>
                            <p className="product-price-on-card">Harga: Rp199.000</p>
                            <Button className="btn btn-sm btn-danger">
                                <i className="fa fa-trash-alt"></i> Remove
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Favourite;
