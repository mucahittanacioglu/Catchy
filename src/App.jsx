import './App.css'
import CustomNav from './component/CustomNav'
import {AiFillDashboard, AiOutlineNotification, AiOutlineUser} from "react-icons/ai"
import {BsSearch} from "react-icons/bs";
import {BiMessageAlt} from "react-icons/bi";


function App() {
  return (
    <>
      <CustomNav
      li={[
        ["Dashboard", <AiFillDashboard/>],
        ["Profile", <AiOutlineUser/> ],
        ["Messages", <BiMessageAlt/> ],
        ["Notifications", <AiOutlineNotification/> ],
        ["Search", <BsSearch/> ]
      ]}
    />

    </>
  )
}

export default App
