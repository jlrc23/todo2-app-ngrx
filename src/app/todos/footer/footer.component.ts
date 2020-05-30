import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { filtrosValidos } from 'src/app/filtro/filtro.actions';
import * as actions from '../../filtro/filtro.actions';
import {limpiarTodos } from '../todo.actions';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  filtroActual: filtrosValidos = 'todos';
  filtros: actions.filtrosValidos[] = [ 'todos', 'completados', 'pendientes'];
  pendientes: number = 0;
  
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(state=>{
      console.log(state);
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter(todo=>!todo.completado).length;
    });
  }

  cambiarFiltro(filtro: actions.filtrosValidos){
    this.store.dispatch(actions.setFiltro({filtro}));
  }

  limpiarCompletados(){
    this.store.dispatch(limpiarTodos());
  }

}
