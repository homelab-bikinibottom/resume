import React, { Component } from 'react';
import Header from './Header';
import Jumbotron from './Jumbotron';
import Footer from './Footer';
import Sidebar from './Sidebar';
import MainSection from './MainSection';

class MainComponent extends Component {
  render() {
    return (
      <div className="container">
        <Header />

        <Jumbotron />

        <div className="row">
          <div className="col-lg-8">
            <MainSection />
          </div>
          <div className="col-lg-4">
            <Sidebar />
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default MainComponent;