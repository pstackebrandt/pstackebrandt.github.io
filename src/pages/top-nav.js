// file: top-nav.js

import Nav from 'react-bootstrap/Nav';

function TopNav() {
  return (
    <Nav className="nav-centered nav-item-fill mt-3">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      
      <Nav.Item>
        <Nav.Link href="impress">Impressum</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default TopNav;