import React, {useEffect, useState} from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=>{

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  
  //agr koi pass nhi kr re to default


const capitalizeFirstLetter=(string)=>{
  return string.charAt(0).toUpperCase()+string.slice(1);
}

   
const updateNews = async ()=>{
    props.setProgress(10);
    const url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json()
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }
  

  
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews(); 
    // eslint-disable-next-line
}, [])




// handlePreviousClick=async()=>{
// //   let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=1394063ae2844083a6a906295849cf29&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
// //   this.setState({loading:true});
// //   let data= await fetch(url);
// //   let parsedData=await data.json();

// // this.setState({
// //   page:this.state.page-1,
// //   articles:parsedData.articles,
// //   loading:false,
// // }) 

// await this.setState({
//     page: this.state.page - 1,
//   })
// this.updateNews();

  
// }
// handleNextClick=async()=>{
// //   let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=1394063ae2844083a6a906295849cf29&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
// //   this.setState({loading:true});
// //   if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){

// //   }
// //   else{
// //   let data= await fetch(url);

// //   let parsedData=await data.json();
// //   this.setState({
// //   page:this.state.page+1,
// //   articles:parsedData.articles,
// //   loading:false,
// // })
// //   }

// await this.setState({
//   page:this.state.page+1,
// })
// this.updateNews();

// }


const fetchMoreData = async() => {

 const url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
setPage(page+1);
 let data= await fetch(url);

 let parsedData=await data.json();
 setArticles(articles.concat(parsedData.articles))
 setTotalResults(parsedData.totalResults)
 
};



    return (
      <div>
      <h1 className='text-center' style={{margin:'35px 0px',marginTop:'90px'}}>NewsMonkey-Top {capitalizeFirstLetter(props.category)} Headlines</h1>
      {loading&&<Spinner></Spinner>};
      { /*infinite scrolll*/}
      <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
       > 
        <div className="container">
        <div className='row'>
        {articles?.map((element)=>{

        return <div className="col-md-4">
        <Newsitem  key={element.url} title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}></Newsitem>
        </div>

        })}
       
      </div>
      </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between" >
      <button  disabled={this.state.page<=1} type="button" class="btn btn-warning" onClick={this.handlePreviousClick}>&larr; Previous</button>
      <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-warning" onClick={this.handleNextClick}>Next &rarr;</button>
      </div> */}

      </div>
     
    )
  }
  News.defaultProps = {
   
    category: 'general',
}

News.propTypes = {
 
    category: PropTypes.string,
}

export default News












//constructor for state 
//setting states using constructor
// constructor(){
//   super();
//   console.log("hello constructor")
// }
//this.state={  } used to crete object


//2 slice 
//title={element.title.slice(0,45)} used to slice item

//3 now instead of constructor
//constructor(){
//   super();
//   console.log("hello constructor from news component");
//   this.state={
//       articles:this.articles,
//       loading:false
//   }
// }
//******************************************************************************************** */
//4 use componentdidMount
//async componentDidMount(){
//   let url="https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=1394063ae2844083a6a906295849cf29";
//   let data= await fetch(url);

// }
//async await , here await  use before promise function fetch() which return promise till then async functiom 
//have to wait until it return promise (sucess or reject )i.e api fetche or not 
//when promise return async expression return sucess value otherwise throw eroor

//handle next page when no further so that dont shows empty
// if(this.state.page+1>Math.ceil(this.state.totalResults/20)){

// }


//5 make props of :
//pagesize=this,props.pageSize
//category={this.props.category} and so on...


//6 React router for set up for click on entertainment , sports and pther category to show taht catergory news on clicking that particular category
// import react router dom in app.js
//npm install react-router-dom
