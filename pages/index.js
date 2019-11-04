import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Header from '../components/Header';
import About from '../components/About';
import Nav from '../components/Nav';
import Portfolio from '../components/portfolio/Portfolio';
import Head from 'next/head';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer'
import { get } from 'http';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  static async getInitialProps() {
    const res = await fetch(
      'https://victor-porfolio-api.herokuapp.com/api/portfolio/projects'
    );
    const data = await res.json();
    return { project: data.data };
  }

  render() {
    const querySearch = async query => {
      let url = `https://victor-porfolio-api.herokuapp.com/api/portfolio/projects?tech[in]=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      this.setState({ project: data.data });
    };

    const getAll = async () => {
      let url = `https://victor-porfolio-api.herokuapp.com/api/portfolio/projects`;
      const res = await fetch(url);
      const data = await res.json();
      this.setState({ project: data.data });
    };

    const getDeployed = async () =>{
      let url = `https://victor-porfolio-api.herokuapp.com/api/portfolio/projects?deploy=true`
      const res = await fetch(url);
      const data = await res.json();
      this.setState({ project: data.data });
    }

    return (
      <div>
        <Head />
        <Header />
        <Nav id='nav' onScroll={this.handleScroll} />
        <About />
        <Portfolio projects={this.state} querySearch={querySearch} getAll={getAll} getDeployed={getDeployed} />
        <Contact/>
        <Footer/>
        <style jsx global>{`
          body,
          html {
            margin: 0;
            scroll-behavior: smooth;
          }
        `}</style>
      </div>
    );
  }
}

export default Index;
