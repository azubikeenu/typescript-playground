"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const matchReader = MatchReader_1.MatchReader.withCsvFileReader('football.csv');
matchReader.load();
const { matches } = matchReader;
Summary_1.Summary.winsAnalysisWithConsoleReport('Man United', matches);
