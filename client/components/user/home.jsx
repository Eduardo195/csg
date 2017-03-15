import React from 'react';
import Button from 'components/button/button';
import SideImageLayout from 'components/layouts/sideImageLayout';
import ArticleShort from 'components/articles/articleShort';
import articleMock from '../../mocks/articleMocks';

function getArticles(onlyEven) {
  return articleMock.map((entry, index) => {
    if ((index % 2 === 0 && onlyEven) || (index % 2 !== 0 && !onlyEven)) {
      return (<ArticleShort content={entry} />);
    }
    return null;
  });
}

function Home(props) {
  const { username } = props;
  return (
    <div className="profile">
      <SideImageLayout>
        <h2 className="title">Welcome { username }</h2>
        <h3>Customize your applications</h3>
        <section>
          <Button>Create cover letter</Button>
        </section>
        <h3>Get discovered</h3>
        <section>
          <Button>Upload your CV</Button>
        </section>
      </SideImageLayout>
      <section className="anchor flex flex--col flex--center">
        <h1 className="title">Great resources to help you stand out</h1>
        <div className="flex flex--center">
          <div>
            <div className="flex flex--col flex--center">
              { getArticles(true) }
            </div>
          </div>
          <div>
            <div className="flex flex--col flex--center">
              { getArticles() }

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Home.propTypes = {
  username: React.PropTypes.string.isRequired,
};

export default Home;
