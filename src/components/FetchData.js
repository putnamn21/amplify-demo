import React, { useState, useEffect } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { Loader } from '@aws-amplify/ui-react'

const defaultFetchState = {
  isLoading: false,
  isSuccess: false,
  error: false,
}

export default React.memo(function FetchData({
  children,
  graphQLMethod,
  LoaderComponent,
  ErrorComponent
}) {

  const [fetchState, setFetchState] = useState({
    ...defaultFetchState,
    isLoading: true,
    status: null,
    message: 'Loading'
  })

  const refresh = () => {
    setFetchState({
      ...defaultFetchState,
      isLoading: true,
      message: 'Loading'
    })
  }

  const [data, setData] = useState(null)

  useEffect(() => {
    if (fetchState.isLoading) {
      (async function fetchData() {
        try {
          const data = await API.graphql(graphqlOperation(graphQLMethod))
          setData(data)
          setFetchState({
            ...defaultFetchState,
            isSuccess: true,
            message: 'Success',
            status: 200
          })
        } catch (error) {
          setFetchState({
            ...defaultFetchState,
            error,
            message: error.message
          })
        }
      })()
    }
  }, [fetchState.isLoading, graphQLMethod])

  useEffect(() => { //props have changed so refresh data
    refresh()
  }, [graphQLMethod])

  if (LoaderComponent && fetchState.isLoading) return <Loader />
  if (ErrorComponent && fetchState.error) return <ErrorComponent error={fetchState.error} />

  return children({ fetchState, data, refresh })

})