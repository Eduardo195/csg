import React from 'react';
import Link from 'components/link/link';
import Button from 'components/button/button';
import SideImageLayout from 'components/layouts/sideImageLayout';
import ArticleShort from 'components/articles/articleShort';
import articleMock from '../../mocks/articleMocks';

function EmployerHome() {
    return (
      <SideImageLayout anchorClassName="profile flex flex--col">
        <section className="centered spaced">
          <Link href="employer/post">
            <Button className="btn--alt btn--massive">Create Opportunity</Button>
          </Link>
        </section>
        <section className="anchor flex flex--col flex--center">
          <div className="flex flex--center">
            <div>
              <h2>Tips</h2>
              <div className="flex flex--col flex--center">
                {
                                articleMock.map(entry => (
                                  <ArticleShort content={entry} />
                                ))
                            }
              </div>
            </div>
            <div>
              <h2>Templates</h2>
              <div className="flex flex--col flex--center">
                {
                                articleMock.map(entry => (
                                  <ArticleShort content={entry} />
                                ))
                            }
              </div>
            </div>
          </div>
        </section>
      </SideImageLayout>
    );
}

export default EmployerHome;
