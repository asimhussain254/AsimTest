import { Injectable } from '@angular/core';

export class Message {
  content: string;
  style: string;
  dismissed: boolean = false;
  constructor(content, style) {
    this.content = content;
    this.style = style || 'info';
  }
}
@Injectable()
export class ToastService {

  constructor() { }
  getMessage( ){
    
  }
}