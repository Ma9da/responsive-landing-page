import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Popular from "./components/popular/Popular";
import Review from "./components/review/Review";
import Tour from "./components/tour/Tour";

function App() {
  const hero = {
    title: "OUTDOORS"
  }
  const tour = {
    title: "EXCITING TOURS FOR ADVENTUROUS PEOPLE"
  }
  const popular = {
    title: "MOST POPULAR TOUR"
  }
  const review = {
    title: "WE MAKE PEOPLE GENUINELY HAPPY"
  }
  const contact = {
    title: "START BOOKING NOW"
  }
  return (
    <>
      <Navbar />
      <Hero hero={hero} />
      <Tour tour={tour} />
      <Features />
      <Popular popular={popular} />
      <Review review={review} />
      <Contact contact={contact} />
      <Footer />
    </>
  );
}

export default App;
