import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from '../styles/Home.module.css'

export default function Navbar() {
  return (
    <Container fluid className={styles.navbar}>
        <Row sm={1}>
            <Col sm={2} xl={2} className={styles.navTitle}>
                Dislove™
            </Col>
            {typeof window != "undefined" ? window.screen.width > 768 ? (<Col sm={2} xl={8} className={styles.navList}>
                <Row>
                <Col><span className={styles.navLink}>Home</span></Col>
                <Col><span className={styles.navLink}>Stats</span></Col>
                <Col><span className={styles.navLink}>Features</span></Col>
                </Row>
            </Col>) : null : null}
        </Row>
    </Container>
  )
}
