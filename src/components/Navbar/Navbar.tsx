import { useRef } from "react";

const Navbar = () => {
    const navRef = useRef();

    const showNavRef = () => {
      navRef.current.classList.toggle("show");
    }

  return (
      <header>
          <h3></h3>
            <nav ref={navRef}>
              <button onClick={showNavRef}></button>
            </nav>
            <button onClick={showNavRef}>

            </button>
      </header>
  )
  
};

export default Navbar;
