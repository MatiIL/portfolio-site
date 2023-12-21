import "./Header.css";

const Header = () => {
  return (
    <div className={1 === 1 ? "" : "d-none"}>
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
