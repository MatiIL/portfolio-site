import { useEffect } from "react";
import { Link, Events } from "react-scroll";
import { useAnimateContext } from "../../context/AnimationContext";
import "./Header.css";

const Header = () => {
  const { headerVisibility } = useAnimateContext();

  useEffect(() => {
    Events.scrollEvent.register('end', function(to, element) {
      console.log('end', to, element);
    });
  }, [headerVisibility]);

  return (
    <div 
    id="nav"
    className={headerVisibility ? "visible position-relative w-100" : "invisible top-0"}>
      <header className="header-fixed">
        <div className="header-limiter">
          <h1 className="position-fixed">
            <Link 
            activeClass="active" 
            to="nav" 
            spy={true} 
            smooth={true}
            duration={300}
            >
              Mati<span>Web</span>
            </Link>
          </h1>
          <nav>
            <Link 
            to="about" 
            spy={true} 
            smooth={true}
            duration={300}
            >
              About
            </Link>
            <Link
            to="projects"
            spy={true} 
            smooth={true}
            duration={300}
            >Projects</Link>
            <Link
            to="contact"
            spy={true} 
            smooth={true}
            duration={300}
            >Contact</Link>
          </nav>
        </div>
      </header>

      <div className="header-fixed-placeholder"></div>
    </div>
  );
};

export default Header;
