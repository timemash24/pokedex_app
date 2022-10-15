import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

type MenuProps = {
  name: string;
  page: string;
  imgURL: string;
};

const Menu = ({ name, imgURL, page }: MenuProps) => {
  return (
    <section>
      <Link href={`/${page}`}>
        <img src={imgURL} alt={page} height="200px" />
      </Link>
      <Link href={`/${page}`}>
        <h4>{name}</h4>
      </Link>
    </section>
  );
};

export default Menu;
