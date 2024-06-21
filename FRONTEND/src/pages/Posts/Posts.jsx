import { getAllPosts } from "../../services/postsServices"
import { useEffect, useState } from "react"
import PostCard from "../../components/PostCard/PostCard"
import './Posts.css'

function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const postsRequest = async () => {
            const result = await getAllPosts()
            setPosts(result)
        }
        postsRequest()
    }, [])

    console.log(posts)
  return (
    <div className="posts-container">
        {
            posts.map((post) => {
                return <PostCard postBody={post.body} key={post.id}/>
            })
        }
    </div>
  )
}

export default Posts