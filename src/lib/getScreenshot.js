import * as chromeAwsLambda from 'chrome-aws-lambda';
import { launch } from 'puppeteer-core';

export async function getScreenshot(url, type) {
    const browser = await launch({
        args: chromeAwsLambda.args,
        executablePath: await chromeAwsLambda.executablePath,
        headless: chromeAwsLambda.headless,
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 2048, height: 1170 });
    await page.goto(url);
    const file = await page.screenshot({ type });
    await browser.close();
    return file;
}