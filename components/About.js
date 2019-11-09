import Profile from './about/Profile';
import Skills from './about/Skills';

export default () => (
  <section id='about'>
    <h2 className='title'>About</h2>
    <div className='card-container'>
       <div className='card'>
        <div className='logo seo'><img src="../static/images/67-512.png" alt=""/></div>
        <h2>SEO</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ex
          animilaudantium, laborum beatae tempore.
        </p>
      </div>
       <div className='card'>
        <div className='logo ux'>
            <img src="../static/images/ux.png" alt=""/>
        </div>
        <h2>UX/UI</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ex
          animilaudantium, laborum beatae tempore.
        </p>
      </div>
       <div className='card'>
        <div className='logo'>
            <img className="scale" src="../static/images/scalable.png" alt=""/>
        </div>
        <h2>Scalability</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ex
          animilaudantium, laborum beatae tempore.
        </p>
      </div>
    </div>


    <div className="main-container">
        <Profile/>
        <Skills/>
    </div>









    <style jsx>
        {
            `
            img{
                width:100%;
                height:100%;
                display:block;
            }

            .title{
                margin:2rem;
            }

            #about{
                width: 100%;
                height:100%;
                text-align:center;
                clear:both;
                font-family: 'Raleway', sans-serif;
            }

            .card-container{
                max-width:1800px;
                margin:2rem auto;
                display: flex;
                height:100%;
                justify-content: space-between;
                align-items:center;
            }

            .card{
                width:700px;
                padding:1rem;
                margin: 0 2rem;
                display:flex;
                justify-content:center;
                flex-flow:column wrap;
            }
            .card .logo{
                width:200px;
                height:200px;
                margin: 0 auto;
            }

            .main-container{
               display:grid;
               grid-template-columns: 1fr 1fr;
               grid-column-gap: 5px;
               margin: 0 auto;
               justify-items: center;

            }

            .card .logo .scale{
              animation: fly .5s ease 1;
              transition: all 1s ease;
            }

            @keyframes fly{
              0%{
                transform: translateY(0);
              }
              25%{
                transform: translateY(-25%)
              }
              50%{
                transform: translateY(-50%);
              }
              75%{
                transform: translateY(-70%);
              }
              100%{
                transform: translateY(-100%);
              }
            }


            @media (max-width: 768px) {
              .card-container{
                flex-flow:column wrap;
              }
              .card{
                width:320px;
                margin:1rem 0;
                padding:0;
                overflow:hidden;
              }

              .card .logo{
                width:100px;
                height:100px;
                margin: 0 auto;
            }

            .card p{
              margin:0;
              padding:.5rem;
            }
            .card h2{
              margin:0.5rem;
            }

            .main-container{
              display: flex;
              flex-flow:column wrap;
            }
            }

            `
        }
    </style>
  </section>
);
