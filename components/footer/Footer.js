import React from 'react'

const Footer = () => {
    return (
        <footer id="foot">
            <h4>Copyright &copy; 2020</h4>
            <style jsx>{`
                #foot{
                    background:#111;
                    color: ivory;
                    text-align: center;
                    border-top: 5px solid rgb(156, 30, 53);
                    padding: 0.75rem 0;
                }
                #foot h4{
                    margin: 0;
                }
            
            `}</style>
        </footer>
    )
}

export default Footer
