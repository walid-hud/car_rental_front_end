import { useState } from 'react'
import {MdMenu  , MdClose} from 'react-icons/md'

const SideBar = () => {
    const [sideBarState , setSideBarState] = useState(false)

    function handleClick(){
        setSideBarState(!sideBarState)
    }

  return (
    <div id='side-bar-container' className={sideBarState ? 'open' : 'close'} >
        <div className='icon' >
        {sideBarState ? <MdClose onClick={(e)=>handleClick(e)}/> : <MdMenu onClick={(e)=>handleClick(e)}/>}
        </div>

        
    
    </div>
  )
}

export default SideBar
