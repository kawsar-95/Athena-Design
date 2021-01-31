import React from 'react';
import './Showcase.css';
import showcaseImg from '../../../Images/16 [Converted]@2x.png'; 

const Showcase = () => {
    return (
        <div className="Showcase">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 showcaseDescription">
                        <h1 className="showcaseTitle mb-3">Florence agency</h1>
                        <p className="mb-4 text-muted">Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </p>
                        <button className="pricingBtn contactBtn">See Pricing</button>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <img className="showcaseImg" src={showcaseImg} alt="showcaseImg"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Showcase;