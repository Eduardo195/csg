import React from 'react';
import Link from 'components/link/link';

const Footer = () => (
  <footer>
    <div className="d-flex justify-content-center flex-wrap text-center">
      <div className="flex-grow align-self-stretch">
        <div>
          <h4>For Opportunity Seekers</h4>
          <div><Link href="#">Find Opportunities</Link></div>
          <div><Link href="#">Upload CV</Link></div>
        </div>
      </div>
      <div className="flex-grow align-self-stretch">
        <div>
          <h4>For Employers</h4>
          <div><Link href="#">Post opportunity</Link></div>
        </div>
      </div>
      <div className="flex-grow align-self-stretch">
        <div>
          <h4>About us</h4>
          <div><Link href="#">Privacy</Link></div>
          <div><Link href="#">Contact</Link></div>
          <div><Link href="#">Terms</Link></div>
          <div><Link href="#">Help</Link></div>
          <div><Link href="#">Site Map</Link></div>
        </div>
      </div>
    </div>
    <div>&copy; TBD</div>
  </footer>
);

export default Footer;
