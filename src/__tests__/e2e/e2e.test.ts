import puppeteer from 'puppeteer';

const baseUrl = 'http://localhost:3000';
let browser: puppeteer.Browser;
let page: puppeteer.Page;

jest.setTimeout(100000);

describe('e2e', () => {
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  it('Должен редиректить на "/news"', async () => {
    await page.goto(baseUrl);
    await page.screenshot({ path: './src/__tests__/e2e/page-news.png' });

    expect(page.url()).toMatch(/\/news/);
  });

  it('Должен открыть модальное окно', async () => {
    await page.goto(`${baseUrl}/news`);

    const button = await page.waitForXPath(
      '/html/body/div/main/section/div/div[2]/article[1]/div[2]/button',
    );
    await button.click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: './src/__tests__/e2e/page-news-modal.png' });

    expect(page.url()).toMatch(/\/news/);
  });

  it('Должен открыть полную страницу новости', async () => {
    await page.goto(`${baseUrl}/news`);

    const button = await page.waitForXPath(
      '/html/body/div/main/section/div/div[2]/article[1]/div[2]/button',
    );
    await button.click();
    await page.waitForTimeout(500);

    const link = await page.waitForXPath(
      '/html/body/div[2]/div/div[2]/div/div[2]/div[2]/a',
    );
    await link.click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: './src/__tests__/e2e/page-single.png' });

    expect(page.url()).toMatch(/\/single\//);
  });

  it('Должен переключить вид отображения на табличный', async () => {
    await page.goto(`${baseUrl}/news`);

    const linkView = await page.waitForXPath(
      '/html/body/div[1]/main/section/div/div[1]/a[1]',
    );
    await linkView.click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: './src/__tests__/e2e/page-news-grid.png' });

    expect(page.url()).toMatch(/\/news\/grid/);
  });

  it('Должен загрузить больше новостей', async () => {
    await page.goto(`${baseUrl}/news`);

    const button = await page.waitForXPath(
      '/html/body/div[1]/main/section/div/button',
    );
    await button.click();
    await page.waitForTimeout(500);
    await page.mouse.wheel({ deltaY: 400 });
    await page.screenshot({
      path: './src/__tests__/e2e/page-news-load-more.png',
    });

    expect(page.url()).toMatch(/\/news/);
  });

  it('Должен открыть "/about"', async () => {
    await page.goto(`${baseUrl}/about`);
    await page.screenshot({ path: './src/__tests__/e2e/page-about.png' });

    expect(page.url()).toMatch(/\/about/);
  });
});
