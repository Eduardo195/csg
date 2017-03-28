/* eslint no-confusing-arrow: 0 */
import React from 'react';
import CandidateHome from 'components/candidate/containers/home';
import EmployerHome from 'components/employer/containers/home';

const Home = props => props.isEmployer ? (<EmployerHome />) : (<CandidateHome />);

Home.propTypes = {
  isEmployer: React.PropTypes.bool.isRequired,
};

export default Home;
