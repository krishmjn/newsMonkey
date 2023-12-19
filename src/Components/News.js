import React, { useState } from "react";
import { useEffect } from "react";
import Newscomponent from "./Newscomponent";

const News = () => {

  const [state, setState] = useState({
    articles: [],
    loading: true,
    page:1,
    totalResults:1
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=1228d09083524d7b9aaa47df2267edc2&page=1&pageSize=20"
      );
      let data = await response.json();
      // console.log(data.totalResults) 
      setState({
        articles: data.articles,
        loading: false,
        page:1,
        totalResults:data.totalResults
      });
    };

    fetchData();

  }, []);

  const handlePrevClick= async()=>{
    const fetchData = async () => {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=1228d09083524d7b9aaa47df2267edc2&page=${state.page-1}&pageSize=20`
      );
      let data = await response.json();
      // console.log(data.articles)
      setState({
        articles: data.articles,
        loading: false,
        page:state.page-1,
        totalResults:data.totalResults

      });
    };

    fetchData();
  }
  const handleNextClick= async()=>{
    if(state.page+1>Math.ceil(state.totalResults/20)){

    }
    else{
    const fetchData = async () => {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=1228d09083524d7b9aaa47df2267edc2&page=${state.page+1}&pageSize=20`
      );
      let data = await response.json();
      // console.log(data.articles)
      setState({
        articles: data.articles,
        loading: false,
        page:state.page+1,
        totalResults:data.totalResults

      });
    };

    fetchData();
  }
   
  }


  return (
    <div className="container my-3">
      <h1 className="text-center my-3">News Monkey - Top headlines</h1>
      <div className="row">
        {state.articles.map((element) => {
          return (
            <div className="col-md-4" key={element.title}>
              <Newscomponent
                title={element ? element.title.slice(0, 40) : ""}
                description={element ? element.description : ""}
                url={element ? element.url : ""}
                img={element ? element.urlToImage : ""}
              />
            </div>
          );
        })}
      </div>
      <div className="container my-2 d-flex justify-content-between">
      <button type="button" onClick={handlePrevClick} disabled={state.page<=1 ? true : false} className="btn btn-dark">&larr; Previous </button>
      <button type="button" disabled={(state.page+1>Math.ceil(state.totalResults/20)) ? true : false} onClick={handleNextClick} className="btn btn-dark"> Next &rarr;</button>
       </div>
    </div>
  );
};

export default News;
