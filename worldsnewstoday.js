document.addEventListener('DOMContentLoaded', () => {
    const newsList = document.getElementById('news-list');

    
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=b6cf7e6c110f4650a99cf96397854fef')
      .then(response => response.json())
      .then(data => {
        data.articles.forEach(article => {
          const newsItem = document.createElement('ion-item');
  
          const newsContent = document.createElement('ion-label');
          newsContent.className = 'news-content';
  
          const newsTitle = document.createElement('h2');
          newsTitle.textContent = article.title;
          newsContent.appendChild(newsTitle);
          
          const newsDescription = document.createElement('p');
          newsDescription.textContent = article.description;
          newsContent.appendChild(newsDescription);
  
          const newsUrl = document.createElement('a');
          newsUrl.href = article.url;
          newsUrl.textContent = article.url;
          newsUrl.target = '_blank';
          newsContent.appendChild(newsUrl);
  
          newsItem.appendChild(newsContent);
          newsList.appendChild(newsItem);

    
        });
      })
      .catch(error => console.error('Error fetching news data:', error));
  });
  