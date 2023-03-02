import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { Container, Filter, Search } from './style'

export const Filters = () => {
  return (
    <Container>

      <Filter>
        <div><span>Done</span></div>
        <div><span>Pending</span></div>
      </Filter>

      <Search>
        <label htmlFor="">
          <input type="text" placeholder='Search items' />
          <SearchOutlinedIcon fontSize='small' />
        </label>
      </Search>

    </Container>
  )
}
