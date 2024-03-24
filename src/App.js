import './App.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className="scroll-container">
   

   
    <div className="app-container">
      <div className="navbar">
        <div className="search-container">
          <input type="textfield" className="search-bar" placeholder="Search" />
          <button className="search-button">
            <i className="fa fa-search"></i>
          </button>
        </div>
        <div className="notification-container">
  <div className="notification-icon">
 
  </div>
</div>
<div className="assistant-container">
  <div className="assistant-icon">
  <i className="fa fa-comment">&nbsp;&nbsp;&nbsp;Assistant</i>
 
  </div>
</div>
        <div className="name-container">
  <div className="name">NAME</div>
</div>
      

  <h1 style={{ color: '#404179', position: 'fixed', top: '7px', left: '7%', transform: 'translateX(-50%)' }}>MindMate</h1>
  <p style={{ color: '#404179', position: 'fixed', top: '70px', left: '4%', transform: 'translateX(-50%)' }}>MENU</p>


      </div>
      <div className="bell-icon">
          <i className="fa fa-bell"></i>
        </div>
      <div className="menu-container">
        <ul className="menu">
          
          <li>
            <button className="menu-button" style={{ backgroundColor: '#D7A9A9', borderRadius: '15px' }}>
              <i className="fa fa-file"></i>
            </button>
           
            <a href="/homework">   Articles</a>
          </li>
          <li>
            <button className="menu-button" style={{ backgroundColor: '#B5F5B6',color:'#FFFFFF', borderRadius: '15px' }}>
              <i className="fa fa-book"></i>
            </button>
            <a href="/homework">   Diary</a>
            &nbsp;
          </li>
          <li>
          
          <button className="menu-button" style={{ backgroundColor: 'black', borderRadius: '15px' }}>
              <i className="fa fa-home"></i>
            </button>
            <a href="/homework">   Home</a>
         
          </li>
          <li>
            <button className="menu-button" style={{ backgroundColor: '#A4FFFC',color:'#FFFFFF', borderRadius: '15px' }}>
              <i className="fa fa-tasks"></i>
            </button>
            <a href="/homework">   Homework</a>
            &nbsp; 
          </li>
          <li>
            <button className="menu-button" style={{ backgroundColor: '#F3BE8F', borderRadius: '15px' }}>
              <i className="fa fa-line-chart"></i>
            </button>
             <a href="/homework">   Reports</a>
            &nbsp; 
          </li>
          <li>
            <button className="menu-button" style={{ backgroundColor: '#FBDCE4',color:'#FFFFFF', borderRadius: '15px' }}>
              <i className="fa fa-user-md"></i>
            </button>
            <a href="/homework">   Therapist</a>
            &nbsp; 
          </li>
          <li>
            <button className="menu-button" style={{ backgroundColor: '#F9E698',color:'#FFFFFF', borderRadius: '15px' }}>
              <i className="fa fa-music"></i>
            </button>
            <a href="/homework">   Playlist</a>
            &nbsp; 
          </li>
        </ul>
      </div>
    </div>
 
    
    </div>
    
  );
}

export default App;
