import React from 'react';

const QueryButtons = ({querySearch,getAll,getDeployed}) => {
  const search = e => {
      let query = e.target.innerText.toLowerCase()
    querySearch(query);
  };

 
  return (
    <div>
      <div id='tech'>
          <button className='tech-skill' onClick={search}>
            React
            </button>
       
          <button className='tech-skill' onClick={search}>
            {' '}
            Javascript
            </button>
          <button className='tech-skill' onClick={search}>
            {' '}
            MySql
            </button>
          <button className='tech-skill' onClick={search}>
            {' '}
            Node.js
            </button>
          <button className='tech-skill' onClick={getDeployed}>
            {' '}
            Deployed
            </button>
          <button className='tech-skill' onClick={getAll}>
          {' '}
          All 
          </button>
      </div>
      <style jsx>
        {`

          #tech {
            margin: 2rem 0;
            text-align: center;
            width: 100%;
          }

          .tech-skill {
            list-style-type: none;
            cursor: pointer;
            background:#111;
            color:ivory;
            padding:0.75rem 1rem;
            border-radius: 5px;
            border: 1px solid black;
            transition: all 1s ease;
            margin:  0.75rem;
            outline:none;
            text-align:center;

          }

  


          
        `}
      </style>
    </div>
  );
};

export default QueryButtons;
