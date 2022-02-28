import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.withCsvFileReader('football.csv');

matchReader.load();

const { matches } = matchReader;

Summary.winsAnalysisWithConsoleReport('Man United', matches);
