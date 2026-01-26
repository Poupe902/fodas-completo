import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import CheckoutView from './components/CheckoutView';

const App: React.FC = () => {
  const [showCheckout, setShowCheckout] = useState(false);

  // PageView inicial (Landing Page)
  useEffect(() => {
    if (window.utmifyPixel) {
      window.utmifyPixel('PageView');
      window.utmifyPixel('ViewContent');
    }
  }, []);

  // Quando vai para o checkout
  useEffect(() => {
    if (showCheckout) {
      window.scrollTo(0, 0);

      if (window.utmifyPixel) {
        window.utmifyPixel('InitiateCheckout');
      }
    }
  }, [showCheckout]);

  if (showCheckout) {
    return <CheckoutView />;
  }

  return (
    <LandingPage
      onProceedToCheckout={() => {
        // garante o evento ANTES de trocar a tela
        if (window.utmifyPixel) {
          window.utmifyPixel('InitiateCheckout');
        }
        setShowCheckout(true);
      }}
    />
  );
};

export default App;
