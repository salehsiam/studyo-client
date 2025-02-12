import Banner from "./Banner";
import Faq from "./Faq";
import Features from "./Features";
import NewReleases from "./NewRelease";
import Newsletter from "./NewsLetter";

const Home = () => {
  return (
    <div className="space-y-16">
      <Banner></Banner>
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        <Features></Features>
        <NewReleases></NewReleases>
        <Faq></Faq>
        <Newsletter></Newsletter>
      </div>
    </div>
  );
};

export default Home;
