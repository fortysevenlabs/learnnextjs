import Link from 'next/link';

// what is this?
// React Component, is this syntax available in typical react setup?
// Quickly create pages by 
// a) exporting a React Component
// b) putting those components in pages dir
const Index = () => (
  <div>
    {/* Couldn't differentiate using network calls */}

    {/* Server Side Navigation */}
    <a href="/about"> About CSN </a>

    <br />

    {/* Client Side Navigation */}
    {/* 
      * Link is a wrapper component, 
      * it accepts href and routing related props
      * it can't take a style prop
      * Apply styles to underlying components instead
      * 
      * You can place anything in a Link.
      * The requirement for components placed inside Link is support for onClick prop
    */}
    <Link href="/about">
      {/* <a style={{ fontSize: 20 }}> About SSN </a> */}
      <button style={{ fontSize: 20 }}> About SSN </button>
    </Link>

    <p> HELLO NEHA !!! </p>
  </div>
)

export default Index;
