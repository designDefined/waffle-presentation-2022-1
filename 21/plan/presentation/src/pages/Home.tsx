import Dialoguer from "../components/Dialoguer/Dialoguer";
import WebBoy from "../components/WebBoy/WebBoy";
import PathFinder from "../components/PathFinder/PathFinder";

const Home = () => {
  return (
    <section className="full-size-wrapper">
      <div className="content-wrapper">
        <div className="main">
          <WebBoy />
          <div className="dialogue-wrapper">
            <Dialoguer />
            <PathFinder />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
