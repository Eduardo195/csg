import React from 'react';
import Link from 'components/link/link';

function CvBox() {
  return (
    <div className="cvbox">
      <h1 className="title text-uppercase bold">My Cv</h1>
      <Link href="/"> View your CV </Link>
      <Link href="/"> Upload a new CV </Link>
      <Link href="/"> Connect your LinkdIn</Link>
    </div>
  );
}

export default CvBox;
