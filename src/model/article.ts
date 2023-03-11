import { Injectable } from '@angular/core';

@Injectable()
export class Article {
titre! : string;
contenu! : string;
auteur! : string;
date! : string;
categorie! : string;

}