import Features from "./components/features/Features";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Popular from "./components/popular/Popular";
import Review from "./components/review/Review";
import Tour from "./components/tour/Tour";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Tour />
      <Features />
      <Popular/>
      <Review/>
    </>
  );
}

export default App;
