import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Editor from './components/Editor';
import Features from './components/Features';
import Footer from './components/Footer';

function Particles() {
  return (
    <div className="particles">
      {Array.from({ length: 10 }).map((_, i) => (
        <span key={i} />
      ))}
    </div>
  );
}

export default function App() {
  return (
    <>
      {/* Animated background layers */}
      <div className="bg-gradient-animated" />
      <Particles />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Editor />
        <Features />
        <Footer />
      </div>
    </>
  );
}
