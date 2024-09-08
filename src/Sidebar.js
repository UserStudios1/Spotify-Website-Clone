import React from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from './DataLayer';


function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue()
  
  return (
    <div className="sidebar">
        <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
        alt="Spotify Logo"></img>
        <SidebarOption Icon={HomeIcon} title="Home"></SidebarOption>
        <SidebarOption Icon={SearchIcon} title="Search"></SidebarOption>
        <SidebarOption Icon={LibraryMusicIcon} title="Your Library"></SidebarOption>
        <br></br>
        <strong className="sidebar_title">Playlists</strong>
        <hr></hr>
        {playlists?.items?.map((playlists) => (
            <SidebarOption title={playlists.name}></SidebarOption>
        ))}
    </div>
  )
}

export default Sidebar