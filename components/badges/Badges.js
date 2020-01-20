export default () => (
  <div id='badges'>
    <div id='pinboard'>
      <img
        src='https://cdn.pixabay.com/photo/2017/08/11/16/20/pin-board-2631965_960_720.png'
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
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png'
            alt=''
          />
        </div>
        <div className='logo'>
          <img
            src='https://upload.wikimedia.org/wikipedia/he/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png'
            alt=''
          />
        </div>
        <div className='logo'>
          <img
            src='https://miro.medium.com/max/1200/1*bm7KFpEG2Qahn24t0OTNlQ.png'
            alt=''
          />
        </div>
        <div className='logo'>
          <img
            src='http://kaptastech.com/wp-content/uploads/2017/02/mongodb-logo.png'
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
            src='https://seeklogo.com/images/G/go-logo-046185B647-seeklogo.com.png'
            alt=''
          />
        </div>
        <div className='logo'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/8/82/C_Sharp_logo.png'
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

        #pinboard:before{
          content:'';
          position:absolute;
          width:88%;
          height:78%;
          top:11%;
          left:6%;
          background:rgba(0,0,0,0.3);
        }

        .container {
          position: absolute;
          width: 600px;
          top: 55px;
          left: 65px;
          display: flex;
          flex-flow: row wrap;
          float: left;
        }

        .logo {
          width: 65px;
          heigth: 70px;
          margin: 0.5rem;
        }

        .logo img {
          border-radius: 20%;
          transition: all 0.5s ease;
        }
        
        .logo img:hover{
            transform: scale(1.1);
        }

        @media only screen and (max-width: 600px) {



            #badges{
                width:350px;
                margin: 0 auto;
            }

            #pinboard:before{
            }
            .container{
                top:40px;
                left:30px;
                width:250px;
            }
            .logo{
                width:30px;
                height:30px;   
            }
        }

  


        @media only screen and (max-width: 700px) {
            #badges{
                width: 350px;
                margin: 0 auto;
            }

            .container{
                width: 320px;
                top:30px;
                left:33px;
            }

            .logo{
                width:40px;
                height:35px;
            }

        }


      `}
    </style>
  </div>
);
