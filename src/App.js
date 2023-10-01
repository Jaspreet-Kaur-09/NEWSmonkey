import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize=9;
  // apiKey=process.env.REACT_APP_NEWS_API
  apiKey="1394063ae2844083a6a906295849cf29"
  state={
    progress:0,
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
      <BrowserRouter>
        <Navbar></Navbar>
         <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
       
      />
      
        
          <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={this.pageSize} category="general"></News>}/>
          <Route exact path="/general"  element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={this.pageSize} category="general"></News>}/>
          <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="business" pageSize={this.pageSize} category="business"></News>}/>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" pageSize={this.pageSize} category="entertainment"></News>}/>
          <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="health" pageSize={this.pageSize} category="health"></News>}/>
          <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="science" pageSize={this.pageSize} category="science"></News>}/>
          <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="sports" pageSize={this.pageSize} category="sports"></News>}/>
          <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="technology" pageSize={this.pageSize} category="technology"></News>}/>

          </Routes>
     
      </BrowserRouter>
      </div>
    )
  }
}



//class based components
// rcc for class componnets


//class based components
// rcc for class componnets
//13pageSize4063ae2844083a6apageSize062pageSize584pageSizecf2pageSize


