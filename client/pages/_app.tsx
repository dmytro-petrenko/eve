import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import type {
    ExternalProvider,
    JsonRpcFetchFunc,
} from '@ethersproject/providers'
import { Web3Provider } from '@ethersproject/providers'
import { Web3ReactProvider } from '@web3-react/core'
import type { AppProps } from 'next/app'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        background-color: #050610;
        color: #fff;
        font-family: 'Roboto', sans-serif;
        line-height: 22px;
        font-size: 14px;
    }

    h1 {
        font-family: 'Playfair Display', serif;
        font-weight: 400;
        font-size: 36px;
    }

    a {
        color: #8146FF;
        text-decoration: none;
    }
    a:hover {
        color: #8146FF;
    }

    * {
        box-sizing: border-box;
    }
`

function getLibrary(provider: ExternalProvider | JsonRpcFetchFunc) {
    return new Web3Provider(provider)
}

export default function EveApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
                    crossOrigin="anonymous"
                />

                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
                    crossOrigin="anonymous"
                ></script>
            </Head>
            <GlobalStyle />
            <Web3ReactProvider getLibrary={getLibrary}>
                <Component {...pageProps} />
            </Web3ReactProvider>
        </>
    )
}
