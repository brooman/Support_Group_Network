import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const layoutStyle = {
  margin: 20,
  padding: 20,
};

const Layout = props => {
  const { children } = props;
  return (
    <div style={layoutStyle}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
