import * as os from 'os';
const report = require ('multiple-cucumber-html-reporter');

interface PlatformInfo {
    name: string;
    version: string;
}

function getPlatformInfo(): PlatformInfo {
    return {
        name: os.platform(),
        version: os.release()
    };
}

function generateReport() {
    const platformInfo: PlatformInfo = getPlatformInfo();
    report.generate({
        jsonDir: "test-results",
        openReportInBrowser:true,
        reportPath: "./",
        reportName: "Automation Test Report",
        displayDuration: true,
        metadata: {
            browser: {
                name: "Chrome",
                version: "125",
            },
            device: os.hostname(),
            platform: platformInfo,
        },
    });
}
generateReport();