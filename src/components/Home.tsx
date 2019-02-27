import React, { Component } from 'react'
import Login from "../pages/Login";
import HomePage from "../pages/HomePage";


const Home = ({ session }: { session: any }) => {
  <>
    {session && session.getCurrentUser ? <HomeWithAuth session={session} /> : <HomeWithOutAuth />}
  </>
}


const HomeWithAuth = ({ session }: { session: any }) => <HomePage />;

const HomeWithOutAuth = () => <Login />;

export default Home;