// Components can be anywhere
// * in any directory, not necessarily named components
// * they can be in pages as well
// * avoid pages though if you don't need direct url

import Link from 'next/link';

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}> Home </a>
    </Link>

    <Link href="/about">
      <a style={linkStyle}> About </a>
    </Link>
  </div>
)

export default Header;
