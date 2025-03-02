// file: bottom-nav.js

import Nav from 'react-bootstrap/Nav';

function BottomNav() {
  return (
    <Nav className="bottom-nav">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      
      <Nav.Item>
        <Nav.Link href="/projects">Projekte</Nav.Link>
      </Nav.Item>
      
      <Nav.Item>
        <Nav.Link href="/impress">Impressum</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default BottomNav;