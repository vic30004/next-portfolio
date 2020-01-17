


export default () => (
  <div className='nav'>
    <ul className='nav-bar' >
      <li><a href="#about">About</a> </li>
      <li><a href="#portfolio">Portfolio</a> </li>
      <li><a href="#contact">Contact</a> </li>
    </ul>

    <style jsx>
      {`
      @import url('https://fonts.googleapis.com/css?family=Neucha|Raleway:400,700&display=swap');

        li{
            list-style-type:none;
        }

        a{
          text-decoration:none;
          color: ivory;
          font-weight:bold;
        }

        .nav {
          width: 100%;
          background: #111;
          border-bottom: 5px solid #9C1E35;
        }
        .nav-bar {
          display: flex;
          justify-content: center;
          margin:0;
          width:100%;
          padding: 0;
          color:ivory;
          font-family: 'Raleway', sans-serif;
        }
        .nav-bar li a{
          margin:1rem 3rem;
          font-size:1.7rem;
          padding:.5rem 1rem;
        }

        .nav-bar li:hover{
            border: 1px solid white;
            border-radius: 5px;
            cursor: pointer;

        }

        @media (max-width: 768px) {
          .nav-bar li{
            font-size:1rem;
            margin:1rem;
          }
        }


      `}
    </style>
  </div>
);
