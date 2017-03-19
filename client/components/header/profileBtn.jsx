import React from 'react';
import Link from 'components/link/link';

function ProfileBtn() {
  return (
    <Link href="/profile">
      <button className="btn btn--circular btn--profile">
        &nbsp;
      </button>
    </Link>
  );
}

export default ProfileBtn;
