function Navbar(props) {
  return (
    <nav>
       <h1>{props.name}</h1>
      <h1>{props.title}</h1>
    </nav>
  );
}

export default Navbar;