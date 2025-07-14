import "../../assets/scss/home.scss";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div>
      {/* main-heading */}
      <div className="main-heading">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Muhammad Idrees Portfolio</h1>
              <p>LOS ANGELES,CA.</p>

              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  "We produce food for Mice",
                  1000,
                  "We produce food for Hamsters",
                  1000,
                  "We produce food for Guinea Pigs",
                  1000,
                  "We produce food for Chinchillas",
                  1000,
                ]}
                speed={50}
                style={{ fontSize: "2em" }}
                repeat={Infinity}
              />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
