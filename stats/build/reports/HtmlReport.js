"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReport = void 0;
const fs_1 = require("fs");
class HtmlReport {
    print(report) {
        const output = `
        <div>
            <h1> Analysis Report</h1>
             <p>${report}</p>
        </div>
      `;
        (0, fs_1.writeFileSync)('report.html', output);
    }
}
exports.HtmlReport = HtmlReport;
