import React from 'react';

import 'aos/dist/aos.css';

export default function Tasks({ todos, handleDeletekStatus, handleTaskStatus }) {
  return (
    <div>
      {todos.map((todo,id) => {
        return (
          <ul
            key={id}
            className="rounded mt-4 p-2 d-flex"
            style={{
              backgroundColor: todo.completed ? "#3F8845 " : "LightGray",
            }}
            data-aos="fade-in"
            data-aos-duration="500"
          >
            <i
              className={
                "h5 me-2 " +
                (todo.completed ? "bi bi-check-circle" : "bi bi-circle")
              }
              style={{ cursor: "pointer" }}
              onClick={() => handleTaskStatus(id)}
            ></i>
            <li className="me-auto"><b>{todo.task} : </b>{todo.description}</li>
            <div>
              <i
                
                className="bi bi-trash  h5"
                
                style={{ cursor: "pointer" }}
                onClick={() => handleDeletekStatus(id)}
                 data-aos="fade-in"
            data-aos-duration="500"
              ></i>
            </div>
          </ul>
        );
      })}
    </div>
  );
}