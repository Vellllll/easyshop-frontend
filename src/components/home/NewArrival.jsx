import { Container, Row, Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NewArrival(){

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplay: 300,
        arrows: false,
    };

    return (
        <Container className="text-center" fluid={true}>
            <div className="text-center section-title mb-55">
                <h2>New Arrival</h2>

                &nbsp;
                <p>Some of exclusice new arrivals.</p>
            </div>
            <Row>
                <div>
                    <Slider {...settings}>
                    <div>
                        <Card className="image-box card">
                            <img className="center" src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/455403/item/idgoods_63_455403.jpg?width=320" alt="" />
                            <Card.Body>
                                <p className="product-name-on-card">T-Shirt SUPIMA Katun Merah Bulat Lengan Pendek</p>
                                <p className="product-price-on-card">Harga: Rp199.000</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="image-box card">
                            <img className="center" src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/433037/item/idgoods_52_433037.jpg?width=320" alt="" />
                            <Card.Body>
                                <p className="product-name-on-card">T-Shirt SUPIMA Katun Merah Bulat Lengan Pendek</p>
                                <p className="product-price-on-card">Harga: Rp199.000</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="image-box card">
                            <img className="center" src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/427916/item/idgoods_12_427916.jpg?width=320" alt="" />
                            <Card.Body>
                                <p className="product-name-on-card">T-Shirt SUPIMA Katun Merah Bulat Lengan Pendek</p>
                                <p className="product-price-on-card">Harga: Rp199.000</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="image-box card">
                            <img className="center" src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/461914/item/idgoods_32_461914.jpg?width=320" alt="" />
                            <Card.Body>
                                <p className="product-name-on-card">T-Shirt SUPIMA Katun Merah Bulat Lengan Pendek</p>
                                <p className="product-price-on-card">Harga: Rp199.000</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="image-box card">
                            <img className="center" src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/455360/item/idgoods_64_455360.jpg?width=320" alt="" />
                            <Card.Body>
                                <p className="product-name-on-card">T-Shirt SUPIMA Katun Merah Bulat Lengan Pendek</p>
                                <p className="product-price-on-card">Harga: Rp199.000</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="image-box card">
                            <img className="center" src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/457905/item/idgoods_69_457905.jpg?width=320" alt="" />
                            <Card.Body>
                                <p className="product-name-on-card">T-Shirt SUPIMA Katun Merah Bulat Lengan Pendek</p>
                                <p className="product-price-on-card">Harga: Rp199.000</p>
                            </Card.Body>
                        </Card>
                    </div>
                    </Slider>
                </div>
            </Row>
        </Container>
    )
}

export default NewArrival;
