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
             
                <a className="links btnGithub" href={data.githubRepo}>Github-Repo</a>
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
              cursor:pointer;
            }

            .card {
              width: 300px;
              height: 200px;
              position: relative;
              margin:1rem;
              display:flex;
              
              padding:3rem 0;
              text-align:center;
            }

            .front {
              position: absolute;
              width: 100%;
              height: 100%;
              overflow:hidden;
            }

            .front:before{
              content:'';
              width:100%;
              height:100%;
              top:0;
              left:0;
              background: rgba(229,229,216,0.8);
              position:absolute;
              z-index:1;
              transform:rotateX(45deg) translateX(-150%) translateY(-150%);
              transition: all .8s ease-in-out;
            }

            .card:hover .front:before{
              transform:skewX(0) rotateX(0) translateX(0) translateY(0);
            }
            .back {
              position: absolute;
              width: 100%;
              height: 100%;
              text-align:center;
              z-index:1;
              overflow:hidden;
            }

            .back .back-content {
              display: flex;
              justify-content: center;
              flex-flow: column wrap;
              height: 100%;
              align-items: center;
              transform: translateY(-100%);
              transition:all 1s ease;
            }

           .card:hover .back .back-content{
              transform: translateY(0);
            }

            .back .back-content .tech-list .tech-items{
                font-weight: bold;
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
                padding: 0.5rem 0.75rem;
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

            .btnGithub{
              background: #111;
              color: ivory;
              padding: 0.5rem 0.75rem;
              border-radius: 5px;
              font-weight: bold;
              font-size:1.2rem;
              box-shadow: 0 5px 10px #111;
              overflow:hidden;
              z-index:1;
              position:relative;
              transition: all .5s ease;
            }
            .btnGithub:hover{
              color:#111;
              transform: scale(.9);
              box-shadow: 0rem 3px 5px ivory, 0rem 3px 5px rgb(156, 30, 53);
          }

            .btnGithub:before{
              position:absolute;
              top:0;
              left:0;
              content:'';
              background: ivory;
              width:100%;
              height: 100%;
              transition: all .5s ease;
              transform: translateX(-110%) skew(20deg);
              z-index:-1;
            }

            .btnGithub:after{
              position:absolute;
              top:0;
              left:0;
              content:'';
              background: rgb(156, 30, 53);
              width:100%;
              height: 100%;
              transition: all .5s ease;
              transform: translateX(110%) skew(20deg);
              z-index:-1;
            }
            
            .btnGithub:hover:before {
              transform: translateX(-50%) skew(20deg);
          }
          .btnGithub:hover:after {
              transform: translateX(49%) skew(20deg);
          }
          @media (max-width: 768px){
            .card{
              width:300px;
              height:200px;
              border-radius:20px;

            }
            .back{
              box-shadow: 0 5px 10px;
              border-radius:20px;

            }
            .front{
              border-radius:20px;
            }


          }

          `}</style>
        </div>
      );
    }
  }
}

export default PortfolioItems;
