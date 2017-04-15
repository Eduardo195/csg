import React from 'react';
import LocationFilter from 'components/filters/containers/locationFilter';
import ContractTypeFilter from 'components/filters/containers/contractTypeFilter';
import KeywordFilter from 'components/filters/containers/keywordFilter';
import KeywordList from 'components/filters/containers/keywordList';
import AgeFilter from 'components/filters/containers/ageFilter';

function Filters() {
  return (
    <div className="filters">
      <h3 className="mainTitle">filter results by:</h3>
      <div>
        <h3>Keywords</h3>
        <KeywordFilter id="keywords" />
        <KeywordList />
      </div>
      <div>
        <h3>Contract Type</h3>
        <ContractTypeFilter />
      </div>
      <div>
        <h3>Post age</h3>
        <AgeFilter id="ageFilterDD" />
      </div>
      <div>
        <h3>Location</h3>
        <LocationFilter />
      </div>
    </div>
  );
}

export default Filters;
