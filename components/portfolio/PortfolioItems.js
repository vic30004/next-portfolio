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
                  <a className="btnDeploy" href={data.deployedUrl} target="_blank" rel="noopener">Deployed link</a>
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
            display:-webkit-box;
            display:-ms-flexbox;
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
            -webkit-transform:rotateX(45deg) translateX(-200%) translateY(-200%);
                    transform:rotateX(45deg) translateX(-200%) translateY(-200%);
            -webkit-transition: all .8s ease-in-out;
            -o-transition: all .8s ease-in-out;
            transition: all .8s ease-in-out;
          }

          .card:hover .front:before{
            -webkit-transform:skewX(0) rotateX(0) translateX(0) translateY(0);
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
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
                -ms-flex-pack: center;
                    justify-content: center;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
                -ms-flex-flow: column wrap;
                    flex-flow: column wrap;
            height: 100%;
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
            -webkit-transform: translateY(-200%);
                -ms-transform: translateY(-200%);
                    transform: translateY(-200%);
            -webkit-transition:all 1s ease;
            -o-transition:all 1s ease;
            transition:all 1s ease;
          }

         .card:hover .back .back-content{
            -webkit-transform: translateY(0);
                -ms-transform: translateY(0);
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
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
                -ms-flex-flow: row wrap;
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
              -webkit-box-shadow: 0rem 5px 10px ivory;
                      box-shadow: 0rem 5px 10px ivory;
              position: relative;
              overflow:hidden;
              z-index:1;
              -webkit-transition: all .8s ease;
              -o-transition: all .8s ease;
              transition: all .8s ease;
          }

          .btnDeploy:hover{
              color:ivory;
              -webkit-transform: scale(.9);
                  -ms-transform: scale(.9);
                      transform: scale(.9);
              -webkit-box-shadow: 0rem 3px 5px #111, 0rem 3px 5px rgb(156, 30, 53);
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
              -webkit-transition: all .5s ease;
              -o-transition: all .5s ease;
              transition: all .5s ease;
              -webkit-transform: translateX(-110%) skew(20deg);
                  -ms-transform: translateX(-110%) skew(20deg);
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
              -webkit-transition: all .5s ease;
              -o-transition: all .5s ease;
              transition: all .5s ease;
              -webkit-transform: translateX(110%) skew(20deg);
                  -ms-transform: translateX(110%) skew(20deg);
                      transform: translateX(110%) skew(20deg);
              z-index:-1;
          }

          .btnDeploy:hover:before {
              -webkit-transform: translateX(-50%) skew(20deg);
                  -ms-transform: translateX(-50%) skew(20deg);
                      transform: translateX(-50%) skew(20deg);
          }
          .btnDeploy:hover:after {
              -webkit-transform: translateX(49%) skew(20deg);
                  -ms-transform: translateX(49%) skew(20deg);
                      transform: translateX(49%) skew(20deg);
          }

          .btnGithub{
            background: #111;
            color: ivory;
            padding: 0.5rem 0.75rem;
            border-radius: 5px;
            font-weight: bold;
            font-size:1.2rem;
            -webkit-box-shadow: 0 5px 10px #111;
                    box-shadow: 0 5px 10px #111;
            overflow:hidden;
            z-index:1;
            position:relative;
            -webkit-transition: all .5s ease;
            -o-transition: all .5s ease;
            transition: all .5s ease;
          }
          .btnGithub:hover{
            color:#111;
            -webkit-transform: scale(.9);
                -ms-transform: scale(.9);
                    transform: scale(.9);
            -webkit-box-shadow: 0rem 3px 5px ivory, 0rem 3px 5px rgb(156, 30, 53);
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
            -webkit-transition: all .5s ease;
            -o-transition: all .5s ease;
            transition: all .5s ease;
            -webkit-transform: translateX(-110%) skew(20deg);
                -ms-transform: translateX(-110%) skew(20deg);
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
            -webkit-transition: all .5s ease;
            -o-transition: all .5s ease;
            transition: all .5s ease;
            -webkit-transform: translateX(110%) skew(20deg);
                -ms-transform: translateX(110%) skew(20deg);
                    transform: translateX(110%) skew(20deg);
            z-index:-1;
          }
          
          .btnGithub:hover:before {
            -webkit-transform: translateX(-50%) skew(20deg);
                -ms-transform: translateX(-50%) skew(20deg);
                    transform: translateX(-50%) skew(20deg);
        }
        .btnGithub:hover:after {
            -webkit-transform: translateX(49%) skew(20deg);
                -ms-transform: translateX(49%) skew(20deg);
                    transform: translateX(49%) skew(20deg);
        }
        @media (max-width: 768px){
          .card{
            width:300px;
            height:200px;
            border-radius:20px;
            font-size:.75rem;

          }
          .back{
            -webkit-box-shadow: 0 5px 10px;
                    box-shadow: 0 5px 10px;
            border-radius:20px;
            font-size:.75rem;

          }
          .front{
            border-radius:20px;
          }

          .title{
            font-size:0.8rem;
          }

          .btnGithub,.btnDeploy{
            padding:0.3;
            font-size:1rem;
          }

        }

          `}</style>
        </div>
      );
    }
  }
}

export default PortfolioItems;
