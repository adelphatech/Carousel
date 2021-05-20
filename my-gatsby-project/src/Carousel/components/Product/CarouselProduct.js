import React, { Component } from "react"
import Slider from "react-slick"
import { Link } from "gatsby"
function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
      role = "button" 
      tabIndex={0}
      onKeyDown={onClick}
      >
      <span>prev</span>
    </div>
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
      role = "button" 
      tabIndex={0}
      onKeyDown={onClick}
    >
      <span>next</span>
    </div>
  )
}
export default class CarouselProduct extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <div>
        <Slider {...settings}>
          <Link to="/">
            <img alt="img-scrol" src="/img/Service1.png" />
            <p className="location">
              hello
              <br />
            </p>
          </Link>
          <Link to="/">
            <img alt="img-scrol" src="/img/Service3.png" />
            <p className="location">
              hello
              <br />
            </p>
          </Link>
          <Link to="/">
            <img alt="img-scrol" src="/img/Service2.png" />
            <p className="location">
              hello
              <br />
            </p>
          </Link>
          <Link to="/">
            <img alt="img-scrol" src="/img/Service3.png" />
            <p className="location">
              hello
              <br />
            </p>
          </Link>
          <Link to="/">
            <img alt="img-scrol" src="/img/Service3.png" />
            <p className="location">
              hello
              <br />
            </p>
          </Link>
          <Link to="/">
            <img alt="img-scrol" src="/img/Service3.png" />
            <p className="location">
              hello
              <br />
            </p>
          </Link>
        </Slider>
      </div>
    )
  }
}
