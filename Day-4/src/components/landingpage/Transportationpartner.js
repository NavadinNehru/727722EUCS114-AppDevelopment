import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Transportationpartner.css';

const TransportationPartners = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const partners = [
        {  image: '/images/img1.png' },
        {  image: '/images/img2.jpg' },
        { image: '/images/img3.jpg' },
        {  image: '/images/img4.png' },
        {  image: '/images/img5.png' },
        {  image: '/images/img6.jpg' },
        {  image: '/images/img7.jpg' }
    ];

    return (
        <div className="transportation-partners-container">
            <h2>Our Transportation Partners</h2>
            <Slider {...settings}>
                {partners.map((partner, index) => (
                    <div key={index} className="partner-card">
                        <img src={partner.image} alt={partner.name} />
                        <h3>{partner.name}</h3>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TransportationPartners;
