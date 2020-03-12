import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';

interface IWindow extends Window{
  webkitSpeechRecognition:any;
}

@Injectable({
  providedIn: 'root'
})
export class PaybudService {
   
  constructor(private zone:NgZone) { }
  
  record(language:string):Observable<string>{
    return Observable.create(observer =>{
      const { webkitSpeechRecognition }: IWindow = <any>window;
      const recognition = new webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
    
      // recognition.onstart = function() { ... }  this.zone.run(()=>observer.next(e.results.item(e.results.length -1).item(0).transcript))
      //Funcion que obtieniene la voz
      recognition.onresult = e => this.zone.run(()=>observer.next(e.results.item(e.results.length -1).item(0).transcript))
      
      recognition.onerror =  e => observer.error(e);
      recognition.onend =  e => observer.complete();

      recognition.lang = language;
      recognition.start();
    })
  }
}
