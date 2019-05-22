/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

class Article {
  constructor(domElement) {
    this.domElement = domElement;
    this.expandButton = this.domElement.querySelector('.expandButton');
    this.expandButton.innerText = 'expand';
    
    this.expandButton.addEventListener('click', () => { this.expandArticle() });
    
    // Explicit binding
    // this.expandButton.addEventListener("click", this.expandArticle.bind(this));
  }

  expandArticle() {
    this.domElement.classList.toggle('article-open');
  }
}

let articles = document.querySelectorAll('.article').forEach( article => {
  new Article(article);
});
