"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinsAnalysis_1 = require("./analyzer/WinsAnalysis");
const ConsoleReport_1 = require("./reports/ConsoleReport");
const HtmlReport_1 = require("./reports/HtmlReport");
class Summary {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    static winsAnalysisWithHtmlReport(team, matches) {
        new Summary(new WinsAnalysis_1.WinsAnalysis(team), new HtmlReport_1.HtmlReport()).buildAndReport(matches);
    }
    static winsAnalysisWithConsoleReport(team, matches) {
        new Summary(new WinsAnalysis_1.WinsAnalysis(team), new ConsoleReport_1.ConsoleReport()).buildAndReport(matches);
    }
    buildAndReport(matches) {
        const report = this.analyzer.run(matches);
        this.outputTarget.print(report);
    }
}
exports.Summary = Summary;
