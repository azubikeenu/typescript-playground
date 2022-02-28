import { WinsAnalysis } from './analyzer/WinsAnalysis';
import { MatchData } from './MatchData';
import { ConsoleReport } from './reports/ConsoleReport';
import { HtmlReport } from './reports/HtmlReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
  static winsAnalysisWithHtmlReport(team: string, matches: MatchData[]): void {
    new Summary(new WinsAnalysis(team), new HtmlReport()).buildAndReport(
      matches
    );
  }
  static winsAnalysisWithConsoleReport(
    team: string,
    matches: MatchData[]
  ): void {
    new Summary(new WinsAnalysis(team), new ConsoleReport()).buildAndReport(
      matches
    );
  }
  buildAndReport(matches: MatchData[]): void {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }
}
