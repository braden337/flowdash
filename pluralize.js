function pluralize(count, singular, plural) {
  let word = count === 1 ? singular : plural;
  return `${count} ${word}`;
}

module.exports = pluralize;
