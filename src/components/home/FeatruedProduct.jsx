import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductDetailsPage from "../../pages/ProductDetailsPage";

function FeaturedProduct(){
    return (
        <Container className="text-center" fluid={true}>
            <div className="section-title text-center mb-55">
                <h2>Featured Products</h2>
                <p>Some of our exclusive collections.</p>
            </div>
            <Row>
                <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                    <Link to="/productdetails">
                        <Card className="image-box card">
                            <img className="center" src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/455365/item/idgoods_07_455365.jpg?width=320" alt="" />
                            <Card.Body>
                                <p className="product-name-on-card">T-Shirt SUPIMA Katun Merah Bulat Lengan Pendek</p>
                                <p className="product-price-on-card">Harga: Rp199.000</p>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col className="p-1" key={1}  xl={2} lg={2} md={2} sm={4} xs={6}>
                    <Card className="image-box card">
                        <img className="center" src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/455357/item/idgoods_42_455357.jpg?width=320" alt="" />
                        <Card.Body>
                            <p className="product-name-on-card">T-Shirt SUPIMA Katun Merah Bulat Lengan Pendek</p>
                            <p className="product-price-on-card">Harga: Rp199.000</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="p-1" key={1}  xl={2} lg={2} md={2} sm={4} xs={6}>
                    <Card className="image-box card">
                        <img className="center" src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/427917/item/idgoods_07_427917.jpg?width=320" alt="" />
                        <Card.Body>
                            <p className="product-name-on-card">T-Shirt SUPIMA Katun Merah Bulat Lengan Pendek</p>
                            <p className="product-price-on-card">Harga: Rp199.000</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="p-1" key={1}  xl={2} lg={2} md={2} sm={4} xs={6}>
                    <Card className="image-box card">
                        <img className="center" src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/461914/item/idgoods_32_461914.jpg?width=320" alt="" />
                        <Card.Body>
                            <p className="product-name-on-card">T-Shirt SUPIMA Katun Merah Bulat Lengan Pendek</p>
                            <p className="product-price-on-card">Harga: Rp199.000</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="p-1" key={1}  xl={2} lg={2} md={2} sm={4} xs={6}>
                    <Card className="image-box card">
                        <img className="center" src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/425974/item/idgoods_09_425974.jpg?width=320" alt="" />
                        <Card.Body>
                            <p className="product-name-on-card">T-Shirt SUPIMA Katun Merah Bulat Lengan Pendek</p>
                            <p className="product-price-on-card">Harga: Rp199.000</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="p-1" key={1}  xl={2} lg={2} md={2} sm={4} xs={6}>
                    <Card className="image-box card">
                        <img className="center" src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/457833/item/idgoods_56_457833.jpg?width=320" alt="" />
                        <Card.Body>
                            <p className="product-name-on-card">T-Shirt SUPIMA Katun Merah Bulat Lengan Pendek</p>
                            <p className="product-price-on-card">Harga: Rp199.000</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default FeaturedProduct;
