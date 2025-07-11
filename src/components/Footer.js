import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#111',
      color: '#fff',
      padding: '40px 0',
      textAlign: 'center',
    },
    paragraph: {
      margin: 0,
      fontSize: '16px',
    },
    links: {
      marginTop: '20px',
    },
    link: {
      color: '#ccc',
      margin: '0 15px',
      textDecoration: 'none',
      fontSize: '15px',
    },
    linkHover: {
      color: '#fff',
    },
    social: {
      marginTop: '15px',
    },
    icon: {
      color: '#ccc',
      margin: '0 10px',
      fontSize: '18px',
      textDecoration: 'none',
    }
  };

  return (
    <footer style={styles.footer}>
      <Container>
        <Row>
          <Col>
            <p style={styles.paragraph}>&copy; 2025 Gaurav Kumar. All rights reserved.</p>
            <div style={styles.links}>
              <a href="#home" style={styles.link}>Home</a>
              <a href="#skills" style={styles.link}>Skills</a>
              <a href="#projects" style={styles.link}>Projects</a>
              <a href="#contact" style={styles.link}>Contact</a>
            </div>
            <div style={styles.social}>
              <a href="https://www.linkedin.com/in/gauravkumar9452?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" style={styles.icon}>LinkedIn</a>
              <a href="https://github.com/Gauravkumar6617" style={styles.icon}>GitHub</a>
              <a href="mailto:gauravkumar94527@gmail.com.com" style={styles.icon}>Email</a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
