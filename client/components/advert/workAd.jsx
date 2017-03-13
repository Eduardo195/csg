import React from 'react';
import Button from 'components/button/button';
import TextAutocomplete from 'components/input/textAutocomplete';
import MarkdownBox from './markdownBox';

const titles = ['Cook for NWO'];
const contractTypes = ['Contract', 'Part-time', 'Full-time'];
const roles = ['Cook', 'Designer', 'Developer'];
const employers = ['NWO', 'NHS'];
const locations = ['UK', 'International'];

const min = ['20k'];
const max = ['100k'];
const period = ['Hour', 'Day', 'Week', 'Year'];
const experience = ['Experience', 'Qualifications'];

class WorkAd extends React.Component {
    constructor() {
        super();
        this.state = { tab: 0 };
    }

    render() {
        const {
            workAd,
            setTitle,
            setLocation,
            setRole,
            setEmployer,
            setContractType,
            setMinPay,
            setMaxPay,
            setPayRange,
            setPayCriteria,
            // setWriteUp,
        } = this.props;
        const { title, contractType, role, location, employer,
            minPay, maxPay, periodValue, experienceValue } = workAd;
        return (
          <section className="advert">
            <h1 className="title">Advertise a vacancy</h1>
            <div className="content">
              <h3>Overview</h3>
              <TextAutocomplete id="title" placeholder="Title" value={title} datalist={titles} handleChange={setTitle} className="big" />
              <TextAutocomplete id="contractType" placeholder="Contract type" value={contractType} datalist={contractTypes} handleChange={setContractType} className="small" />
              <TextAutocomplete id="role" placeholder="Role" value={role} datalist={roles} handleChange={setRole} className="small" />
              <TextAutocomplete id="employer" placeholder="Employer" labelText="for " value={employer} datalist={employers} handleChange={setEmployer} className="small" />
              <TextAutocomplete id="locations" placeholder="Location" labelText="in " value={location} datalist={locations} handleChange={setLocation} className="small" />
              <div>
                <h3>Details</h3>
                <TextAutocomplete
                  id="minPay" placeholder="Minimum Pay"
                  value={minPay} datalist={min} handleChange={setMinPay} className="small"
                />
                <TextAutocomplete
                  id="maxPay" placeholder="Maximum Pay" labelText="to "
                  value={maxPay} datalist={max} handleChange={setMaxPay} className="small"
                />
                <TextAutocomplete
                  id="period" placeholder="Time range" labelText="per "
                  value={periodValue} datalist={period} handleChange={setPayRange} className="small"
                />
                <TextAutocomplete
                  id="criteria" placeholder="Criteria" labelText="depending on "
                  value={experienceValue} datalist={experience} handleChange={setPayCriteria} className="small"
                />
              </div>
              <h3>Write up</h3>

              <MarkdownBox />
              <div>
                <Button>Post</Button>
              </div>
            </div>
          </section>
        );
    }
}

WorkAd.propTypes = {
    workAd: React.PropTypes.object.isRequired,
    setTitle: React.PropTypes.func.isRequired,
    setRole: React.PropTypes.func.isRequired,
    setLocation: React.PropTypes.func.isRequired,
    setEmployer: React.PropTypes.func.isRequired,
    setContractType: React.PropTypes.func.isRequired,
    setMinPay: React.PropTypes.func.isRequired,
    setMaxPay: React.PropTypes.func.isRequired,
    setPayRange: React.PropTypes.func.isRequired,
    setPayCriteria: React.PropTypes.func.isRequired,
    // setWriteUp: React.PropTypes.func.isRequired,
};

export default WorkAd;
