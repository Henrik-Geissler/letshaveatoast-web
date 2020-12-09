import { withApollo } from '../utils/withApollo'
import React, { useState, useEffect } from 'react'
import { gql, useQuery } from '@apollo/client'

const FRESH_TOAST = gql`
  query getToast {
    getToast {
      firstname
      lastname
      id
      amount
      category
    }
  }
`

interface StyleVProps {}

const Todos: React.FC<StyleVProps> = () => {
  const [data2, setData] = useState()
  const [refresh, setRefresh] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('This will run every second!')
      setRefresh(refresh + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  const fetchData = async () => {
    const { loading, error, data } = await useQuery(FRESH_TOAST)
    console.log(refresh)
    setData(data)
  }

  fetchData()
  console.log(data2)
  if (data2 === undefined) return <>load</>
  return <ul>{data2.getToast.firstname}</ul>
}

export default withApollo({ ssr: true })(Todos)
