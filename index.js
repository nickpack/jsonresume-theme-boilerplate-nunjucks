const nunjucks = require('nunjucks');
const dateFilter = require('nunjucks-date-filter');
const fs = require('fs');

const render = (resume) => {
  const css = fs.readFileSync(`${__dirname}/style.css`, 'utf-8');
  const nunjucksEnv = nunjucks.configure('views', { autoescape: true });
  nunjucksEnv.addFilter('date', dateFilter);
  return nunjucksEnv.render('resume.njk', { resume, css });
};

module.exports = {
  render,
};
