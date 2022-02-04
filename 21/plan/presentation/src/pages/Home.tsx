import Dialoguer from "../components/Dialoguer/Dialoguer";
import WebBoy from "../components/WebBoy/WebBoy";

const Home = () => {
  return (
    <section className="full-size-wrapper">
      <div className="content-wrapper">
        <div className="main">
          <WebBoy />
          <Dialoguer />
        </div>
      </div>
    </section>
  );
};

export default Home;
