export default () => (
  <div id='badges'>
    <div id='pinboard'>
      <img
        src='https://i.dlpng.com/static/png/5405439-mysoreplywood-pin-board-pinboard-png-980_654_preview.png'
        alt=''
      />
      <div className='container'>
        <div className='logo'>
          <img
            src='https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png'
            alt=''
          />
        </div>
        <div className='logo'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/1200px-CSS.3.svg.png'
            alt=''
          />
        </div>
        <div className='logo'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png'
            alt=''
          />
        </div>
        <div className='logo'>
          <img
            src='https://mpng.pngfly.com/20180425/jrw/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84e2a4242.1423638015246930701731.jpg'
            alt=''
          />
        </div>
        <div className='logo'>
          <img
            src='https://p7.hiclipart.com/preview/354/683/606/logo-mysql-database-phpmyadmin-oracle-sql-logo.jpg'
            alt=''
          />
        </div>
        <div className='logo'>
          <img
            src='https://img.favpng.com/7/5/11/postgresql-logo-computer-software-database-png-favpng-VzwjvpxaDys6FnN0apYZJbGV7.jpg'
            alt=''
          />
        </div>
        <div className='logo'>
          <img
            src='https://toppng.com/public/uploads/preview/9kib-354x415-unnamed-mongodb-logo-sv-11562860723mgempnmrq3.png'
            alt=''
          />
        </div>
        <div className='logo'>
          <img
            src='https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png'
            alt=''
          />
        </div>
        <div className='logo'>
          <img src='https://cdn.worldvectorlogo.com/logos/react.svg' alt='' />
        </div>
        <div className='logo'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1280px-Nextjs-logo.svg.png'
            alt=''
          />
        </div>
        <div className='logo'>
          <img
            src='https://www.vertica.com/wp-content/uploads/2019/07/Golang.png'
            alt=''
          />
        </div>
        <div className='logo'>
          <img
            src='https://img.favpng.com/23/10/7/c-programming-language-logo-microsoft-visual-studio-net-framework-png-favpng-WLLTMqZhSPAk9q3DTh993fZnh.jpg'
            alt=''
          />
        </div>
        <div className='logo'>
          <img
            src='https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/Python_logo-512.png'
            alt=''
          />
        </div>
        <div className='logo'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png'
            alt=''
          />
        </div>
        <div className='logo'>
          <img
            src='http://pluspng.com/img-png/jquery-logo-png--800.gif'
            alt=''
          />
        </div>
      </div>
    </div>

    <style jsx>
      {`
        #badges {
          width: 700px;
          height: 500px;
          padding: 3rem 0;
          position: relative;
        }

        img {
          width: 100%;
          height: 100%;
        }

        #pinboard {
          position: absolute;
        }

        .container {
          position: absolute;
          width: 650px;
          top: 30px;
          left: 40px;
          display: flex;
          flex-flow: row wrap;
          float: left;
        }

        .logo {
          width: 70px;
          heigth: 70px;
          margin: 0.5rem;
        }

        .logo img {
          border-radius: 20%;
        }

        @media only screen and (max-width: 600px) {


            #badges{
                width:350px;
                margin: 0 auto;
            }

            .container{
                top:20px;
                left:30px;
                width:300px;
            }
            .logo{
                width:40px;
                height:40px;   
            }
        }

        @media only screen and (max-width: 700px) {
            #badges{
                width: 500px;
            }

            .container{
                width: 450px;
            }

            .logo{
                width:65px;
                height:65px;
            }

        }


      `}
    </style>
  </div>
);
