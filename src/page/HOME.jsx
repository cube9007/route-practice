import { Link } from "react-router-dom";
import { Box, Divider } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";

const home = () => {
    return (
      <>
        <div className="big-div">
          <h1 > RMS HOME </h1>
        </div>
        <Box className="home-box">
          <h2> π StyleGuide </h2>
          <ul>
            <li >
            <Link to="/page/styleguide/Fontcolor" className="home-a">  π FontColor</Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
            <Link to="/page/styleguide/Materialicons" className="home-a"> π Material Icons</Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
            <Link to="/page/Faq" className="home-a"> π Element</Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
            <Link to="/page/Faq" className="home-a"> π Buttons</Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
            <Link to="/page/Faq" className="home-a"> π Form</Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
            <Link to="/page/Faq" className="home-a"> π μμ±(property views)</Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
            <Link to="/page/Faq" className="home-a"> π Layout λ κ³  μ€νμΌ μ°Έκ³ μ¬ν­</Link> <ArrowForward className="box-arrow" />
            </li>
          </ul>
          <Divider style={{ margin: '50px 0 50px 0' }}/>
          <h2> π μ¬μ΄νΈκ΄λ¦¬ </h2>
          <ul>
            <li>
            <Link to="/page/sitemanage/Faq" className="home-a"> π FAQ </Link> <ArrowForward className="box-arrow" />
            </li>
          </ul>
        </Box>
      </>
    );
  };
  
  export default home;
  