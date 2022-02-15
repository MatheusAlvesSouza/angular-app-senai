import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vaga } from '../models/vaga.model';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-detalhe-vaga',
  templateUrl: './detalhe-vaga.component.html',
  styleUrls: ['./detalhe-vaga.component.css']
})
export class DetalheVagaComponent implements OnInit {

  private id: string | null = "";
  public vaga: Vaga = new Vaga(1, "", "", "", 0);
  constructor(private route: ActivatedRoute, private vagasService: VagasService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id)
      this.vagasService.getById(this.id).subscribe(obj => 
        this.vaga = new Vaga(obj.id, obj.nome, obj.foto, obj.descricao, obj.salario));
  }

}
