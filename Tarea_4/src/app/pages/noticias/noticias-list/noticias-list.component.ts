import { Component, OnInit, Input, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { NoticiaService } from 'src/app/shared/services/noticia.service';

@Component({
  selector: 'app-noticias-list',
  templateUrl: './noticias-list.component.html',
  styleUrls: ['./noticias-list.component.scss']
})
export class NoticiasListComponent implements OnInit {
  
  @Input() noticias: any = {};
  @Output() current: EventEmitter<any> = new EventEmitter();

  constructor(private noticiaService: NoticiaService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Llegaron cambios: ', changes);
  }

  selectNoticia(noticia: any) {
    console.log('hiciste click');
    this.noticiaService.setCurrentNoticia(noticia);
    this.current.emit(noticia);
  }
}
