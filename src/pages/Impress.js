// file: Impress.js

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Impress() {
    return (
        <Container>
            <Row className="mb-4">
                <Col>
                    <h1>Impressum</h1>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col>
                    <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
                    <address>
                        Peter Stackebrandt<br />
                        Wei&szlig;ensee 27<br />
                        90537 Feucht
                    </address>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col>
                    <h2>Kontakt</h2>
                    <p>E-Mail: <a href="mailto:info.stackebrandt@gmail.com">info.stackebrandt@gmail.com</a></p>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col>
                    <h2>Redaktionell verantwortlich</h2>
                    <p>Peter Stackebrandt</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer">e-recht24.de</a></p>
                </Col>
            </Row>
        </Container>
    );
}

export default Impress;
