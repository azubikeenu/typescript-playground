import { readFileSync } from 'fs';
import path from 'path';
import { DataReader } from './DataReader';

export class CsvFileReader implements DataReader {
  data: string[][] = [];
  constructor(public fileName: string) {}
  read(): void {
    this.data = readFileSync(path.join(__dirname, '..', this.fileName), {
      encoding: 'utf-8',
    })
      .split('\n')
      .map((match: string): string[] => match.split(','));
  }
}
