import { Component, OnInit, Input, Output, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-noticias-list',
  templateUrl: './noticias-list.component.html',
  styleUrls: ['./noticias-list.component.scss']
})
export class NoticiasListComponent implements OnInit {
  
  @Input() noticias: any = {};
  @Output() current: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Llegaron cambios: ', changes);
  }

  selectNoticia(noticia: any) {
    console.log('hiciste click')
    this.current.emit(noticia);
  }
}
