import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
        <img  src="./logo1.jpg" /> 
      <div className="logo">MyLapShop</div>
      <div className="menu">
        <a href="#home"><i className="fas fa-home"></i>Home</a>
        <a href="#services"><i className="fas fa-cogs"></i>Services</a>
        <a href="#contact"><i className="fas fa-envelope"></i>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
