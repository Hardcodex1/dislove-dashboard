import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Container, Row, Col} from 'react-bootstrap'
import Navbar from '../components/Navbar'

export default function Home(type) {

  const redirect = () => {
    window.location = "https://discord.gg/B8rK2aSwFe"
    
  }

  const invite = () => {
    window.location = "https://top.gg/bot/942348989150421012"
  }

  return (
    <div className={styles.main}>
      <Row>
        {Navbar()}
      </Row>
      <Row className={styles.hero}>
        <Col sm={5}>
          <div className={styles.heroLeft}>
            <h1 className={styles.heroTitle}>Dislove™</h1>
            <h3 className={styles.heroDesc}>A New Way Of Meeting People</h3>
            <div className={styles.heroButtons}>
              <button className={styles.heroButton1} onClick={redirect}>Dashboard</button>
              <button className={styles.heroButton2} onClick={invite}>Invite</button>
            </div>
          </div>
        </Col>
        <Col sm={5}>
          <div className={styles.heroRight}>
            <img className={styles.heroImg} src="https://cdn.discordapp.com/avatars/942348989150421012/724f120779656b5fdca0ff3fb3ce04ab.png?size=1024" alt='img'/>
          </div>
        </Col>
      </Row>
        <div className={styles.curve}>
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill}></path>
    </svg>
</div>
    </div>
  )
}
