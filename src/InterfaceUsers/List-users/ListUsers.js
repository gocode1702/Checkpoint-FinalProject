import React, { useState ,useEffect } from "react";
import { useAsyncError, useNavigate , Link} from "react-router-dom";
import axios from "axios";


const ListUsers = ({ IsLoggedIn }) => {
    const [showModal, setShowModal] = React.useState(false);
  const [posts, setPosts] = useState(null);
  const [deletePost, setDeletePost] = useState(false);
  const POST_API = "http://localhost:3000/posts";
  const navigate = useNavigate();
  useEffect(() => {
    const fetchPosts = async () =>
      await axios
        .get(POST_API)
        .then((res) => setPosts(res.data))
        .catch((err) => console.log(err));
    IsLoggedIn ? fetchPosts() : navigate("/");
  }, [deletePost]);
  const handleDelete = (id) => {
    axios
      .delete("$(POST_API)/$(id)")
      .then((res) => setDeletePost((prev) => !prev))
      .catch((err) => console.log(err));
  };
  return (
     <>
      <button
        className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        type="button"
        onClick={() => setShowModal(true)}
      >
       Customers
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
             <div className="sign-avatar">
                        <img src="https://i.imgur.com/p1XqpVg.png" alt="" />
                      </div>
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}

                {/*body*/}
              <div className="relative p-6 flex-auto">
                  <div
                    className="container-fluid"
                    style={{
                      backgroundColor: "#fb4764",
                    }}
                  >
    <div>
      {posts ? (
        posts.map((e) => (
          <div>
            <h4>{e.title}</h4>
            <p>{e.description}</p>
            <button onClick={() => handleDelete(e.id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>Loading ...</p>
      )}
    </div>
     <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b"></div>
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                        <button
                          className=" text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                          style={{ backgroundColor: "#fb4764" }}
                        >
                          Save Changes
                        </button>
                      </div>
                  </div>
                </div>
                {/*footer*/}
              </div>
            </div>   
        </>
      ) : null}
    </>
  );
}

export default ListUsers;

