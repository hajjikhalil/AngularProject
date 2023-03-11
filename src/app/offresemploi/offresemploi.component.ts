import { Component, OnInit } from '@angular/core';
import { Emploi } from 'src/model/emploi';

@Component({
  selector: 'app-offresemploi',
  templateUrl: './offresemploi.component.html',
  styleUrls: ['./offresemploi.component.css']
})
export class OffresemploiComponent implements OnInit {
listeEmploi: Emploi[] = [
  {
    reference: 'DEV123',
    titre: 'développeur',
    entreprise: 'VERMEG',
    etat: true
  },
  {
    reference: 'FOOT1889',
    titre: 'footballeur',
    entreprise: 'FC BARCELONE',
    etat: false
  },
  {
    reference: 'PIL94',
    titre: 'pilote',
    entreprise: 'TUNISAIR',
    etat: false
  }
];
nb: number;
nomEntreprise: string;

  constructor() { 
    this.nb = 0;
    this.nomEntreprise='';
  }

  ngOnInit(): void {
  }
  calculerNombreOffresNonCloturees() {
    const offresNonClotures = this.listeEmploi.filter(Emploi => Emploi.etat == false);
    this.nb = offresNonClotures.length;
    alert("il y a " + this.nb + " offres emploi non cloturees"); 
  }
  rechercher() {
    console.log('dgncnc');
     return this.listeEmploi = this.listeEmploi.filter(Emploi => Emploi.entreprise.includes(this.nomEntreprise));
    }

}
