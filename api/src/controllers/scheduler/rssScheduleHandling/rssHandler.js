const { rssParser } = require('./rssParser');
const { create, findByMonthRange } = require('../../news/news.service');
const { findAll } = require('../../rssSource/rssSource.service');

const MONTH_RANGE = 2;

async function rssHandler() {
  const rssSources = await findAll().populate('category');
  const existingNews = await findByMonthRange(MONTH_RANGE);
  const newFeeds = [];
  for (const rssSource of rssSources) {
    const feeds = await rssParser(
      rssSource.sourceLink,
      rssSource.category._id,
      rssSource.sourceType,
      rssSource.sourceName
    );
    for (feedItem of feeds) {
      const isExisting = existingNews.some((existing) => existing.link === feedItem.link);
      if (!isExisting) {
        newFeeds.push(feedItem);
      }
    }
  }
  for (const feed of newFeeds) {
    await create(feed);
  }
  return newFeeds;
}

module.exports = rssHandler;
