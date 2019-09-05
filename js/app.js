document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');


  const handleFormSubmit = function (event) {
    event.preventDefault();

    const newReadingList = document.createElement('p');
    const list = document.querySelector('ul')
    newReadingList.textContent = `Your reading list is ${event.target.title.value}
    ${event.target.author.value} ${event.target.category.value}`;
    // newReadingList.classList.add(ul)
    list.appendChild(newReadingList);

    document.getElementById('new-item-form').reset();
  };



  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);





});
