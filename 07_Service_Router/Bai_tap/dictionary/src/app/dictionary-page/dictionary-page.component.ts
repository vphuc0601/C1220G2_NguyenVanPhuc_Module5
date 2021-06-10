import { Component, OnInit } from '@angular/core';
import {DictionaryService} from '../service/dictionary.service';
import {IWord} from '../model/iword';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  listWord: IWord[] = [];
  constructor(
    private dictionaryService: DictionaryService
  ) { }

  ngOnInit() {
    this.listWord = this.dictionaryService.getAll();
  }

}
