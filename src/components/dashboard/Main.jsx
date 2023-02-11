import './main.css'

import MyWorksSection from './MyWorksSection'
import ProfileCard from './ProfileCard'

const Main = ({toggleSidebar}) => {
  return (
    <div className={`main ${toggleSidebar && 'main-toggled'}`}>
        <ProfileCard />
        <MyWorksSection />
    </div>
  )
}

export default Main