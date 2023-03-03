import React from "react";

class Badge extends React.Component {
  render() {
    return <span className='badge'>{this.props.badgeText}</span>
  }
}

export default Badge;