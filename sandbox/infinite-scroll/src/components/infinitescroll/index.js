import React from "react";

class Infinitescroll extends React.Component {
  state = {
    articles: [],
    limit: 5,
    page: 1
  };

  loadArticles = () => {
    const { limit, page } = this.state;
    const API = `http://127.0.0.1:3000/posts?_limit=${limit}&_page=${page}`;
    fetch(API)
      .then((response) => response.json())
      .then((json) =>
        this.setState({
          articles: this.state.articles.concat(json)
        })
      );
  };

  loadMore = () => {
    this.setState(
      (prevState) => ({
        page: prevState.page + 1
      }),
      this.loadArticles
    );
  };

  handleScroll = () => {
    var lastLi = document.querySelector("ul > li:last-child");
    var lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
    var pageOffset = window.pageYOffset + window.innerHeight;
    if (pageOffset > lastLiOffset) {
      this.loadMore();
    }
  };

  componentDidMount() {
    this.loadArticles();
    this.scrollListener = window.addEventListener("scroll", (e) => {
      this.handleScroll(e);
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.articles.map((article, index) => (
            <li key={index}>
              <div>
                <div>
                  <a href={article.url}><img src={article.thumb} width="400" /></a>
                </div>
                <div><a href={article.url}>{article.title}</a></div>
                <div>{article.date}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Infinitescroll;
