import { getUserProfile } from "../../services/userService"
import { useState, useEffect } from "react"
import ProfileCard from "../../components/ProfileCard/ProfileCard"

function Profile() {
  const [userProfile, setUserProfile] = useState({})

  useEffect(() => {
    const getUserDataProfile = async () => {
      const result = await getUserProfile()
      setUserProfile(result)
    }

    getUserDataProfile()
  }, [])
  return (
    <div>
      <ProfileCard userInfo={userProfile} />
    </div>
  )
}

export default Profile