import React, { useState, useContext, useEffect } from "react";
import services from "../../services/service";
import { MyContext } from "../../context/my-context/my-context";

const MainPage = () => {
  const [text, setText] = useState("");
  const { userId, createPost, todos } = useContext(MyContext);

  const createTodoHandler = async (e) => {
    e.preventDefault();
    const data = await services.createTodo(text, userId);
    setText("");
  };

  const deleteTodoHandler = async (id) => {
    const data = await services.deleteTodo(id);
  };

  useEffect(() => {
    const getTodo = async () => {
      const data = await services.todoGet(userId);
      createPost(data.data);
    };
    getTodo();
  }, [userId, createPost]);

  const todoCompleted = async (id) => {
    await services.todoCompleted(id, {
      headers: {
        "Content-Type": "application/", 
      },
    });
  };
  const todoImportant = async (id) => {
    await services.todoImportant(id, {
      headers: {
        "Content-Type": "application/", 
      },
    });
  };

  return (
    <div className="container">
      <div className="main-page">
        <h4>Добавить задачу</h4>
        <form onSubmit={createTodoHandler} className="form form-login">
          <div className="row">
            <div className="input-field col s12">
              <input
                onChange={(e) => setText(e.target.value)}
                type="text"
                name="text"
                className="validate"
                value={text} 
              />
              <label htmlFor="text">Задача:</label>
            </div>
          </div>
          <div className="row">
            <button className="waves-effect waves-light btn blue" type="submit">
              Добавить 
            </button>
          </div>
        </form>
        <h3>Активные Задачи:</h3>
        <div className="todos">
          {todos.map((elem, index) => {
            const todoClasses = ["row flex todos-item"]; 
            if (elem.completed) {
              todoClasses.push("completed");
            }
            if (elem.important) {
              todoClasses.push("important");
            }
            return (
              <div className={todoClasses.join(" ")} key={index}>
                <div className="col todos-num">{index + 1}</div>
                <div className="col todos-text">{elem.text}</div>
                <div className="col todos-buttons ">
                  <i onClick={() => todoCompleted(elem._id)} className="material-icons blue-text">
                    check
                  </i>
                  <i onClick={() => todoImportant(elem._id)} className="material-icons orange-text">warning</i>
                  <i
                    className="material-icons red-text"
                    onClick={() => deleteTodoHandler(elem._id)}
                  >
                    delete
                  </i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
