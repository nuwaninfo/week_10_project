import { useEffect, useState } from "react"
import "../styles/About.css"

interface IPost {
  id: number
  title: string
  body: string
}

function About() {
  const [postsList, setPostsList] = useState<IPost[]>([])

  useEffect(() => {
    fetchData()
    console.log("fetching data")
  }, [])

  const fetchData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")

    const jsonData = await data.json()

    setPostsList(jsonData)
  }

  const postItems = postsList.map((post) => (
    <div className="grid-item" key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  ))
  return (
    <div>
      <div className="grid-container">{postItems}</div>
    </div>
  )
}

export default About
