import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../assets/goodmoodfood.jpg';
import image2 from '../assets/f453a71f60a83625a7ea306b_rw_1920.jpg';
// import image3 from '../assets/healthy-eating-final-web-cy7adj.jpg'
import image4 from '../assets/dietiamges.jpg';

class HomePage extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return <div className="background-color">
            <Carousel className="img-slide">
                <Carousel.Item className="image1">
                    <img
                        className="d-block w-100 mx-auto" fluid
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="image2">
                    <img
                        className="d-block w-100 mx-auto" fluid
                        src={image2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item className="image3">
                    <img 
                        className="d-block w-100 mx-auto" fluid 
                        src={image4}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    }

}

export default HomePage