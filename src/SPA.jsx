import React, { useState } from 'react';
import './App.css';

// Header Component
const Header = ({ siteName }) => {
  return (
    <header className="header">
      <h1 className="site-title">{siteName}</h1>
    </header>
  );
};

// Navigation Component
const Navigation = ({ activeTab, onTabChange }) => {
  const navItems = ['Home', 'About Us', 'Contact Us'];
  
  return (
    <nav className="navigation">
      <div className="nav-container">
        {navItems.map((item, index) => (
          <button
            key={item}
            onClick={() => onTabChange(item)}
            className={`nav-button ${activeTab === item ? 'active' : ''}`}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
};

// Content Component
const ContentSection = ({ title, children }) => {
  return (
    <main className="content-section">
      <h2 className="content-title">{title}</h2>
      <div className="content-body">
        {children}
      </div>
    </main>
  );
};

// Main App Component
const App = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const getContentForTab = () => {
    switch(activeTab) {
      case 'Home':
        return {
          title: 'Title',
          content: (
            <>
              <p className="content-paragraph">
                Details or any paragraph in this section. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="content-paragraph">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum.
              </p>
            </>
          )
        };
      case 'About Us':
        return {
          title: 'About Our Company',
          content: (
            <>
              <p className="content-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis risus quis ex lacinia imperdiet. Quisque non dolor metus. Etiam est ante, venenatis eget odio nec, dapibus condimentum tellus. Nulla id sodales magna. Nam ut lorem rutrum nibh vehicula blandit quis eu quam. Quisque bibendum sit amet velit vitae tincidunt. Vestibulum id sodales felis. Duis sed neque imperdiet purus commodo laoreet. Suspendisse volutpat sapien quis purus porttitor suscipit.
              </p>
              <p className="content-paragraph">
              Fusce eget aliquet mi. Curabitur tempor consequat lobortis. Pellentesque at libero ut quam efficitur ullamcorper eu at dui. Morbi tempor, quam sit amet interdum tempor, sem sem egestas augue, nec hendrerit eros ante ut nibh. Fusce congue justo et eros pellentesque, ac varius magna interdum. Pellentesque cursus facilisis sagittis. Ut placerat magna mi, vel ornare leo imperdiet eu.
              </p>
            </>
          )
        };
      case 'Contact Us':
        return {
          title: 'Get In Touch',
          content: (
            <>
              <p className="content-paragraph">
                We'd love to hear from you!
              </p>
              <div className="contact-info">
                <p><strong>Email:</strong> info@example.com</p>
                <p><strong>Phone:</strong> (123) 123-4567</p>
                <p><strong>Address:</strong> 123 Main Street</p>
              </div>
            </>
          )
        };
      default:
        return { title: 'Page Not Found', content: <p>The requested page could not be found.</p> };
    }
  };

  const currentContent = getContentForTab();

  return (
    <div className="app">
      <Header siteName="Website Name" />
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <ContentSection title={currentContent.title}>
        {currentContent.content}
      </ContentSection>
    </div>
  );
};

export default App;