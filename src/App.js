// App.js
import React from 'react';
import Card1 from './components/Card1';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
    return (
        <div>
          <Header />
          <Navbar />
          <div className="container mx-auto p-4">
            {/* Main content here */}
            <h1 className="text-3xl font-bold">Welcome to Your Website</h1>
            <p>Your content goes here...</p>
          </div>
          <div className="container mx-auto p-4">
            {/* Cards section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card1 />
            </div>
          </div>
          <Footer />
        </div>
      );
}

export default App;
