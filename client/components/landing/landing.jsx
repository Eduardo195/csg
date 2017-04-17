import React from 'react';
import MainSearch from 'components/search/containers/mainSearch';
import Latest from 'components/latest/containers/latest';
import SmallAbout from 'components/about/small';

const Home = () => (
  <div className="p-0">
    <div> <MainSearch /> </div>
    <SmallAbout />
    <div className="p-10"> <Latest /> </div>
  </div>
);

export default Home;
