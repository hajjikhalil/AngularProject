import { Injectable } from '@angular/core';

@Injectable()

export class Todo{
    userId! :number;
    id! :number;
    title! :string;
    completed! : boolean;
    }