import React from 'react'

const Contact = () => {
    return (
        <div id="contact">
            <h2 className="title">
                Contact
            </h2>
            <h3>Email:<span> victor_993@msn.com</span></h3>
            <h3>Phone:<span> 201-660-3627</span></h3>
            <div className="icons">
             <a href="https://github.com/vic30004" target="_blank"><i class="fab fa-github fa-2x"></i></a>
            <a href="https://www.linkedin.com/in/victor-abu-akleh-920b24163/" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a> 
            </div>
           




            

            <style jsx>{`
            

                #contact{
                    background:#161615;
                    padding: 2rem 0;
                    color: ivory;
                    heigth:100%;
                    text-align:center;
                    font-family: 'Raleway', sans-serif;
                    font-display: swap;
                }
                #contact .title{
                    margin:0;
                    text-align:center;
                    text-decoration:underline;
                }
                #contact .form-container{
                    width: 1200px;
                    margin: 1rem auto;
                    background: #2d2d2b;
                    padding: 2rem 1rem;
                    border-radius: 5px;
                    box-shadow: 0 5px 10px #444440, 0 5px 10px #444440;
                }

                #contact .form-input{
                    display: flex;
                    flex-flow: column wrap;
                    font-weight: bold;
                    font-size: 1.2rem;
                }


                
                #contact .form-input input, textarea{
                    margin-bottom: 0.75rem;
                    border-radius: 5px;
                    padding: 0.2rem 0.5rem;
                }

                #contact .icons{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                #contact .icons a{
                    margin: 0 1rem;
                }

                .btnSubmit{
                    display: block;
                    text-align: center;
                    margin: 0 auto;
                    padding: 0.5rem 0.75rem;
                    border-radius: 5px;
                    border:none;
                    outline:none
                    font-family: 'Raleway', sans-serif;
                    font-display: swap;
                    font-weight: bold;
                    font-size: 1.2rem;
                    background:#161615;
                    color: rgb(156, 30, 53); 
                    cursor: pointer;
                    box-shadow: 0 5px 10px #161615;
                    transition: all .2s linear;
                }

                .btnSubmit:hover{
                    transform: scale(0.9);
                    box-shadow: 0 2.5px 5px #161615;
                }
                .btnSubmit:active{
                    transform: scale(0.8);
                    box-shadow: none;
                }

            `}</style>
        </div>
    )
}

export default Contact
