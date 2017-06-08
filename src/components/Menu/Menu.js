import "./Menu.css";

export default function (React, PropTypes, NavLink) {
  class Menu extends React.Component {
    state = {collapsed: true};

    toggleCollapsed = () => {
      this.setState({collapsed: !this.state.collapsed});
    };

    render() {
      return (
        <nav className={this.state.collapsed ? ' collapsed' : ''}>
          <button className="button nav-toggle" onClick={this.toggleCollapsed}>
            <span className="typcn typcn-th-menu"></span>
          </button>

          <ul className="nav-items">
            <li className="nav-item">
              <span className="typcn typcn-home"></span>
              <NavLink exact to="/" onClick={this.toggleCollapsed}>Home</NavLink>
            </li>
            <li className="nav-item">
              <span className="typcn typcn-cog"></span>
              <NavLink to="/settings" onClick={this.toggleCollapsed}>Settings</NavLink>
            </li>
            <li className="nav-item">
              <span className="typcn typcn-info-large"></span>
              <NavLink to="/info" onClick={this.toggleCollapsed}>Info</NavLink>
            </li>
          </ul>
        </nav>
      );
    }
  }

  return Menu;
}
