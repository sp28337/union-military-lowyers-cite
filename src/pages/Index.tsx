import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
// import Desktop from '@/components/Desktop';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      {/* <Desktop /> */}
      <About />
      <Contact />
      <Footer />
    </div>
  );
}