import { Link, Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../../src/index.css'
const HomeLayout = () => {
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'
  const value = 'some value'

  return (
    <>
      <Navbar />
      <section className='page'>
        {isPageLoading ? (
          <div className='loading-container'>
            <div className='loading' />
            <p>Loading Data</p>
          </div>
        ) : (
          <Outlet context={{ value }} />
        )}
      </section>
    </>
  )
}

export default HomeLayout
