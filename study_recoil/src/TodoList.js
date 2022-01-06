import {atom,useRecoilValue} from "recoil";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import TodoListStats from "./TodoListStats";
import TodoListFilters from "./TodoListFilters";
 
export const todoListState = atom({
    key: 'todoListState',
    default: [],
});


function TodoList (){
 const todoList = useRecoilValue(todoListState);
 return(
     <>
     adfas
        <TodoListStats />
        <TodoListFilters />
        <TodoItemCreator />

        {todoList.map((todoItem)=>{
            <TodoItem key={todoItem.id} item={todoItem}/>
        })}
     </>
 );
};

export default TodoList;
