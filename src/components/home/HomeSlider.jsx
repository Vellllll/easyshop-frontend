import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from "../../assets/images/slider1.jpg";
import Slider2 from "../../assets/images/slider2.jpg";
import Slider3 from "../../assets/images/slider3.jpg";

function HomeSlider(){

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplay: 300,
        arrows: false,
    };

    return (
        <div>
            <Slider {...settings}>
                <div>
                    <img className="slider-img" src="https://im.uniqlo.com/global-cms/spa/resa5f6389cae7b775c228de29646f93da7fr.jpg" alt="{Slider1}" />
                </div>
                <div>
                    <img className="slider-img" src="https://im.uniqlo.com/global-cms/spa/rese36d9e658f66b4e47ba7b930943edd2cfr.jpg" alt="{Slider2}" />
                </div>
                <div>
                    <img className="slider-img" src="https://im.uniqlo.com/global-cms/spa/res91494890632e10e25d3fa0589278c6b8fr.jpg" alt="{Slider3}" />
                </div>
            </Slider>
        </div>

    );
}

export default HomeSlider;
