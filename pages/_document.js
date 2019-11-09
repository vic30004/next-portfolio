import Document, {Head,Main,NextScript} from 'next/document'


export default class MyDocument extends Document{
    render(){
        return(


       
        <html>
            <Head>
                <meta name="description" content="A website for my programming portfolio"/>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
        <body>
        
        <Main/>
        <NextScript/>
        
        </body>
        </html>
         )
    }
}
