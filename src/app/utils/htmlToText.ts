import * as cheerio from 'cheerio';

export function htmlToText(html: string) {
  try {
    const $ = cheerio.load(html);

    let content = '';

    if ($('article').length) {
      content = $('article').text();
    } else if ($('main').length) {
      content = $('main').text();
    } else {
      content = $('p').text();
    }

    return content.replace(/\s\s+/g, ' ').trim();
  } catch (error) {
    console.error('Error fetching or parsing the URL:', error);
    return null;
  }
}
