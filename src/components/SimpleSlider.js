import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Slide({ sliders }) {
  return (
    <Container>
      {/* <SlideTitle>인기 서비스</SlideTitle> */}
      <StyledSlider {...settings}>
        {sliders.map(({ id, name, image }) => {
          return (
            <CardBox key={id}>
              <CardImg alt="인기 서비스" src={image} />
              {/* <CardText>{name}</CardText> */}
            </CardBox>
          )
        })}
      </StyledSlider>
    </Container>
  )
}

export default Slide;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '0px'
};

const SlideTitle = styled.h2`
  padding: 60px 0px 50px 0px;
  text-align: center;
  font-size: 30px;
  font-weight: bolder;
`;

const Container = styled.div`
  margin-right: 25px;
`;

const StyledSlider = styled(Slider)`
  .slick-list {
    width: 1600px;
    margin: 0 auto;
  }

  .slick-slide div {
    
  }

  .slick-dots {
    bottom: 20px;
    margin-top: 200px;
  }

  .slick-track {

  }
`;

const CardBox = styled.div`
  cursor: pointer;
`;

const CardImg = styled.img`
  // width: 380px;
  width: 1600px;
  height: 550px;
`;

const CardText = styled.p`
  padding: 20px;
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
`;


// export default class SimpleSlider extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     return (
//       <div>
//         <h2> Single Item</h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }
