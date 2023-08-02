import Nav from 'react-bootstrap/Nav';

function BottomNav() {
  return (
    <Nav className="nav-centered nav-item-fill nav-link-dark mt-3">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      
      <Nav.Item>
        <Nav.Link href="impress">Impressum</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default BottomNav;