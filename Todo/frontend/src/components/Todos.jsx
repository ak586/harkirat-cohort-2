/* eslint-disable react/jsx-key */
export function Todos({ todos }) {
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <p>{todo._id}</p>
            <button
              onClick={function (e) {
                if (e.target.innerHTML != "Completed") {
                  fetch(`http://localhost:3000/todos/${todo._id}`, {
                    method: "PUT",
                  }).then(async function (data) {
                    const message = await data.json();
                    alert(message.message);
                  });
                } else {
                  alert("This task is already completed");
                }
              }}
            >
              {todo.completed == true ? "Completed" : "Mark as complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
