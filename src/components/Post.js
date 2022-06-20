import React, { useEffect, useState } from "react";

const Posts = (post) => {
    const [body, setBody] = useState()
    const [userId, setUserId] = useState()
    const [title, setTitle] = useState()
    const [id, setId] = useState()
    console.log(post, `post`)
    useEffect(() => {
        setBody(post?.body?.body)
        setUserId(post?.body?.userId)
        setTitle(post?.body?.title)
        setId(post?.body?.id)
    },[post?.body?.body,post?.body?.userId,post?.body?.title, post?.body?.id])

    const submitHandler = () => {
        let schema = {
            id: "1",
            body: body,
            userId: userId,
            title: title

        }
        let updateSchema = {
            body: body,
            userId: userId,
            title: title
        }

        if (id) {
            alert(`updated post`, JSON.stringify(updateSchema))
        } else {
            alert(`created post`, JSON.stringify(schema))
        }
    }


    return (

        <div>
            <h1 className="mb-3 mx-5">Add/Edit posts</h1>
            


            <div className=" mb-3 mx-5">
                <div className="input-group input-group-sm mb-3 mx-5 w-25 ">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">User Id</span>
                    </div>
                    <input className="form-control" type="number" defaultValue={userId} onChange={(e) => { setUserId(e.target.value) }} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </div>
                <div className="input-group input-group-sm mb-3 mx-5 w-25 ">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">body</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Small" defaultValue={body} onChange={(e) => { setBody(e.target.value) }} aria-describedby="inputGroup-sizing-sm" />
                </div>
                <div className="input-group input-group-sm mb-3 mx-5 w-25 ">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">title</span>
                    </div>
                    <input type="text" className="form-control" defaultValue={title} onChange={(e) => { setTitle(e.target.value) }} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </div>
                <button class="btn btn-primary mx-5" type="submit" onClick={(e) => { submitHandler(e) }} >submit</button>
            </div>
        </div>
    )
}


export default Posts