import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);

  return (
    <div>
      <center>
        <h2>Add a todo</h2>
        <input
          type="text"
          placeholder="title"
          onChange={function (e) {
            setTitle(e.target.value);
          }}
        ></input>
        <br></br>
        <input
          type="text"
          placeholder="description"
          onChange={function (e) {
            console.log(e.target.value);
            setDescription(e.target.value);
          }}
        ></input>
        <br></br>
        <button
          onClick={function () {
            fetch("http://localhost:3000/todos", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ title: title, description: description }),
            }).then(async function (value) {
              const json = await value.json();
              alert(json.message);
            });
          }}
        >
          Add todos
        </button>
      </center>
    </div>
  );
}
