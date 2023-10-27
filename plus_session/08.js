fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then(function (response) {
    response.json();
  })
  .catch(function () {})
  .then((json) => console.log(json));

result1 = fetch("https://jsonplaceholder.typicode.com/todos/1");
result2 = await result1.json();
