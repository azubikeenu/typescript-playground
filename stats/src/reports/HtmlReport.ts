import { OutputTarget } from '../Summary';
import { writeFileSync } from 'fs';

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const output = `
        <div>
            <h1> Analysis Report</h1>
             <p>${report}</p>
        </div>
      `;
    writeFileSync('report.html', output);
  }
}
