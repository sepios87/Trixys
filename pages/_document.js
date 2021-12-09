import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="fr">
                <Head>
                    <meta
                        httpEquiv="Content-Type"
                        content="text/html; charset=utf-8"
                    />
                    <meta name="theme-color" content="#000000" />
                    <meta name="Content-Type" content="UTF-8" />
                    <meta name="Content-Language" content="fr" />
                    <meta
                        name="Description"
                        content="Trixys - Agence Web à La Rochelle, nous sommes à votre disposition pour la créations de vos projets web"
                    />
                    <meta
                        name="Keywords"
                        content="agence, web, la-rochelle, la rochelle, ux, design, développement web"
                    />
                    <meta name="Copyright" content="Trixys" />
                    <meta
                        name="Author"
                        content="Rémi Benjamin Océane Florian"
                    />
                    <meta
                        name="Identifier-Url"
                        content="https://agence-trixys.lpmiaw.univ-lr.fr/"
                    />
                    <meta name="Reply-To" content="contact.trixys@gmail.com" />
                    <meta name="Revisit-After" content="15 days" />
                    <meta name="Rating" content="general" />
                    <meta name="Distribution" content="global" />
                    <meta name="Geography" content="La Rochelle, 17000" />
                    <meta name="Robots" content="all" />
                    <meta
                        property="og:url"
                        content="https://agence-trixys.lpmiaw.univ-lr.fr/"
                    />
                    <meta property="og:type" content="website" />
                    <meta
                        property="og:title"
                        content="Trixys Agence Web à La Rochelle"
                    />
                    <meta
                        property="og:description"
                        content="Trixys - Agence Web à La Rochelle, nous sommes à votre disposition pour la créations de vos projets web"
                    />
                    <meta property="og:image" content="/svg/logo.svg" />

                    <meta name="twitter:card" content="summary_large_image" />
                    <meta
                        property="twitter:domain"
                        content="agence-trixys.lpmiaw.univ-lr.fr"
                    />
                    <meta
                        property="twitter:url"
                        content="https://agence-trixys.lpmiaw.univ-lr.fr/"
                    />
                    <meta
                        name="twitter:title"
                        content="Trixys Agence Web à La Rochelle"
                    />
                    <meta
                        name="twitter:description"
                        content="Trixys - Agence Web à La Rochelle, nous sommes à votre disposition pour la créations de vos projets web"
                    />
                    <meta name="twitter:image" content="/svg/logo.svg"></meta>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
