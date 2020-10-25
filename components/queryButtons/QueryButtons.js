import React, { useState } from 'react';

const QueryButtons = ({ querySearch, getAll, getDeployed }) => {
  const search = (e) => {
    let query = e.target.innerText.toLowerCase();
    querySearch(query);
    setClicked({ [e.target.name]: true });
  };
  const [clicked, setClicked] = useState({
    react: false,
    javascript: false,
    sql: false,
    node: false,
    deployed: false,
    all: false,
  });

  const handelClick = (e) => {
    if (e.target.name === 'deployed') {
      getDeployed();
      setClicked({ [e.target.name]: true });
      return;
    }
    getAll();
    setClicked({ [e.target.name]: true });
  };

  const { react, javascript, sql, node, deployed, all } = clicked;
  return (
    <div>
      <div id='tech'>
        <button
          className='tech-skill'
          onClick={search}
          name={'react'}
          style={react ? { boxShadow: 'none', transform:'translateY(4%)' } : { boxShadow: '' }}
        >
          React
        </button>

        <button
          className='tech-skill'
          onClick={search}
          name={'javascript'}
          style={javascript ? { boxShadow: 'none', transform:'translateY(4%)' } : { boxShadow: '' }}
        >
          {' '}
          Javascript
        </button>
        <button
          className='tech-skill'
          onClick={search}
          name={'sql'}
          style={sql ? { boxShadow: 'none', transform:'translateY(4%)' } : { boxShadow: '' }}
        >
          {' '}
          MySql
        </button>
        <button
          className='tech-skill'
          onClick={search}
          name={'node'}
          style={node ? { boxShadow: 'none', transform:'translateY(4%)' } : { boxShadow: '' }}
        >
          {' '}
          Node.js
        </button>
        <button
          className='tech-skill'
          onClick={(e) => handelClick(e)}
          name={'deployed'}
          style={deployed ? { boxShadow: 'none', transform:'translateY(4%)' } : { boxShadow: '' }}
        >
          {' '}
          Deployed
        </button>
        <button
          className='tech-skill'
          onClick={(e) => handelClick(e)}
          name={'all'}
          style={all ? { boxShadow: 'none', transform:'translateY(4%)' } : { boxShadow: '' }}
        >
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
            background: #111;
            color: ivory;
            padding: 0.75rem 1rem;
            border-radius: 5px;
            border: 1px solid black;
            transition: all 1s ease;
            margin: 0.75rem;
            outline: none;
            text-align: center;
            box-shadow: -3px 7px 10px #333;
            transition: all 0.3s ease-in;
          }
          .tech-skill:hover {
            box-shadow: -1px 3px 5px #333;
            transform: translateY(4%);
          }
          .tech-skill:active {
            box-shadow: none;
          }
        `}
      </style>
    </div>
  );
};

export default QueryButtons;
