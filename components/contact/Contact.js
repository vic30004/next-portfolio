import React from 'react'

const Contact = () => {
    return (
        <div id="contact">
            <h1 className="title">
                Contact
            </h1>
            <div className="form-container">
            <form className="form-input">
                <label>Name</label>
                <input type="text" name="name" id="name" placeholder="Full Name"/>
                <label>Email</label>
                <input type="email" name="name" id="email" placeholder="JohnDoe@gmail.com"/>
                <label>Message</label>
                <textarea name="message" id="message" cols="20" rows="5"></textarea>
            </form>
            <button className="btnSubmit">Submit</button>
            </div>
            

            <style jsx>{`
                #contact{
                    background:#161615;
                    padding: 2rem 0;
                    color: ivory;
                    heigth:100%;
                    font-family: 'Raleway', sans-serif;
                }
                #contact .title{
                    margin:0;
                    text-align:center;
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

                .btnSubmit{
                    display: block;
                    text-align: center;
                    margin: 0 auto;
                    padding: 0.5rem 0.75rem;
                    border-radius: 5px;
                    border:none;
                    outline:none
                    font-family: 'Raleway', sans-serif;
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
