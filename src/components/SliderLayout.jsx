import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

export default function SliderLayout({children}) {
    return (
        <div className="slider">
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    )
}

// Komponen untuk tombol panah selanjutnya
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        type="button"
        className={className}
        style={{ ...style, display: "block", right: "0"}}
        onClick={onClick}
      >
        <i className="fas fa-angle-right"></i>
      </button>
    );
  }
  
  // Komponen untuk tombol panah sebelumnya
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        type="button"
        className={className}
        style={{ ...style, display: "block", left: "0"}}
        onClick={onClick}
      >
        <i className="fas fa-angle-left"></i>
      </button>
    );
  }


