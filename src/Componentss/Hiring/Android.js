import React from 'react';
import './hiring.css';  // CSS for the hiring section

function Android() {
  const cardData = [
    {
      title: "There are three responses to a piece of design - yes, no, and WOW!",
      link: "#"
    },{
      title: "There are three responses to a piece of design - yes, no, and WOW!",
      link: "#"
    },
    {
      title: "There are three responses to a piece of design - yes, no, and WOW!",
      link: "#"
    },
    {
      title: "It is the long history of humankind that those who learned to collaborate and improvise most effectively have prevailed",
      link: "#"
    },
    {
      title: "There are three responses to a piece of design - yes, no, and WOW!",
      link: "#"
    },
    {
      title: "I strive for two things in design: simplicity and clarity. Great design is born of those two things",
      link: "#"
    },
    {
      title: "It is the long history of humankind that those who learned to collaborate and improvise most effectively have prevailed",
      link: "#"
    },
    {
      title: "There are three responses to a piece of design - yes, no, and WOW!",
      link: "#"
    }
  ];

  return (
    <>
      <div className="feat bg-gray pt-5 pb-5">
        <div className="container text-light">
          <div className="row">
            <div className="section-head col-sm-12 text-center">
              <h1><span>We Are</span> Hiring</h1>
              <p className='mt-4' style={{fontSize:"15px"}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s.
              </p>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="item1">
                <span className="icon feature_box_col_1">
                  <img src="https://www.jploft.com/img/focused-team.svg" alt="Focused Team" />
                </span>
                <h3>Focused Team</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="item1">
                <span className="icon feature_box_col_2">
                  <img src="https://www.jploft.com/img/cost-effective.svg" alt="Cost Efficient" />
                </span>
                <h3>Cost Efficient</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="item1">
                <span className="icon feature_box_col_3">
                  <img src="https://www.jploft.com/img/work-force.svg" alt="Dedicated Workforce" />
                </span>
                <h3>Dedicated Workforce</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="item1">
                <span className="icon feature_box_col_4">
                  <img src="https://www.jploft.com/img/privacy-security.svg" alt="Customized Solutions" />
                </span>
                <h3>Customized Solutions</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="item1">
                <span className="icon feature_box_col_5">
                  <img src="https://www.jploft.com/img/enterprices-solutions.svg" alt="Flexibility" />
                </span>
                <h3>Flexibility</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="item1">
                <span className="icon feature_box_col_6">
                  <img src="https://www.jploft.com/img/enterprices-solutions.svg" alt="Privacy & Security" />
                </span>
                <h3>Privacy & Security</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div>
        <h1 className='text-center text-light' style={{marginTop:"100px"}}>Why Should You Join Us</h1>
        <p className='text-center text-light mt-4' style={{fontSize:"15px"}} >At JPLoft, you will find everything at a place needed to grow as a seasoned professional. From your skills, knowledge, experience to creativity, communication, work ethics & more.</p>
      <div className="container cards text-light mx-auto">
    
        {cardData.map((card, index) => (
          <a key={index} className="cards__item" href={card.link}>
            <h3 className="cards__title">{card.title}</h3>
          </a>
        ))}
      </div>
      </div>
    </>
  );
}

export default Android;
