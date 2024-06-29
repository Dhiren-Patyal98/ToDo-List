import React, { useEffect, useState } from "react";
import Tasks from "./Tasks";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function TodoList() {

  function storeTodoData()
  {
    let data = localStorage.getItem("todos")
    let json = JSON.parse(data)
    if(json) 
      {
        return json
      }
      return []
  }


  const [todos, setTodos] = useState(storeTodoData());

 

  function handleSubmit(e) {
    e.preventDefault();

    let task = e.target.task.value;
    let desciption = e.target.desciption.value
    
    setTodos([
      ...todos,
      {
        
        task: task,
        description : desciption,
        completed: false,
      },
    ]);
    e.target.reset();
  }

 useEffect(()=>
{
  localStorage.setItem("todos",JSON.stringify(todos))
},[todos])

  useEffect(() => {
    
    console.log("task list is updated");
    AOS.init();
  }, [todos]);


  function handleTaskStatus(id)
  {
    let newTodos = [...todos]
    newTodos[id].completed = !newTodos[id].completed 
    setTodos(newTodos);
  }

  function handleDeletekStatus(id)
  {
    let newTodos = [...todos];
    newTodos.splice( id,1)
    setTodos(newTodos);
    AOS.refreshHard()
  }

  return (
    <>
    <div>
    <div data-aos="fade-up"
        
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center">
       
      <div className="container my-5 m-0 p-0"
      style={{transform: "translateX(-12%)"}}>
        <div
          className="mx-auto rounded border p-4"
          style={{  maxWidth: "800px", width: "100%", backgroundColor: "#08618" }}
        >
          <h2 className="text-white text-center mb-5" style={{ fontFamily:"Garamond, serif", fontSize : "55px"}}> My ToDo List</h2>
          <form className="d-flex" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              name="task"
              placeholder="Task Name"
              style={{ width: '300px' }}
              required
            />
             <input
              className="form-control me-2"
              name="desciption"
              placeholder="Description"
              style={{ width: '700px' }}
              required
            />
            <button
              className="btn btn-outline-light"
              
              type="submit"
            >
              ADD
            </button>
          </form>



         <Tasks todos={todos}  handleDeletekStatus={handleDeletekStatus} handleTaskStatus={handleTaskStatus}/>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}
