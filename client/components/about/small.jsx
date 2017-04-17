import React from 'react';
import CompanyImg from 'assets/images/company.png';
import CandidateImg from 'assets/images/people.png';

const AboutSmall = () => (
  <div className="about small">
    <h3 className="bold">
      Welcome to Oportunarium!
    </h3>
    <p className="intro">
      Lorizzle ipsum dolizzle sit dope, consectetuer adipiscing yippiyo.
      Fo shizzle sapizzle velizzle, break it down volutpizzle,
      suscipit quis, yo mamma for sure, bling bling.
      Pellentesque eget tortor. Sizzle erizzle.
      Gizzle at dolor dapibizzle check it out tempizzle shit.
      Boofron the bizzle nibh tellivizzle turpizzle.
      Brizzle in tortizzle.
      Pellentesque eleifend rhoncizzle izzle.
      In brizzle break yo neck, yall platea dictumst.
    </p>
    <div>
      <section className="d-inb text-center d-inb">
        <h3>20+ registered candidates</h3>
        <div>
          <img src={CandidateImg} alt="Candidates" />
        </div>
        <div />
      </section>
      <section className="d-inb text-center d-inb">
        <h3>3 registered companies</h3>
        <div>
          <img src={CompanyImg} alt="Company" />
        </div>
        <div />
      </section>
    </div>
    <button className="btn btn--main text-uppercase bold">
      create account
    </button>
  </div>
);

export default AboutSmall;
