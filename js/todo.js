const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

const TODOS_KEY ="todos"

let toDos = []; // 비어있으면 새로운 todo입력할 떄 마다 오래된 것은 덮어져버리게 된다.

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    //console.log(typeof li.id); 데이터 타입을 알아보기 위한 코드
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); 
    //클릭한 id는 number //li.id는 string type이므로 
    //parseInt로 문자열을 숫자로 바꿔준다.
    saveToDos(); //saveToDos 한번 더 불러준다.
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;  //obj text
    const button = document.createElement("button");
    button.innerText = "X"
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; //input value를 변수에 저장
    toDoInput.value="";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(), //각 todo리스트마다 다른 아이디를 부여.
    }
    toDos.push(newTodoObj); //사용자가 적은 text를 push
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

// item을 제외하는 게 아닌 item을 제외한 새로운 배열을 만드는.

