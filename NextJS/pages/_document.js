import Document, {Head, Main, NextScript} from 'next/document';

class MyDocumnet extends Document {
    render() {
        return (
            <html lang="en">
                <head>
                    <meta charSet="UTF-8"/>
                    <link 
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"  
                        integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" 
                        crossorigin="anonymous"
                    />
                </head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </html>
        )
    }
}

export default MyDocumnet;
