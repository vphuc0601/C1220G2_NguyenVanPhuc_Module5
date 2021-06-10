import { Injectable } from '@angular/core';
import {IWord} from '../model/iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private words: IWord[] = [
    {
      key: 'hello',
      meaning: 'xin chào'
    }, {
      key: 'customer',
      meaning: 'khách hàng'
    }, {
      key: 'noun',
      meaning: 'danh từ'
    }, {
      key: 'bad',
      meaning: 'xấu'
    }, {
      key: 'goodbye',
      meaning: 'chào tạm biệt'
    }
  ];
  constructor() { }
  search(word: string): string {
    if (!word) {
      return '';
    }
    const w = this.words.find(item => item.key === word.toLowerCase());
    if (w) {
      return w.meaning;
    }
    return 'Not found';
  }

  getAll(): IWord[] {
    return this.words;
  }
}
