import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import styles from '../styles/Dash.module.css'
import { dropdown } from '../components/dropdown'
import Link from 'next/link'

export default function dashboard() {
  return (
    <Container fluid className={styles.container}>
    <Container fluid className={styles.main}>
        <Row>
            <Col sm={2} className={styles.sidebar}>
                <h3>Dislove</h3>
                <div className={styles.dropdown}>
                    <img src='https://cdn.discordapp.com/avatars/849905403021361162/e07b3681654d6e1fcb7484d58f95f2c2.webp?size=80' alt='pfp' className={styles.pfp}/>
                    <span>Tostifffent</span>
                    {dropdown()}
                </div>
                <ul className={styles.sidebarList}>
                    <li><Link href="/" className={styles.link}>Home</Link></li>
                    <li><Link href="/" className={styles.link}>Prototype</Link></li>
                    <li><Link href="/" className={styles.link}>Placeholder</Link></li>
                </ul>
            </Col>
            <Col>
            <Row>
                <Col className={styles.cardsm}>
                <span style={{color: "gray"}} mg={2}>Details</span>
                <Container className={styles.cardDetails}>
                    <h2>Tostiffent</h2>
                    <span>Your Account Details</span>
                    <span>Age 18</span>
                    <span>Gender Male</span>
                    <div className={styles.cardFooter}>
                        <span>Berry Hawt Boi Please Swipe xoxo</span>
                    </div>
                </Container>
                </Col>
                <Col className={styles.cardsm}>
                <span mg={2}>Swipes</span>
                <Container className={styles.cardDetails}>
                    <h2>1,000 Swipes</h2>
                    <span>Your Account Details Are Here But Why Are You Here</span>
                </Container>
                </Col>
                <Col className={styles.cardsm}>
                <span mg={2}>Matches</span>
                <Container className={styles.cardDetails}>
                    <h2>1,000 Matches</h2>
                    <span>Your Account Details Are Here But Why Are You Here</span>
                </Container>
                </Col>
                </Row>
                <Row>
                    <Col className={styles.cardlg}>
                <span mg={2}>Matches</span>
                <Container className={styles.cardDetails}>
                    <h2>1,000 Matches</h2>
                    <span>Your Account Details Are Here But Why Are You Here</span>
                </Container>
                </Col>
                </Row>
            </Col>
        </Row>
    </Container>
    </Container>
  )
}
