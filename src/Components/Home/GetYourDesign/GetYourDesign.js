import React from 'react';
import './GetYourDesign.css';

const GetYourDesign = () => {
    return (
        <div className="section getYourDesign-sec">
            <div className="getYourDesign">
                <div className="row">
                    <div className="col-md-6 col-sm-12 ml-auto mr-auto">
                        <h1 className="text-center">Get Your Design, right now</h1>
                        <p className="text-secondary text-center mt-4">Be the first know our latest offers and updates!</p>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-6 col-sm-12 ml-auto mr-auto">
                        <div className="inputWrapper">
                            <input type="email" name="email" className="mailInput" placeholder="Enter email"/>
                            <button className="mailBtn">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetYourDesign;