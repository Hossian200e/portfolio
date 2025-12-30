const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2>Md Hossain</h2>
      <div>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    background: "#020617",
    position: "sticky",
    top: 0,
  },
};

export default Navbar;
