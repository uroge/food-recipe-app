import React from 'react';

import './AboutUs.scss';
import image from '../../assets/about-us.jpg';

const AboutUs = React.forwardRef((props, ref) => {
    return (
        <div className="about-us">
        <h1 ref={ref} className="about-us__heading">About Us</h1>
            <div className="about-us__content">
                <div className="about-us__text">
                   <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Adipisci maxime facilis corrupti, perferendis 
                        quis dicta, nobis fugiat cupiditate libero 
                        distinctio numquam quod voluptatibus accusantium 
                        facere quos asperiores. Officiis explicabo dolorem 
                        quae, laborum, adipisci excepturi ipsa fuga accusamus 
                        perferendis ut et amet iste assumenda tenetur. Repellendus 
                        aperiam iusto magnam ad similique, sequi enim corrupti soluta
                        aspernatur recusandae fugit obcaecati? Voluptates necessitatibus 
                        nesciunt minus itaque officia ratione omnis possimus nobis 
                        exercitationem, perspiciatis repellendus commodi tenetur molestiae. 
                        Exercitationem.
                   </p>
                </div>
                <div className="about-us__image" style={{backgroundImage: `url(${image})`}}>
                </div>
            </div>
        </div>
    );
});

export default AboutUs;