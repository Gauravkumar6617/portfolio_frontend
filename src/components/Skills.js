import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>My Skills</h2>
              <p>
                I'm Gaurav Kumar, a passionate full-stack app developer with around 8 months of hands-on experience.
                I enjoy building real-world apps using modern technologies like React Native, Node.js, and MongoDB.
                I'm also learning Salesforce to broaden my capabilities in enterprise applications.
              </p>
              <Carousel 
                responsive={responsive} 
                infinite={true} 
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Skill Level" />
                  <h5>React Native</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Skill Level" />
                  <h5>Express.js & Node.js</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Skill Level" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Skill Level" />
                  <h5>Salesforce (Beginner)</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Skill Level" />
                  <h5>REST APIs & JWT</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
