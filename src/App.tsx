// src/App.tsx
import React from 'react';
import Topbar from './components/layout/Topbar';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';
import UserView from './views/UserView'; // Assuming UserView might be a page example

const App: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Topbar />
      <Main>
        {/* Example of content that would go into the Main component */}
        <h1>Welcome to the React App!</h1>
        <p>This is the main content area.</p>
        {/* You can route to different views here. For example, showing UserView: */}
        {/* <UserView userId={1} /> */}
      </Main>
      <Footer />
    </div>
  );
};

export default App;
