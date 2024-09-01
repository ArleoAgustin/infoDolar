import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import style from './Carousel.module.css';

import CardDolar from "../card/card-dolar/CardDolar";

interface DatesDolarProps {
  nombre: string;
  compra: number;
  venta: number;
}

interface DataProps {
  data: DatesDolarProps[];
}

function Carousel({ data }: DataProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,                // Autoplay enabled
    autoplaySpeed: 2500,           // 3000ms = 3 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={style.carouselContainer}>
      <Slider className={style.slickslide} {...settings}>
        {data.map((dolar, index) => (
          <CardDolar key={index} data={dolar} loading={false} error={null} />
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
