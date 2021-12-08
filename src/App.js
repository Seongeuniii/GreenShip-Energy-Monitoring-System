import React from 'react';
import {Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from './components/chat/context/AppContext';

import Home from './components/Home'
import Pmax from './components/Pmax'
import Chat from './components/chat/Chat'
import Layout from "./components/chat/Layout";
import Input from "./components/chat/Input";
import Edit from "./components/chat/Edit";
import CardList from "./components/chat/Card";

function App() {
	return (
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/pmax" element={<Pmax/>} />
      <Route exact path="/chat" element={<Chat/>} />
    </Routes>

	);
}

export default App;
