import React from 'react';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';
import Overlay from 'components/overlay/containers/overlay';
import Dialog from 'components/dialog/containers/dialog';

class App extends React.Component {

  componentDidMount() {
    this.props.onMount();
  }

  render() {
    const { children } = this.props;
    return (
      <div className="root d-flex flex-column">
        <Header />
        <main className="flex-column d-flex flex-grow align-items-stretch">
          { children }
        </main>
        <Dialog />
        <Footer />
        <Overlay />
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
  onMount: React.PropTypes.func.isRequired,
};

export default App;
