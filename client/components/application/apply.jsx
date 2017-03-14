import React from 'react';
import Button from 'components/button/button';
import Link from 'components/link/link';
import OfferNotFound from 'components/offer/notFound';
import MarkdownBox from 'components/advert/markdownBox';
import mocks from 'mocks/shorts';

const getMockById = id => mocks.find(elem => elem.id === id);

function Apply({ params }) {
    const { id } = params;
    const data = getMockById(id);

    if (!data) {
        return <OfferNotFound />;
    }

    return (
      <div className="advert">
        <h2 className="title">Application</h2>
        <h3>Cover letter</h3>
        <section>
          <MarkdownBox />
        </section>
        <h3>CV</h3>
        <section>
          <div className="radio">
            <label> CV #1 </label>
            <input type="radio" value="option1" checked />
          </div>
          <div className="radio">
            <label> CV #2 </label>
            <input type="radio" value="option2" />
          </div>
          <div className="radio">
            <label> CV #3 </label>
            <input type="radio" value="option3" />
          </div>
        </section>
        <Link href={`jobs/${id}/status`}>
          <Button>Confirm</Button>
        </Link>
      </div>
    );
}


Apply.propTypes = {
    params: React.PropTypes.object.isRequired,
};

export default Apply;
