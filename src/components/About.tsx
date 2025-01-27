import { useEffect, useState } from "react"
import "../styles/About.css"

interface IPost {
  id: number
  title: string
  body: string
}

function About() {
  const [postsList, setPostsList] = useState<IPost[]>([])
  const [partOfList, setPartOfList] = useState<IPost[]>([])
  const [itemCount, setItemCount] = useState(0)
  const [defaultItemCount, setDefaultItemCount] = useState(12)

  useEffect(() => {
    fetchData()
    console.log("fetching data")
  }, [])

  const fetchData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")

    const jsonData = await data.json()
    const firstTwelve = jsonData.slice(itemCount, defaultItemCount)

    setPostsList(jsonData)
    setPartOfList(firstTwelve)

    const nextCount = 2 * defaultItemCount
    setItemCount(nextCount)
    //console.log("after user effect", itemCount)
  }

  // console.log("first time", itemCount)

  const paginator = () => {
    console.log("before incriment", itemCount)
    const nextCount = itemCount + defaultItemCount
    setItemCount(nextCount)
    setPartOfList(postsList.slice(0, itemCount))

    console.log("after button clicked", itemCount)
  }

  const postItems = partOfList.map((post) => (
    <div className="grid-item" key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  ))
  return (
    <div>
      <div className="grid-container">{postItems}</div>
      <button className="center-button" onClick={() => paginator()}>
        Show more
      </button>
    </div>
  )
}

export default About
