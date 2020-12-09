import { Layout } from '../components/Layout'
import { withApollo } from '../utils/withApollo'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Index = () => {
  const [data, setData] = useState({ hits: [] })
  useEffect(() => {
    fetch('https://api.letshaveatoast.app', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query {
            toast {
              firstname
              lastname
              id
              amount
              category
            }
          }`,
      }),
    })
      .then(res => res.json())
      .then(res => console.log(res.data))
    //.then(res => setData(res.data))
  }, [])

  if (!data) {
    return (
      <div>
        <div>you got query failed for some reason</div>
      </div>
    )
  }

  /*return (
    <Layout>
      <ul>
        {data.hits.map(item => (
          <li key={item.id}>
            {item.firstname} {item.lastname} {item.category} {item.amount}
          </li>
        ))}
      </ul>
    </Layout>
  )*/
  return <>hi</>
}

export default withApollo({ ssr: true })(Index)
