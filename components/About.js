import Profile from './about/Profile';
import Skills from './about/Skills';
import Badges from './badges/Badges';

export default () => (
  <section id='about'>
    <h2 className='title'>About</h2>
    <div className='card-container'>
      <div className='card'>
        <div className='logo'>
          <img className='seo' src='../static/images/67-512.png' alt='' />
        </div>
        <h2>SEO</h2>
        <p>
          What's the point of creating a great website when no one can find it?
          This is why focusing on SEO is one of my top priorities.
        </p>
      </div>
      <div className='card'>
        <div className='logo'>
          <img className='ux' src='../static/images/ux.png' alt='' />
        </div>
        <h2>UX/UI</h2>
        <p>
          Imagine having the best backend in the world but 0 users. My goal is
          to create the best user interface and provide the best user experience
          to allow for the backend to shine and to make sure every user has a
          memorable experience.
        </p>
      </div>
      <div className='card'>
        <div className='logo'>
          <img className='scale' src='../static/images/scalable.png' alt='' />
        </div>
        <h2>Scalability</h2>
        <p>
          There should always be room for growth. Keeping that in mind while
          programing is one of the most important things.
        </p>
      </div>
    </div>

    <div className='main-container'>
      <Profile />
      <Badges />
    </div>

    <style jsx>
      {`
        img {
          width: 100%;
          height: 100%;
          display: block;
        }

        .title {
          margin: 2rem;
        }

        #about {
          width: 100%;
          height: 100%;
          text-align: center;
          clear: both;
          font-family: 'Raleway', sans-serif;
          font-display: swap;
        }

        .card-container {
          max-width: 1800px;
          margin: 2rem auto;
          display: flex;
          height: 100%;
          justify-content: space-between;
          align-items: center;
        }

        .card {
          width: 700px;
          padding: 1rem;
          margin: 0 2rem;
          display: flex;
          justify-content: center;
          flex-flow: column wrap;
          overflow: hidden;
        }
        .card .logo {
          width: 200px;
          height: 200px;
          margin: 0 auto;
        }

        .main-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-column-gap: 5px;
          margin: 0 auto;
          justify-items: center;
        }

        .card:hover .logo .seo {
          animation: grow 1s ease infinite;
          transition: all 60s ease;
        }

        .card:hover .logo .ux {
          animation: spin 1s ease infinite;
          transition: all 60s ease;
        }

        .card:hover .logo .scale {
          animation: fly 1s ease infinite;
          transition: all 60s ease;
          overflow: hidden;
        }

        @keyframes grow {
          0% {
            transform: scale(0.7);
          }
          25% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
          75% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes spin {
          0% {
            transform: rotateY(0);
          }

          25% {
            transform: rotateY(2rad);
          }

          50% {
            transform: rotateY(3.14rad);
          }

          100% {
            transform: rotate(2turn);
          }
        }

        @keyframes fly {
          0% {
            transform: translateY(0);
          }
          25% {
            transform: translateY(-30%);
          }
          50% {
            transform: translateY(-60%);
          }
          75% {
            transform: translateY(-80%);
          }
          100% {
            transform: translateY(-100%);
          }
        }

        @media (max-width: 768px) {
          .card-container {
            flex-flow: column wrap;
          }
          .card {
            width: 320px;
            margin: 1rem 0;
            padding: 0;
            overflow: hidden;
          }

          .card .logo {
            width: 100px;
            height: 100px;
            margin: 0 auto;
          }

          .card p {
            margin: 0;
            padding: 0.5rem;
          }
          .card h2 {
            margin: 0.5rem;
          }

          .main-container {
            display: flex;
            flex-flow: column wrap;
          }
        }
      `}
    </style>
  </section>
);
