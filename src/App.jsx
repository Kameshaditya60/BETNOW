import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import logo from './img/logo_trans_white.png'
import { ChevronDown, ZoomIn, Users } from "lucide-react";

function App() {
    
  const [isOpenOthers, setIsOpenOthers] = useState(false);
  const [isOpenSports, setIsOpenSports] = useState(false);
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  

  
  const OtherDropdown = () => {
    setIsOpenOthers(!isOpenOthers);
  };
  
  const SportsDropdown = () => {
    setIsOpenSports(!isOpenSports);
  };
  
  const ProfileDropdown = () => {
    setIsOpenProfile(!isOpenProfile);
  };

  const otherpanel = [
    'Live Game',
    'Slot Game',
    'Fantasy Game',
    'Our Cassino',
    'Our Virtual',
  ];

  const allSportspanel= [
    'Cricket',
    'Live Game',
    'Slot Game',
    'Fantasy Game',
    'Our Virtual',
  ];


  const profileItems =  [
    'Account Statement',
    'Profit Loss Report',
    'Bet History',
    'Unsettled Bet',
    'Set Button Values',
    'Security Auth Verification',
    'Rules',
    'Change Password',
    'Signout'
  ];

  return (
    <>
    <div className="container">
    <header className='header'> 
      <div class="logo"> <img src ={logo} alt="BETNOW8_logo" /> </div>
       <div class="navmenu"> 
        <button id='icon_zoom'> <ZoomIn /></button> 
        <button className='navbutton'> Rules </button> 
        <div className='account-balance' >
          <p>Balance: 110228</p>
          <p> Exposure: 200 </p>
        </div>
          <div className="profile-menu"> <button onClick={ProfileDropdown} > 
          <Users/> 
          <ChevronDown/></button>
      {isOpenProfile && (
        <div className='drop-profile'>
        {profileItems.map((item, index) => (
          <button key={index}>
          {item}  
          </button>
        ))}
      </div>
       
      )}
       </div>
        
        </div>

     </header>

{/*  navigation / */}

     <nav class="pagebar"> 
     <button>HOME</button>
     <button>CRICKET</button>
     </nav>

{/* main body  */}

    <div className='main_body'> 

      {/* side panel  */}

    <aside className="sidepanel"> 
      {/* other section  */}
      <div className="other-section"> 
        <button onClick={OtherDropdown} > 
          <span>Others</span> 
          <ChevronDown/> 
        </button>
      {isOpenOthers && (
        <div className="dropdown">
          {otherpanel.map((item, index) => (
            <button key={index}>
            {item}  
            </button>
          ))}
        </div>
       
      )}
       </div>
        {/* all sport section  */}
        <div className="allsport-section, other-section">
          <button onClick={SportsDropdown}>
             <span>All Sports</span> 
             <ChevronDown/> 
          </button>
          {isOpenSports && (
            <div className="OtherDropdown dropdown">
              {allSportspanel.map((item, index) => (
                <button key={index}>
                {item}
                </button>
              ))}
            </div>

          )}

        </div>
     </aside>

     {/* main content area  */}

      <main className='Content-area'> 

        <div className="content-heading"> 
        <h2>CRICKET</h2>
        </div>

        <div className="content-data">
          GAME
          <div>DATA NOT FOUND!</div>
        </div>

      </main>

         
     </div>

      {/* footer area  */}
      <footer className="footer">
        © Copyright 2024. All Rights Reserved. Powered by BETSNOW8.
      </footer>
     </div>
    </>
    );
};

export default App