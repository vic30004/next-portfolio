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
            {projects.project.map((data,i) => (
              <PortfolioItems key={i} data={data} />
            ))}
          </div>
        </div>
        <style jsx>{`
            #portfolio{
                background: whitesmoke;
                width: 100%;
                text-align: center;
                font-family: 'Raleway', sans-serif;
                padding: 2rem 0;
                clip-path: polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0% 75%, 0 0);
            }    
        #projects{
            margin: 2rem 0;
            width: 100%;
            height: 100%;
        }

        #projects .project-container{
            display: grid;
            grid-template-columns: repeat(4,1fr);
            width:1200px;
            height:100%;
            margin:0 auto;
            justify-items:center;
            animation: cards 1s ease 1;
            transition: all 1s ease;
            padding-bottom: 15rem;
        }

        @keyframes cards{
          0%{
            transfrom: translateX(-100%);
          }

          50%{
            transform: translateX(20%);
          }

          75%{
            transform: translateX(-20%);
          }
          100%{
            transform: translateX(0);
          }
        }
        @media (max-width: 768px){
          #portfolio{
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);

          }
          #projects .project-container{
            grid-template-columns: repeat(1,1fr);
            width:370px;
            margin: 0;
          }
        }
        
        `}</style>
      </section>
    );
  }
}

export default Portfolio;
