import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface Props {
  children: React.ReactNode;
}
const BaseLayout = ({ children }: Props) => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
