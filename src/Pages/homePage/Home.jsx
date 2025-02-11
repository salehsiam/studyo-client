import Banner from "./Banner";
import Faq from "./Faq";
import Features from "./Features";

const Home = () => {
  return (
    <div className="space-y-16">
      <Banner></Banner>
      <Features></Features>
      <Faq></Faq>
    </div>
  );
};

export default Home;
