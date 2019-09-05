document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');


  const handleFormSubmit = function (event) {
    event.preventDefault();
    const resultParagraph = document.querySelector('#reading-list');
    resultParagraph.textContent = `Your reading list is ${event.target.title.value}
    ${event.target.author.value} ${event.target.category.value}`;
    document.getElementById('new-item-form').reset();
  };

console.log();

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);





});
