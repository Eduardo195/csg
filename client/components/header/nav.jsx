import React from 'react';
import Link from 'components/link/link';
import SecNav from 'components/header/containers/secNav';
import NavDropdown from './navDropdown';

const menuItems = [{
  label: 'Opportunities',
  href: '/opportunities/',
}, {
  label: 'Employers',
  items: [
        { label: 'Resgister your company', href: 'registration/employer' },
        { label: 'Create opportunity', href: 'employer/post' },
  ],
},
// {
//     label: 'CV',
//     items: [
//       { label: 'Create a CV', href: 'user/create/cv' },
//       { label: 'Create a cover letter', href: 'user/create/coverLetter' },
//       { label: 'CV tips', href: 'user/tips/cv' },
//       { label: 'Cover letters', href: 'user/tips/coverLetter' },
//     ],
// }{
//     label: 'Employers',
//     items: [
//       { label: 'Home', href: 'employer/home' },
//       { label: 'Resgister your company', href: 'employer/register' },
//       { label: 'Advertise a vacancy', href: 'employer/post' },
//       { label: 'Find talent', href: 'employer/search' },
//     ],
// }
];

const Nav = () => (
  <div className="collapse navbar-collapse" id="mainNav">
    <ul className="navbar-nav mr-auto">
      {
        menuItems.map((item) => {
          if (item.items) {
            return <NavDropdown key={item.label} item={item} />;
          } else if (item.href) {
            return (
              <Link key={item.label} href={item.href} className="nav-link">
                {item.label}
              </Link>
            );
          }
          return (
            <span key={item.label} className="nav-link">
              {item.label}
            </span>
          );
        })
      }
    </ul>
    <SecNav />
  </div>
);

export default Nav;
