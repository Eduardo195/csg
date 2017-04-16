import React from 'react';
import Link from 'components/link/link';

function ClBox() {
  return (
    <div className="clbox">
      <h1 className="title text-uppercase bold">My Cover letters</h1>
      <Link href="/"> cover letter 1 </Link>
      <Link href="/"> cover letter 2 </Link>
      <Link href="/"> cover letter 3 </Link>
    </div>
  );
}

export default ClBox;
