/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import '../assets/styles/Card.css'; // Ensure you import the CSS file
import ChartImage from '../assets/images/chartt.webp';
import verificationImage from '..//assets/images/verification_iwnfmj.webp';
import hide_chat_egk7h4Image from '..//assets/images/hide_chat_egk7h4.webp'; 
function Card() {
  return (
    <section className="grid md:grid-cols-3 gap-6 max-md:max-w-xs mx-auto">
      {/* Card 1 */}
      <div className="card group">
        <div className="card-content">
          <div className="badge">Stastic</div>
          <span className="card-title">Subscriber Reports</span>
          <span className="card-title-hover">Subscriber Highlights</span>
          <p className="card-description">
            Building truly great products is both art and science. It's part intuition and part data.
          </p>
        </div>
        <div className="card-images">
          <img
            className="card-image card-image-main"
            src={ChartImage}
            alt="Card image 01"
            width={350}
            height={240}
          />
          <img
            className="card-image card-image-hover"
            src={verificationImage}
            alt="Card image 01 displaying on hover"
            width={350}
            height={240}
          />
        </div>
      </div>

      {/* Card 2 */}
      <div className="card group">
        <div className="card-content">
          <div className="badge badge-green">Password</div>
          <span className="card-title">Don't Show Your Password</span>
          <span className="card-title-hover">Hide Your Password</span>
          <p className="card-description">
            If you don't hide your password, we can see it and enter your account.
          </p>
        </div>
        <div className="card-images">
          <img
            className="card-image card-image-main"
            src={hide_chat_egk7h4Image}
            alt="Card image 01"
            width={350}
            height={240}
          />
          <img
            className="card-image card-image-hover"
            src={ChartImage}
            alt="Card image 01 displaying on hover"
            width={350}
            height={240}
          />
        </div>
      </div>

      {/* Card 3 */}
      <div className="card group">
        <div className="card-content">
          <div className="badge badge-blue">Alert</div>
          <span className="card-title">Chatting Seamlessly</span>
          <span className="card-title-hover">Don't Hide Chat</span>
          <p className="card-description">
            Building truly great products is both art and science. It's part intuition and part data.
          </p>
        </div>
        <div className="card-images">
          <img
            className="card-image card-image-main"
            src={ChartImage}
            alt="Card image 01"
            width={350}
            height={240}
          />
          <img
            className="card-image card-image-hover"
            src={ChartImage}
            alt="Card image 01 displaying on hover"
            width={350}
            height={240}
          />
        </div>
      </div>
    </section>
  );
}

export default Card;
