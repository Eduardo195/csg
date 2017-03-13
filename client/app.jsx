import React from 'react';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';
import Dialog from 'components/dialog/containers/dialog';

function App({ router, children }) {
    return (
        <div className="root">
            <Header router={router} />
            <main>
                { children }
            </main>
            <Dialog />
            <Footer />
        </div>
    );
}

App.propTypes = {
    children: React.PropTypes.element.isRequired,
    router: React.PropTypes.object.isRequired,
};

export default App;
