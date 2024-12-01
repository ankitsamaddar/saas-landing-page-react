import Header from './sections/header.jsx';
import Hero from './sections/hero.jsx';
import Features from './sections/features.jsx';
import Pricing from './sections/pricing.jsx';
import Faq from './sections/faq.jsx';
import Testimonials from './sections/testimonials.jsx';

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
    </main>
  );
};
export default App;
