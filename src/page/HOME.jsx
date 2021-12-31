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
          <h2> 📒 StyleGuide </h2>
          <ul>
            <li >
            <Link to="/page/styleguide/Fontcolor" className="home-a">  🔗 FontColor</Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
            <Link to="/page/styleguide/Materialicons" className="home-a"> 🔗 Material Icons</Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
            <Link to="/page/Faq" className="home-a"> 🔗 Element</Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
            <Link to="/page/Faq" className="home-a"> 🔗 Buttons</Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
            <Link to="/page/Faq" className="home-a"> 🔗 Form</Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
            <Link to="/page/Faq" className="home-a"> 🔗 속성(property views)</Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
            <Link to="/page/Faq" className="home-a"> 🔗 Layout 레고 스타일 참고사항</Link> <ArrowForward className="box-arrow" />
            </li>
          </ul>
          <Divider style={{ margin: '50px 0 50px 0' }}/>
          <h2> 📚 사이트관리 </h2>
          <ul>
            <li>
            <Link to="/page/sitemanage/Faq" className="home-a"> 🔗 FAQ </Link> <ArrowForward className="box-arrow" />
            </li>
          </ul>
        </Box>
      </>
    );
  };
  
  export default home;
  