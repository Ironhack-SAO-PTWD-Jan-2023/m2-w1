import { Component } from 'react';
import Button from './Button';


class Navbar extends Component {
  render() {
    return (
      <nav>
        <p>React - Components & Props</p>
        <Button />
        <Button />
      </nav>
    )
  }
}

export default Navbar;