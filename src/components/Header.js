import '../App.css';
import '../styles.css'

function Header() {
  return (
    <div className="header">
        <img className = 'logo' src='logo.png' alt='movidux'/>
        <h2 className='app-subtitle'>it's time for popcorn! Find your next movie</h2>
    </div>
  );
}

export default Header;
