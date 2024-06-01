const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`

async function fetchNews() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      displayNews(data.articles);
    } catch (error) {
      console.error('There was an error!', error);
    }
  }

  function displayNews(articles) {
    const newsDiv = document.querySelector('#news');
    for (const article of articles) {
        const articleDiv = document.createElement('div');
           
        // This code creates a new paragraph element, sets its text content to 
        // include the source name of an article, and then appends this paragraph 
        // element to a div with the id "articleDiv".
        const source = document.createElement('p');
        source.textContent = `Source: ${article.source.name}`;
        articleDiv.appendChild(source);
        
        // This code creates a paragraph element, sets its text content to 
        // include the author of an article, and appends it to a div element with the id "articleDiv".
        const author = document.createElement('p');
        author.textContent = `Author: ${article.author}`;
        articleDiv.appendChild(author);
 
        // This code creates an <h4> element, sets its text content to article.title, 
        // and appends it to the articleDiv element.
        const title = document.createElement('h4');
        title.textContent = article.title;
        articleDiv.appendChild(title);
    
        // This code creates a new paragraph element (<p>) using JavaScript, 
        // sets its text content to the value of article.description, and then appends 
        // this paragraph element to an element with the id articleDiv.
        const description = document.createElement('p');
        description.textContent = article.description;
        articleDiv.appendChild(description);
        
        // This code creates a link element (<a>) with the URL of the full article and 
        // adds it to the articleDiv along with the other article details.
        const urlLink = document.createElement('a');
        urlLink.href = article.url;
        urlLink.textContent = 'Read more';
        articleDiv.appendChild(urlLink);

        // This code creates an image element (<img>) using document.createElement('img'), 
        // sets its src attribute to article.urlToImage, and then appends this image element 
        // to an element with the id articleDiv.
        const urlToImage = document.createElement('img');
        urlToImage.src = article.urlToImage;
        articleDiv.appendChild(urlToImage);
        
        // This code creates a new paragraph element, sets its text content  
        // to display the published date of an article in a human-readable format, and  
        // then appends this paragraph element to a div element with the id "articleDiv".
        const publishedAt = document.createElement('p');
        publishedAt.textContent = `Published At: ${new Date(article.publishedAt).toLocaleString()}`;
        articleDiv.appendChild(publishedAt);
        
        newsDiv.appendChild(articleDiv);
    }
}
  
  fetchNews();