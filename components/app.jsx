/* global React, ReactDOM */
const { useState: useStateApp, useEffect: useEffectApp } = React;

function App() {
  const [menuOpen, setMenuOpen] = useStateApp(false);

  // IntersectionObserver for reveal animations
  useEffectApp(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffectApp(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <React.Fragment>
      <AnnouncementBar />
      <Header onOpenMenu={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main>
        <Hero />
        <Ticker />
        <About />
        <BoletoStrip />
        <Services />
        <Differentials />
        <HowItWorks />
        <FAQ />
        <Offices />
        <CTAFinal />
      </main>
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
