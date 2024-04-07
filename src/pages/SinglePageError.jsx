import { useRouteError } from 'react-router'

const SinglePageError = () => {
  const error = useRouteError()
  return (
    <div>
      <h5>{error.message}</h5>
    </div>
  )
}

export default SinglePageError
