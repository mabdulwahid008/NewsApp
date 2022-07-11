import React, { Component } from 'react'//rce
import Loading from './Loading';
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {


      articles = [];
      constructor(){
          super();
          this.state = {
              articles : this.articles,
              loading : true,
              page : 1,
          }
      };
  async updateNews() {
    //  this.props.setPrgs(50);
   const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=eec12d2fae404dae8bbb6af096b23678&page=${this.state.page}&pagesize=6`;
    let data = await fetch(url);
    let proccessData = await data.json();
    this.setState({
      articles : proccessData.articles, 
      totalResults: proccessData.totalResults,
      loading : false,
    });
  }   
      
  async componentDidMount(){
    this.updateNews();
  }  
  handleNextClick = async() => {
      this.setState({page : ++this.state.page});
      this.updateNews();
 }
  handlePrevClick = async() => {
      this.setState({page: this.state.page - 1});
      this.updateNews();
 }

 fetchMoreData = async() => {
   this.setState({page : this.state.page + 1})
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=eec12d2fae404dae8bbb6af096b23678&page=${this.state.page}&pagesize=6`;
  let data = await fetch(url);
  let proccessData = await data.json();
  this.setState({
    articles : this.state.articles.concat(proccessData.articles), 
    totalResults: proccessData.totalResults,
  });
};


  render() {
    return (
      <>
      
       
       <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={!this.state.loading && <Loading/>}
          >
        <div className='container'>
          <div className="row my-4">
              <h2 className='mb-4'>NEWS - Headlines</h2>
              {this.state.loading && <Loading/>}
              {!this.state.loading && this.state.articles.map((element) => {
                return <div className="col-md-4 mb-4" key={element.url}>
                <NewsItem title={element.title} description={element.description == null? "null" : element.description } imageUrl={element.urlToImage} url={element.url}/>
                </div>
              })}
              </div>
              </div>
          </InfiniteScroll>

          {/* <div className="d-flex justify-content-between mb-5">
            <button type='button' className='btn btn-sm btn-dark' disabled={this.state.page<=1} onClick={this.handlePrevClick}>&larr; Previous</button>
            <button type='button' className='btn btn-sm btn-dark' disabled={this.state.page+1 > Math.ceil(this.state.totalResults/3)} onClick={this.handleNextClick}>Next &rarr;</button>
          </div> */}
          </>
    )
  }
}

export default News
