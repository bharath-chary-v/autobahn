import axios from "axios";
import React, { useState } from "react";
import Posts from "./Post";



function AlllPosts() {
  const [posts, setPosts] = useState()
  const [context, setContext] = useState()





  const getPosts = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    // console.log(res?.data)
    setPosts(res?.data)
  }
  console.log(posts, `posts`)

  // useEffect(() => {
  //   getPosts()
  // }, [])


  const tableeEditHandler = async(context) => {
    setContext(context)
    
 console.log(context, `context`)
  }

  return (
    <div>
      <Posts body={context} />
      
      {posts ? <div className="mx-5"> <a className="ml-5 mb-5 pl-5 bg-danger text-light pr-5 pt-2 pb-3" href="/">close</a></div> : <button class="btn btn-primary mx-5" type="submit" onClick={getPosts}>Dashboard</button>}

{posts ? 

<table className="table mt-5">
        <thead className="thead-info bg-info">
          <tr>
            <th scope="col">#</th>
            <th scope="col ">body</th>
            <th scope="col">title</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        {posts ? posts.map((context, idx) => (
          <tbody>
            <tr key={idx}>
              <th scope="row">{idx + 1}</th>
              <td className="w-50">{context.body}</td>
              <td className="w-25">{context.title}</td>
              <td  onClick={()=> {tableeEditHandler( context)}}>
                {/* <Link href="/edit" ><a href="/edit" >edit</a></Link> */}
                <button class="btn btn-primary mx-5" >edit</button>
                

              </td>
            </tr>

          </tbody>
        )) : ""}

      </table>

: ""}
      


    </div>
  )
}

export default AlllPosts