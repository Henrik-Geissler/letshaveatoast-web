import Head from 'next/head'
import React from 'react'

interface HeadVProps {}

const HeadV: React.FC<HeadVProps> = ({}) => {
  return (
    <Head>
      <title>LET'S HAVE A TOAST — Raise a toast to the good</title>
      <meta
        name='title'
        content="LET'S HAVE A TOAST — Raise a toast to the good"
      />
      <meta
        name='description'
        content={`Let's Have A Toast is a web app where people from all over the world can virtually "toast" each other during festive season.`}
      />

      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://letshaveatoast.app/' />
      <meta property='og:title' content="LET'S HAVE A TOAST" />
      <meta
        property='og:description'
        content={`People from all over the world raise toast to the good!`}
      />
      <meta property='og:image' content='meta/meta.png' />

      <meta property='twitter:card' content='meta/meta.png' />
      <meta property='twitter:url' content='https://letshaveatoast.app/' />
      <meta
        property='twitter:title'
        content="LET'S HAVE A TOAST — Raise a toast to the good"
      />
      <meta
        property='twitter:description'
        content={`Let's Have A Toast is a web app where people from all over the world can virtually "toast" each other during festive season.`}
      />
      <meta property='twitter:image' content='meta/meta.png'></meta>

      <link rel='shortcut icon' href='/static/favicon.ico' />

      <link rel='stylesheet' href='css/cheat.css' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
      />
    </Head>
  )
}

export default HeadV
