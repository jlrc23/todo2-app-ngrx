import { createReducer, on } from '@ngrx/store';
import { crear, toggle, editar, borrar, toggleStatus, limpiarTodos} from './todo.actions';
import { Todo } from './models/todo.model';
 
export const estadoInicial: Todo[]  = [
    new Todo("Salvar el mundo")
];
 
const _todoReducer = createReducer(estadoInicial,
  on(limpiarTodos, state=>state.filter(todo=>!todo.completado)),
  on(crear, (state, {texto}) => [...state, new Todo(texto)]),
  on(borrar, (state, {id}) => state.filter( todo => todo.id !== id)),
  on(toggle, (state, {id})=>{
    return state.map( todo => {
      if(todo.id === id )
        return {...todo, completado: !todo.completado};
      return todo;
    });
  }),
  on(editar, (state, {id, texto})=>{
    return state.map( todo => {
      if(todo.id === id )
        return {...todo, texto};
      return todo;
    });
  }),
  on(toggleStatus, (state, {completado}) => state.map(todo =>({...todo, completado}) ) )
);
 
export function todoReducer(state, action) {
  return _todoReducer(state, action);
}