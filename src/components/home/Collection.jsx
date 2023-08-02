import { Container, Row, Col, Card } from "react-bootstrap";

function Collection(){
    return (
        <Container className="text-center" fluid={true}>
            <div className="section-title text-center mb-55">
                <h2>Product Collection</h2>
                <p>Some of our exclusive collection.</p>
            </div>
            <Row>
                <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                    <Card className="image-box card w-100">
                        <img className="center w-75" src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/450179/item/idgoods_09_450179.jpg?width=320" alt="" />
                        <Card.Body>
                            <p className="product-name-on-card">Koleksi Atasan</p>
                            <p className="product-price-on-card">Harga: Rp199.000</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                    <Card className="image-box card w-100">
                        <img className="center w-75" src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/459616/item/idgoods_62_459616.jpg?width=320" alt="" />
                        <Card.Body>
                            <p className="product-name-on-card">Koleksi Luaran</p>
                            <p className="product-price-on-card">Harga: Rp199.000</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                    <Card className="image-box card w-100">
                        <img className="center w-75" src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/452112/item/idgoods_56_452112.jpg?width=320" alt="" />
                        <Card.Body>
                            <p className="product-name-on-card">Koleksi Bawahan</p>
                            <p className="product-price-on-card">Harga: Rp199.000</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                    <Card className="image-box card w-100">
                        <img className="center w-75" src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/455412/item/idgoods_58_455412.jpg?width=320" alt="" />
                        <Card.Body>
                            <p className="product-name-on-card">Koleksi Sweat</p>
                            <p className="product-price-on-card">Harga: Rp199.000</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                    <Card className="image-box card w-100">
                        <img className="center w-75" src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/454317/item/idgoods_09_454317.jpg?width=320" alt="" />
                        <Card.Body>
                            <p className="product-name-on-card">Koleksi Dalaman</p>
                            <p className="product-price-on-card">Harga: Rp199.000</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                    <Card className="image-box card w-100">
                        <img className="center w-75" src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/456838/item/idgoods_32_456838.jpg?width=320" alt="" />
                        <Card.Body>
                            <p className="product-name-on-card">Koleksi Loungewear</p>
                            <p className="product-price-on-card">Harga: Rp199.000</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                    <Card className="image-box card w-100">
                        <img className="center w-75" src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462096/item/goods_09_462096.jpg?width=320" alt="" />
                        <Card.Body>
                            <p className="product-name-on-card">Koleksi Aksesoris</p>
                            <p className="product-price-on-card">Harga: Rp199.000</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                    <Card className="image-box card w-100">
                        <img className="center w-75" src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/444967/item/idgoods_05_444967.jpg?width=320" alt="" />
                        <Card.Body>
                            <p className="product-name-on-card">Koleksi Sport</p>
                            <p className="product-price-on-card">Harga: Rp199.000</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Collection;
