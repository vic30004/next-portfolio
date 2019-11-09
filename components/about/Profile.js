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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        iste eos unde incidunt suscipit necessitatibus aspernatur, aperiam
        possimus non at. Sunt cumque ad mollitia enim, id asperiores laborum
        tempore culpa.
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
      }

      #profile .profile-container{
          width:700px;
          padding:1rem;
          margin: 0 2rem;
      }

      #profile .profile-picture {
        width: 300px;
        margin: 0 auto;
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      }

      @media (max-width: 768px){
        #profile .profile-container{
          width:370px;
        }
        #profile .profile-container{
          margin:0;
          padding:0 1rem;
        }
        #profile .profile-container p{
          padding:0.5rem;
        }

        #profile .profile-picture{
          width:200px;
        }
      }
    `}</style>
  </div>
);
