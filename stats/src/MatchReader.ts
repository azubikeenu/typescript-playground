import { CsvFileReader } from './CsvFileReader';
import { DataReader } from './DataReader';
import { MatchData } from './MatchData';
import { MatchResult } from './MatchResult';
import { dateStringToDate } from './utils';

export class MatchReader {
  matches: MatchData[] = [];
  constructor(public reader: DataReader) {}
  static withCsvFileReader(fileName: string): MatchReader {
    return new MatchReader(new CsvFileReader(fileName));
  }
  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ];
    });
  }
}
