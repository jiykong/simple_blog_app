import * as React from 'react';
import './App.css';

import SideBar from './Component/SideBar';
import TopHeader from './Component/TopHeader';
import Blog from './Component/Body/Blog/Blog';
import Recipes from './Component/Body/Recipes/Recipes';
import TodoList from './Component/Body/TodoList/TodoList';
import Home from './Component/Body/Home/Home';
import Error from './Component/Body/Error/Error';

import { BrowserRouter, Routes, Route } from "react-router-dom";





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
      <BrowserRouter>
        <SideBar open={side_bar.left}></SideBar>
        <div>
          <Routes>
            <Route index element={<Blog />} />
            <Route path="blog" element={<Blog />} />
            <Route path="health" element={<Blog />} />
            <Route path="tasks" element={<TodoList />} />
            <Route path="recipes" element={<Recipes />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
