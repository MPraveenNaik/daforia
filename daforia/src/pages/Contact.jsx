import React from 'react';

const Contact = () => {
  // Styles object
  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: '"Helvetica Neue", Arial, sans-serif',
      color: '#333',
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px',
    },
    title: {
      fontSize: '32px',
      fontWeight: '600',
      marginBottom: '16px',
    },
    intro: {
      fontSize: '18px',
      lineHeight: '1.6',
      color: '#666',
    },
    section: {
      marginBottom: '40px',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
    },
    sectionTitle: {
      fontSize: '24px',
      fontWeight: '600',
      marginBottom: '20px',
      color: '#222',
    },
    detail: {
      marginBottom: '15px',
    },
    detailTitle: {
      fontSize: '16px',
      fontWeight: '600',
      marginBottom: '5px',
    },
    link: {
      color: '#0066cc',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '20px',
    },
    footerNote: {
      textAlign: 'center',
      marginTop: '40px',
      fontSize: '16px',
      color: '#666',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Contact Us</h1>
        <div style={styles.intro}>
          <p>Get in touch with the right people for a faster response.</p>
          <p>Email is the most direct way to send in a question.</p>
        </div>
      </div>

      <div>
        {/* Customer Support Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Customer Support</h2>
          <div style={styles.detail}>
            <h3 style={styles.detailTitle}>Phone</h3>
            <p><a href="tel:+918500419416" style={styles.link}>+91 8500419416</a></p>
          </div>
          <div style={styles.detail}>
            <h3 style={styles.detailTitle}>Email for orders</h3>
            <p><a href="mailto:@daforia.com" style={styles.link}>praveenworks416@gmail.com</a></p>
          </div>
          <div style={styles.detail}>
            <h3 style={styles.detailTitle}>Email for Retail and distribution</h3>
            <p><a href="mailto:@daforia.co" style={styles.link}>praveenworks416@gmail.com</a></p>
          </div>
          <div style={styles.detail}>
            <h3 style={styles.detailTitle}>Working Hours</h3>
            <p>Monday to Saturday, 10 AM to 7 PM</p>
          </div>
        </div>
      </div>

      <div style={styles.footerNote}>
        <p>Quick answers to most common queries can be found on our <a href="/pages/faq" style={styles.link}>FAQ page</a>.</p>
      </div>
    </div>
  );
};

export default Contact;