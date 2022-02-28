import { readFileSync } from 'fs';
import path from 'path';
export abstract class CsvFileReader<T> {
  abstract mapRow(row: string[]): T;
  data: T[] = [];
  constructor(public fileName: string) {}
  read(): void {
    this.data = readFileSync(path.join(__dirname, '..', this.fileName), {
      encoding: 'utf-8',
    })
      .split('\n')
      .map((match: string): string[] => match.split(','))
      .map(this.mapRow);
  }
}
