import * as React from 'react';
import './App.css';

import SideBar from './Component/SideBar';
import TopHeader from './Component/TopHeader';
import Body from './Component/Body/Body';

/*
## Main function that begins the App
*/
function App() {

  //Baseline State as a false state
  const [side_bar, setSideBar] = React.useState({
    left: false
  });

  //Function to toggle the SideBar
  const toggleSideBar = () => {
    setSideBar({ left: !side_bar.left});
  };

  return (
    <div className="App">
      <TopHeader toggleSideBar={toggleSideBar} side_bar={side_bar.left}></TopHeader>
      <SideBar open={side_bar.left}></SideBar>
    </div>
  );
}

export default App;
