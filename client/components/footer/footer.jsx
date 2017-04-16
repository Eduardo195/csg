import React from 'react';
import Link from 'components/link/link';

const Footer = () => (
  <footer>
    <h2 className="bold">oportunarium</h2>
    <div className="d-flex justify-content-center">
      <div>
        <article>
          <h6 className="bold">For Opportunity Seekers</h6>
          <div><Link href="/opportunities">Find Opportunities</Link></div>
          <div><Link href="#">Upload CV</Link></div>
        </article>
      </div>
      <div>
        <article>
          <h6 className="bold">For Employers</h6>
          <div><Link href="/opportunity/create">Create opportunity</Link></div>
        </article>
      </div>
      <div>
        <article>
          <h6 className="bold">About us</h6>
          <div><Link href="#">Privacy</Link></div>
          <div><Link href="#">Contact</Link></div>
          <div><Link href="#">Terms</Link></div>
          <div><Link href="#">Help</Link></div>
          <div><Link href="#">Site Map</Link></div>
        </article>
      </div>
    </div>
    <div>&copy; TBD</div>
  </footer>
);

export default Footer;
