import { Component, OnInit } from '@angular/core';
import { VagasService } from '../vagas.service';
import { Vaga } from '../models/vaga.model';

@Component({
  selector: 'app-mural-vagas',
  templateUrl: './mural-vagas.component.html',
  styleUrls: ['./mural-vagas.component.css']
})
export class MuralVagasComponent implements OnInit {
  public vagas: Vaga[] = [];

  constructor(private _vagasService: VagasService) { }

  ngOnInit(): void {
    this.listarVagas();
  }

  listarVagas() {
    this._vagasService.getVagas().subscribe(
      retornaVagas =>  
        this.vagas = retornaVagas.map(
          item => new Vaga(item.id, item.nome, item.foto, item.descricao, item.salario)
        )
    )
  }
}
