import { Component, OnInit } from '@angular/core';
import { Cowboy1 } from '../../models/vaquero1.model';
import { Vaquero1Service } from '../../services/vaquero1.service';
import { Cowboy2 } from '../../models/vaquero2.model';
import { Vaquero2Service } from '../../services/vaquero2.service';
import { SherrifService } from '../../services/sherrif.service';
import { Sherrif } from '../../models/sherrif.model';
import { Suttler } from '../../models/sam.model';
import { SamService } from '../../services/sam.service';
import { Narrator } from '../../models/narrator.model';
import { NarratorService } from '../../services/narrator.service';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit {
  Cowboy1!: Cowboy1;
  dialogue!: string;
  Cowboy2!: Cowboy2;
  dialogue2!: string;
  Sherrif!: Sherrif;
  dialogue3!: string;
  Suttler!: Suttler;
  dialogue4!: string;
  Narrator!: Narrator;
  narrator1!: string;
  narrator2!: string;
  narrator3!: string;

  
  constructor(private vaquero1Service:Vaquero1Service, private vaquero2Service:Vaquero2Service, private sherrifService: SherrifService,  private suttlerService: SamService, private narrtorService:NarratorService ) {}

  ngOnInit(): void {
    this.Cowboy1 = this.vaquero1Service.getVaquero1();
    this.dialogue = this.vaquero1Service.dialogue();
    this.Cowboy2 = this.vaquero2Service.getVaquero2();
    this.dialogue2 = this.vaquero2Service.dialogue2();
    this.Sherrif = this.sherrifService.getSherrif();
    this.dialogue3 = this.sherrifService.dialogue3();
    this.Suttler = this.suttlerService.getSuttler();
    this.dialogue4 = this.suttlerService.dialogue4();
    this.narrator1 = this.narrtorService.narrator1();
    this.narrator2 = this.narrtorService.narrator2();
    this.narrator3 = this.narrtorService.narrator3();

  
  }
}
