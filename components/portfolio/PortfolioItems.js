import React, { Component } from 'react';

export class PortfolioItems extends Component {
  render() {
    const { data } = this.props;
    if (data) {
      return (
        <div className='card'>
          <div className='front'>
            {data.picture && <img src={data.picture} alt='' />}
          </div>
          <div className='back'>
            <div className='back-content'>
              <div className="title">{data.title}</div>

              
              <ul className='tech-list'>
                {data.tech.map(tech => (
                  <li className='tech-items'>{tech}</li>
                ))}
              </ul>
              <div className="links">
                <a  href={data.githubRepo}>Github-Repo</a>
              </div>
              {data.deploy ? (
                  <a className="btnDeploy" href={data.deployedUrl} target="_blank">Deployed link</a>
              ) : (
                false
              )}
            </div>
          </div>

          <style jsx>{`
            img {
              width: 100%;
              height: 100%;
            }

            ul {
              margin: 0;
              padding:0;
            }

            li {
              list-style-type: none;
              text-transform: uppercase;
            }

            a {
              text-decoration: none;
              color: #111;
              margin: 0.5rem 0;
            }

            .card {
              width: 500px;
              height: 400px;
              position: relative;
              margin:1rem 0;
              display:flex;
              overflow: hidden;
            }

            .front {
              position: absolute;
              width: 100%;
              height: 100%;
            }

            .back {
              position: absolute;
              width: 100%;
              height: 100%;
              text-align:center;
            }

            .back .back-content {
              display: flex;
              justify-content: center;
              flex-flow: column wrap;
              height: 100%;
              align-items: center;
            }
            .back .back-content .title{
                font-weight: bolder;
                font-size:1.5rem;
            }

            .back .back-content .tech-list {
              display: flex;
              flex-flow: row wrap;
            }

            .back .back-content .tech-list li{
                margin:0.5rem;
            }

            .back .back-content .links {
                margin: 0.5rem 0;
            }

            .btnDeploy{
                background: ivory;
                padding: 0.5rem 1rem;
                font-size:1.2rem;
                font-weight: bold;
                border-radius: 5px;
                box-shadow: 0rem 5px 10px ivory;
                position: relative;
                overflow:hidden;
                z-index:1;
                transition: all .8s ease;
            }

            .btnDeploy:hover{
                color:ivory;
                transform: scale(.9);
                box-shadow: 0rem 3px 5px #111, 0rem 3px 5px rgb(156, 30, 53);
            }

            .btnDeploy:before{
                position:absolute;
                top:0;
                left:0;
                content:'';
                background: rgb(156, 30, 53);
                width:100%;
                height: 100%;
                transition: all .5s ease;
                transform: translateX(-110%) skew(20deg);
                z-index:-1;
            }
            .btnDeploy:after{
                position:absolute;
                top:0;
                left:0;
                content:'';
                background: #111;
                width:100%;
                height: 100%;
                transition: all .5s ease;
                transform: translateX(110%) skew(20deg);
                z-index:-1;
            }

            .btnDeploy:hover:before {
                transform: translateX(-50%) skew(20deg);
            }
            .btnDeploy:hover:after {
                transform: translateX(49%) skew(20deg);
            }
            
          `}</style>
        </div>
      );
    }
  }
}

export default PortfolioItems;
