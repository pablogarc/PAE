import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NoticiaService } from 'src/app/shared/services/noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {
  
  noticias: any  = [];
  cargando: boolean = false;

  zelda: string = 'http://google.com';
  search: string = '';
  lastSearch: string = '';
  current: any = {};

  constructor(
    private servicioDeNoticias: NoticiaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      console.log('Parametros', params);
      this.search = params['q'];
      if (this.search !== null){
        this.buscar()
      }
    });
  }

  setCurrent(current: any) {
    this.current = current;
  }

  buscar(e?: any): void {
    this.router.navigate(
      ['/noticias'],
      {
        queryParams: { q: this.search },
        queryParamsHandling: "merge"
      }
    );
    this.cargando = true;
    this.servicioDeNoticias.getNoticias(this.search).subscribe({
      next: (response) => {
        this.lastSearch = this.search;
        this.noticias = response.articles;
        this.cargando = false;
      },
      error: (err: any) => {
        console.log('Ocurrio un error', err);
      }
    });
  }

  
  selectNoticia(noticia: any) {
    this.current = noticia;
    this.servicioDeNoticias.setCurrentNoticia(noticia);
  }

  clearCurrent() {
    this.current = {};
  }
}
