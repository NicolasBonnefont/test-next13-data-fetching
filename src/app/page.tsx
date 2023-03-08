import axios from "axios"
import Image from "next/image"

export const revalidate = 10 // 60 seconds

async function getUserGithub() {
  const response = await axios.get('https://api.github.com/users/nicolasbonnefont')

  return response.data
}

async function Home() {

  const user = await getUserGithub()

  return (
    <>
      <span>{user.login}</span>
      <Image
        width={60}
        height={60}
        alt='avatar'
        src={user?.avatar_url}
      />
      <span>{user.bio}</span>
    </>
  )
}


export default Home