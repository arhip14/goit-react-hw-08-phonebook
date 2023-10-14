const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(180deg, #FF6B6B, #FF9A8B)',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '2rem',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '3rem',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  },
  emoji: {
    fontSize: '2rem',
    marginLeft: '0.5rem',
  },
  icon: {
    fontSize: '3rem',
  },
  animationElement: {
    fontSize: '2rem',
    animation: 'spin 2s linear infinite', // Rotating animation
  },
  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Phonebook
        <span role="img" aria-label="Greeting icon" style={styles.emoji}>
          💁‍♀️
        </span>
        <span role="img" aria-label="Phone icon" style={styles.icon}>
          📞
        </span>
      </h1>
      <div style={styles.animationElement}>🌟</div> {/* Animated element */}
    </div>
  );
}
