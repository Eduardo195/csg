/* eslint no-confusing-arrow: 0 */
import React from 'react';
import UserHome from 'components/user/home';
import EmployerHome from 'components/employer/containers/home';

const Home = props => props.isEmployer ? (
  <EmployerHome />
  ) : (
    <UserHome />
);

Home.propTypes = {
  isEmployer: React.PropTypes.bool.isRequired,
};

export default Home;
