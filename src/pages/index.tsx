import { Layout } from '../components/Layout'
import { withApollo } from '../utils/withApollo'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Index = () => {
  const [data, setData] = useState({ hits: [] })
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.fullstack.fun/graphql?query={getToast{amount,category,firstname,lastname}}'
      )

      setData(result.data)
    }

    fetchData()
  }, [])

  if (!data) {
    return (
      <div>
        <div>you got query failed for some reason</div>
      </div>
    )
  }

  return (
    <Layout>
      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default withApollo({ ssr: true })(Index)
