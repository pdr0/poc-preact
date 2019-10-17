#!/usr/bin/env node
const lighthouseRunner = require('../src/lighthouse/lighthouse-runner')
const fs = require('fs')
const [first, second, url] = process.argv
const ReportGenerator = require('lighthouse/lighthouse-core/report/report-generator')

const REPORT_FILE_NAME = 'lighthouse-scan.html'

let results = lighthouseRunner(url).then((results) => {
  const html = ReportGenerator.generateReport(results.lhr, 'html')
  fs.writeFileSync(REPORT_FILE_NAME, html)
  console.log('Report saved in ' + REPORT_FILE_NAME)
})
