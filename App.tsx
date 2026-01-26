import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import CheckoutView from './components/CheckoutView';

const App: React.FC = () => {
  const [showCheckout, setShowCheckout] = useState(false);
  

  React.useEffect(() => {
    if (showCheckout) {
      window.scrollTo(0, 0);
    }
  }, [showCheckout]);

  if (showCheckout) {
    return <CheckoutView />;
  }

  return <LandingPage onProceedToCheckout={() => setShowCheckout(true)} />;
};

export default App;
