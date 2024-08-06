import React from 'react';
import { Link } from 'react-router-dom';

const SingleTodo = () => {
  // use JavaScript's window.location.pathname to grab the ID
  const pathname = window.location.pathname;

  // use split() method to extract the id from the pathname

  // handle a fetch request for the ID that is passed
  console.log(pathname);
  return (
    <div>
      <Link to={'/'}>Go back to home</Link>
      <h1>title</h1>
      <p>description</p>
      <p>status: complete or incomplete</p>
      <>date when it was created</>
      <>button for editing</>
      <>button for marking as complete or incomplete</>
      <>button for deleting</>
    </div>
  );
};

export default SingleTodo;
