import { useEffect } from 'react';
import { useAnimateContext } from '../../context/AnimationContext';
import "./Header.css";

const Header = () => {
  const { headerVisibility } = useAnimateContext();

  useEffect(() => {
    console.log(headerVisibility)
  }, [headerVisibility])

  return (
    <div className={headerVisibility ? "visible" : "invisible"}>
      <header className="header-fixed">
        <div className="header-limiter">
          <h1>
            <a href="#">
              Mati<span>Web</span>
            </a>
          </h1>

          <nav>
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </header>

      <div className="header-fixed-placeholder"></div>
    </div>
  );
  
};

export default Header;
