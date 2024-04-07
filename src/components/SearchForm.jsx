import React from 'react'
import { Form, useNavigation } from 'react-router-dom'

import Wrapper from '../assets/wrappers/SearchForm'

const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  return (
    <Wrapper>
      <form className='form' method='GET'>
        <input
          type='search'
          name='search'
          className='form-input'
          defaultValue={searchTerm}
        />
        <button type='submit' className='btn'>
          {isSubmitting ? 'searching...' : 'submit'}
        </button>
      </form>
    </Wrapper>
  )
}

export default SearchForm
