import React from 'react';
import Link from 'components/link/link';

const menuItems = [, {
    title: 'Opportunities',
    href: '/opportunities/',
},
// {
//     title: 'CV',
//     items: [
//       { text: 'Create a CV', href: 'user/create/cv' },
//       { text: 'Create a cover letter', href: 'user/create/coverLetter' },
//       { text: 'CV tips', href: 'user/tips/cv' },
//       { text: 'Cover letters', href: 'user/tips/coverLetter' },
//     ],
// }{
//     title: 'Employers',
//     items: [
//       { text: 'Home', href: 'employer/home' },
//       { text: 'Resgister your company', href: 'employer/register' },
//       { text: 'Advertise a vacancy', href: 'employer/post' },
//       { text: 'Find talent', href: 'employer/search' },
//     ],
// }
];

const MainNav = () => (
    <nav className="nav nav--main">
        <ul className="fatnav">
            {
                menuItems.map(item => (
                    <li key={item.title} className="nav--menuitem">
                        {
                            item.href ? (
                                <Link href={item.href}>
                                    {item.title}
                                </Link>
                            ) : item.title
                        }
                        {
                            item.items && (
                                <ul className="subLinks">
                                    {
                                        item.items.map(link => (
                                            <li key={link.text}>
                                                <Link href={link.href}>
                                                    {link.text}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            )
                        }
                    </li>
                  ))
              }
        </ul>
    </nav>
    );

export default MainNav;
