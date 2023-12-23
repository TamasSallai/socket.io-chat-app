import SidebarHeader from './SidebarHeader/SidebarHeader'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarHeader />

      <ul className="chatrooms">
        <li className="chatroom-entry">
          <img src="./profile-picture.jpg" alt="" />
          <div>
            <div className="chatroom-name">Tamas Sallai</div>
            <p className="last-message">Lorem ipsum dolor sit.</p>
          </div>
          <div>
            <div className="message-counter">1</div>
            <span></span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
