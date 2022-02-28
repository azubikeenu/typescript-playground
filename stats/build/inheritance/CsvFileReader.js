"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
class CsvFileReader {
    constructor(fileName) {
        this.fileName = fileName;
        this.data = [];
    }
    read() {
        this.data = (0, fs_1.readFileSync)(path_1.default.join(__dirname, '..', this.fileName), {
            encoding: 'utf-8',
        })
            .split('\n')
            .map((match) => match.split(','))
            .map(this.mapRow);
    }
}
exports.CsvFileReader = CsvFileReader;
