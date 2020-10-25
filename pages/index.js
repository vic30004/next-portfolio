import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Header from '../components/Header';
import About from '../components/About';
import Nav from '../components/Nav';
import Portfolio from '../components/portfolio/Portfolio';
import Head from 'next/head';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import { get } from 'http';
import { Helmet } from 'react-helmet';

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
    const querySearch = async (query) => {
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

    const getDeployed = async () => {
      let url = `https://victor-porfolio-api.herokuapp.com/api/portfolio/projects?deploy=true`;
      const res = await fetch(url);
      const data = await res.json();
      this.setState({ project: data.data });
    };

    return (
      <div>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Victor Abu Akleh | Software Engineer</title>
          <link rel='canonical' href='http://victor-aa.now.sh/' />
          <meta
            name='description'
            content='Highly flexible individual with analytical skills, Hopeful for the
        position of Software Developer where outstanding technical
        experience/skills in software and application development using modern
        tools will be utilized for the advancement of the company.'
          />
          <meta
            name='google-site-verification'
            content='TL2nneko15midW_q2T1kf7o1b4_IzuKJ3v8IefojNm0'
          />
        </Helmet>
        <Header />
        <Nav id='nav' onScroll={this.handleScroll} />
        <About />
        <Portfolio
          projects={this.state}
          querySearch={querySearch}
          getAll={getAll}
          getDeployed={getDeployed}
        />
        <Contact />
        <Footer />
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
