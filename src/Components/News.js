import React, { useState } from "react";
import { useEffect } from "react";
import Newscomponent from "./Newscomponent";

const News = () => {
  // const articles=[
  //     {
  //     "source": {
  //     "id": "google-news",
  //     "name": "Google News"
  //     },
  //     "author": "The Age",
  //     "title": "Australia v Pakistan Test cricket LIVE updates: Aussies chase winning total in Perth - The Age",
  //     "description": null,
  //     "url": "https://news.google.com/rss/articles/CBMifWh0dHBzOi8vd3d3LnRoZWFnZS5jb20uYXUvc3BvcnQvY3JpY2tldC9hdXN0cmFsaWEtdi1wYWtpc3Rhbi10ZXN0LWNyaWNrZXQtbGl2ZS11cGRhdGVzLWRheS1mb3VyLWluLXBlcnRoLTIwMjMxMjE2LXA1ZXJ5MS5odG1s0gEA?oc=5",
  //     "urlToImage": null,
  //     "publishedAt": "2023-12-17T04:01:12Z",
  //     "content": null
  //     },
  //     {
  //     "source": {
  //     "id": "google-news",
  //     "name": "Google News"
  //     },
  //     "author": "Fox Sports",
  //     "title": "Cricket news 2023: Harry Brook smacks 24 runs off final over, England def West Indies, T20 series, Phil Salt century, score, result, latest, updates - Fox Sports",
  //     "description": null,
  //     "url": "https://news.google.com/rss/articles/CBMisQFodHRwczovL3d3dy5mb3hzcG9ydHMuY29tLmF1L2NyaWNrZXQvcmlkaWN1bG91cy1iYXR0aW5nLWVuZ2xhbmQtc3Rhci1oaXRzLTI0LXJ1bnMtaW4tZmluYWwtb3Zlci1hcy1wb21zLXB1bGwtb2ZmLWFic3VyZC13aW5kaWVzLWhlaXN0L25ld3Mtc3RvcnkvYzgxMTMxZTg1Nzc3MTkzYjFhMjdkYjlkM2QxZGU4MDPSAQA?oc=5",
  //     "urlToImage": null,
  //     "publishedAt": "2023-12-16T22:24:30Z",
  //     "content": null
  //     },
  //     {
  //     "source": {
  //     "id": "google-news",
  //     "name": "Google News"
  //     },
  //     "author": "cricket.com.au",
  //     "title": "Labuschagne sent for scans as Perth pitch opens up | cricket.com.au - cricket.com.au",
  //     "description": null,
  //     "url": "https://news.google.com/rss/articles/CBMihwFodHRwczovL3d3dy5jcmlja2V0LmNvbS5hdS9uZXdzLzM4MjQzNDcvbWFybnVzLWxhYnVzY2hhZ25lLXNjYW5zLWZpbmdlci1hdXN0cmFsaWEtcGFraXN0YW4tZmlyc3QtdGVzdC1kYXktdGhyZWUtcGVydGgtcGl0Y2gtc3RldmUtc21pdGjSAQA?oc=5",
  //     "urlToImage": null,
  //     "publishedAt": "2023-12-16T11:13:37Z",
  //     "content": null
  //     },
  //     {
  //     "source": {
  //     "id": "google-news",
  //     "name": "Google News"
  //     },
  //     "author": "cricket.com.au",
  //     "title": "India record crushing Test win over England | cricket.com.au - cricket.com.au",
  //     "description": null,
  //     "url": "https://news.google.com/rss/articles/CBMib2h0dHBzOi8vd3d3LmNyaWNrZXQuY29tLmF1L25ld3MvMzgyNDMwMi9pbmRpYS1lbmdsYW5kLXdvbWVucy10ZXN0LXJlY29yZC1icmVha2luZy1zY29yZWNhcmQtbWF0Y2gtcmVwb3J0LW11bWJhadIBAA?oc=5",
  //     "urlToImage": null,
  //     "publishedAt": "2023-12-16T09:06:37Z",
  //     "content": null
  //     },
  //     {
  //     "source": {
  //     "id": "google-news",
  //     "name": "Google News"
  //     },
  //     "author": "Fox Sports",
  //     "title": "Cricket Australia explain reasons for Usman Khawaja message ban - Fox Sports",
  //     "description": null,
  //     "url": "https://news.google.com/rss/articles/CBMirQFodHRwczovL3d3dy5mb3hzcG9ydHMuY29tLmF1L2NyaWNrZXQvYXVzdHJhbGlhL25pY2staG9ja2V5LXJldmVhbHMtZnVsbC1yZWFzb25zLWZvci1zdG9wcGluZy11c21hbi1raGF3YWphcy1odW1hbml0YXJpYW4tbWVzc2FnZXMvbmV3cy1zdG9yeS85YjRiODliYzZhYWNkZTg2ZTYzMmFjMzZlOTNiMDE1OdIBAA?oc=5",
  //     "urlToImage": null,
  //     "publishedAt": "2023-12-15T11:11:01Z",
  //     "content": null

  //     }]

  const [state, setState] = useState({
    articles: [],
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=1228d09083524d7b9aaa47df2267edc2"
      );
      let data = await response.json();
      // console.log(data.articles)
      setState({
        articles: data.articles,
        loading: false,
      });
    };

    fetchData();
  }, []);

  return (
    <div className="container my-3">
      <h1>News Monkey - Top headlines</h1>
      <div className="row">
        {state.articles.map((element) => {
          return (
            <div className="col-md-4" key={element.author}>
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
    </div>
  );
};

export default News;
