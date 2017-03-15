import React from 'react';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';
import Dialog from 'components/dialog/containers/dialog';

function App({ children }) {
  return (
    <div className="root d-flex flex-column">
      <Header />
      <main className="flex-column d-flex flex-grow align-items-stretch">
        { children }
      </main>
      <Dialog />
      <Footer />
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default App;
