export default () => (
  <div id='profile'>
    <div className='profile-container'>
      <div className='profile-picture'>
        <img
          src='../../static/images/42279262_567468957017253_7920891352865308672_n.jpg'
          alt='profile-picture'
        />
      </div>
      <p>
        Highly flexible individual with analytical skills, Hopeful for the
        position of Software Developer where outstanding technical
        experience/skills in software and application development using modern
        tools will be utilized for the advancement of the company.
      </p>
    </div>

    <style jsx>{`
      img {
        width: 100%;
        height: 100%;
      }
      #profile {
        display: flex;
        flex-flow: column wrap;
        width: 50%;
        align-items: center;
        justify-content-center;
        margin: 0 auto;
      }

      #profile .profile-container{
          width:100%;
          margin: 0 1rem;
      }

      #profile .profile-picture {
        width: 300px;
        margin: 0 auto;
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      }

      @media (max-width: 768px){
        #profile .profile-container{
          width:100%;
        }
        #profile .profile-container{
          margin:0 auto;
          
        }
        #profile .profile-container p{
          width:100%;
        }

        #profile .profile-picture{
          width:200px;
        }
      }
    `}</style>
  </div>
);
