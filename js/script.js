"use strict";

const MAX_LENGTH = 200;

const authors = ['Tyrone', 'Ava', 'Elijah', 'Lucas', 'Ebony', 'Keisha', 'Jemila', 'Daniel'];

const articles = [
  {
    title: 'CSS Selectors',
    author: 'Tyrone',
    date: new Date(2023, 1, 20),
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolore? Eveniet numquam quam qui quae laboriosam maxime deleniti aperiam quasi culpa veniam, voluptatibus molestias soluta error ratione assumenda sunt. Sapiente doloribus, nulla a tempora assumenda nostrum est enim corporis fugit quasi ipsam eveniet distinctio impedit dolorum eum dolor. Distinctio, reiciendis!'
  },

  {
    title: 'Cascading',
    author: 'Jemila',
    date: new Date(2023, 2, 1),
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, voluptatum iste? Nisi exercitationem, consectetur unde ab placeat nemo deserunt consequuntur.'
  },

  {
    title: 'CSS Grid',
    author: 'Keisha',
    date: new Date(2023, 2, 12),
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur laboriosam aliquam debitis dolores dolorem corporis ipsum itaque culpa, et eaque? Aliquam, est eveniet voluptatem nemo doloremque esse odit dolorum dicta consectetur ipsam corrupti perspiciatis voluptas cupiditate et sapiente. Eligendi modi fugiat pariatur facere, molestiae nihil accusamus animi a impedit laboriosam tempora, eum in iure tenetur fugit praesentium consectetur mollitia ut obcaecati delectus ipsa dolores commodi? Rerum, temporibus velit eum iste praesentium modi amet molestiae illum enim quos pariatur quasi vero quidem, minus placeat assumenda recusandae fugit sunt voluptatem est neque qui! Ut optio quis accusamus placeat ipsa laboriosam laborum debitis.'
  }
];

articles.forEach(article=>{
  addEntry(article);
});


/**
 * This function creates a DOM elment with information from the article object, and adds the element into the DOM.
 * @param {object} article - an article
 */
function addEntry(article) {
  const articleElement = document.createElement('article');
  articleElement.classList.add('article-container');
  const articlesWrapper = document.querySelector('.articles-wrapper');
  articlesWrapper.appendChild(articleElement);

  const deleteButton = document.createElement('button');
  deleteButton.textContent='✕';
  deleteButton.classList.add('delete-btn');
  articleElement.appendChild(deleteButton);

  const headerDiv = document.createElement('div');
  headerDiv.classList.add('article-header');
  const avatar = document.createElement('img');
  avatar.classList.add('avatar');
  const authorIndex = authors.indexOf(article.author);
  if (authorIndex !== -1)
  {
    avatar.src = `images/avatar${authorIndex}.png`;
  }
  else
  {
    avatar.src = 'images/default.jpeg'
  }
  avatar.alt = 'avatar picture';
  const authorDateDiv = document.createElement('div');
  authorDateDiv.textContent = `${article.author} · ${article.date.toDateString()}`;
  headerDiv.appendChild(avatar);
  headerDiv.appendChild(authorDateDiv);
  articleElement.appendChild(headerDiv);

  const bodyDiv = document.createElement('div');
  bodyDiv.classList.add('article-body');
  const h3 = document.createElement('h3');
  h3.textContent = article.title;
  const p = document.createElement('p');
  p.textContent = article.content;
  bodyDiv.appendChild(h3);
  bodyDiv.appendChild(p);
  articleElement.appendChild(bodyDiv);

  if (article.content.length <= MAX_LENGTH)
  {
    p.textContent = article.content;
    bodyDiv.appendChild(p);
  }
  else
  {
    const firstSubstring = article.content.substring(0, MAX_LENGTH);
    const secondSubstring = article.content.substring(MAX_LENGTH);
    p.textContent = firstSubstring;

    const dotSpan = document.createElement('span');
    dotSpan.textContent = '...';
    const hiddenSpan = document.createElement('span');
    hiddenSpan.classList.add('hidden');
    hiddenSpan.textContent = secondSubstring;
    const readMoreButton = document.createElement('button');
    readMoreButton.classList.add('btn');
    readMoreButton.textContent = 'Read More';
    p.appendChild(dotSpan);
    p.appendChild(hiddenSpan);
    bodyDiv.appendChild(p);
    bodyDiv.appendChild(readMoreButton);

  }

  articleElement.appendChild(bodyDiv);
}