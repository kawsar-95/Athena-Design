import React from 'react';
import './Showcase.css';
import showcaseImg from '../../../Images/16 [Converted]@2x.png';

const Showcase = () => {
  return (
    <div className="Showcase">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 showcaseDescription">
            <h1 className="showcaseTitle mb-3">MAN Trade International</h1>
            <p className="mb-4 text-muted">
              MAN Trade International is a dynamic and globally-oriented business agency that excels in facilitating international trade partnerships. Specializing in connecting businesses across borders, MAN Trade International serves as a strategic intermediary, fostering collaboration between suppliers, manufacturers, and distributors worldwide. The agency boasts a comprehensive understanding of international markets, trade regulations, and cultural nuances, enabling it to navigate the complexities of cross-border transactions with ease. With a focus on diverse industries, MAN Trade International offers a range of services, including market research, supply chain management, and logistical support. By leveraging its extensive network and expertise, the agency plays a crucial role in optimizing trade processes, reducing barriers, and enhancing overall efficiency for its clients. In an era where global business connections are paramount, MAN Trade International stands out as a trusted partner, facilitating seamless international trade and contributing to the growth and success of businesses on a global scale.
            </p>
            <button className="pricingBtn contactBtn">See Pricing</button>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <img className="showcaseImg" src={showcaseImg} alt="showcaseImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;