import Particles from 'react-particles-js';
<script src='https://cdn.rawgit.com/progers/pathseg/master/pathseg.js'></script>;

const particleOpt = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#ffffff',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000',
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab',
      },
      onclick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
};

export default () => (
  <div className='root'>
    <header id='hero-head'>
      <Particles className='particle' params={particleOpt} />
      <div className='main-content'>
        <div className='container'>
          <p>
            Hello, I am <span className='important'>Victor Abu Akleh</span>.
            <br></br>I am a{' '}
            <span className='important'> software engineer </span>
          </p>
        </div>
        <a href='#about' className='btn'>
          Learn More
        </a>
      </div>
    </header>
    <style jsx>{`
    @import url('https://fonts.googleapis.com/css?family=Neucha|Raleway:400,700&display=swap');

      .root {
        background: #111;
        font-family: 'Raleway', sans-serif;
        position:relative;
        font-display: swap;
      }

      p{
          line-height:1.5;
      }
      a{
        text-decoration: none;
        color:ivory;
      }

      .important{
        color:#A1000B;
        font-weight: bold;
      }
      
      .btn{
        border: 3px solid ivory;
        padding: 0.75rem 1rem; 
        margin-top: 2rem; 
        margin: 1rem auto;
        cursor:pointer;
        display:inline;
        transition: all 1s ease;
      }

      .btn:hover{
        background:#212020;
      }

      .particle {
        width: 100vw;
        height: 100%;
      }

      #hero-head{
        width:100%;
        height:100%;
      }

      .main-content {
        position: absolute;
        top: 50%;
        left:50%;
        transform: translate(-50%, -50%);
        font-size: 2rem;
        color: ivory;
        text-align:center;
      }

      img {
        width: 100%;
      }

      .container {
        width: 100%;
        heigth:100%;
        heigth: 50px;
        text-align: center;
        color: white;
        z-index: -1;
      }

      .container img {
        border-radius: 50%;
      }



       
        @media (max-width: 768px) {
          .main-content{
            font-size:1.2rem;
            top:0;
            left:0;
            transform: translateY(5%) translateX(0%);
            height:100%;
            width:100%;
            margin: 0 auto;
          }
          .main-content p{
            padding:1rem;
          }
          .btn{
            display:none;
          }
        } 

      }


      @media(max-width: 1024){
        .main-content{
          transform: translateY(5%) translateX(0%);
        }
      }
    `}</style>
  </div>
);
