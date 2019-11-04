import React, { Component, Fragment } from 'react';
import QueryButtons from '../queryButtons/QueryButtons';
import PortfolioItems from './PortfolioItems';

export class Portfolio extends Component {
  render() {
    const { projects, querySearch, getAll, getDeployed } = this.props;
    return (
      <section id="portfolio">
      <h1 className="title">Portfolio</h1>
        <QueryButtons
          querySearch={querySearch}
          getAll={getAll}
          getDeployed={getDeployed}
        />
        <div id='projects'>
          <div className='project-container'>
            {projects.project.map(data => (
              <PortfolioItems key={data.id} data={data} />
            ))}
          </div>
        </div>
        <style jsx>{`
            #portfolio{
                background: whitesmoke;
                width: 100%;
                text-align: center;
                font-family: 'Raleway', sans-serif;
            }    
        #projects{
            margin: 2rem 0;
            width: 100%;
            height: 100%;
        }

        #projects .project-container{
            display: grid;
            grid-template-columns: repeat(4,1fr);
            justify-items:center;
        }
        
        `}</style>
      </section>
    );
  }
}

export default Portfolio;
