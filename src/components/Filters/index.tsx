import React, { ChangeEvent, Dispatch, SetStateAction } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseIcon from '@mui/icons-material/Close';

import { Container, Filter, Search } from './style'
import { TStatus } from '../../interfaces/ITask';

type Props = {
  text: string
  setText: Dispatch<SetStateAction<string>>
  status: TStatus
  setStatus: Dispatch<SetStateAction<TStatus>>
}

export const Filters = ({ text, setText, status, setStatus }: Props) => {
  const handleText = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setText(target.value);
  }

  const handleFilter = (s: TStatus) => {
    setStatus((old) => old === s ? " " : s);
  }

  return (
    <Container>

      <Filter>
        <label className={status.includes('done') ? 'select' : ''} htmlFor="done">
          <span>Done</span>
          <input type="checkbox" name='done' id='done' onChange={() => handleFilter('done ')} checked={status.includes('done')} />
        </label>

        <label className={status.includes('pending') ? 'select' : ''} htmlFor="pending">
          <span>Pending</span>
          <input type="checkbox" name='pending' id='pending' onChange={() => handleFilter('pending ')} checked={status.includes('pending')} />
        </label>
      </Filter>

      <Search>
        <label htmlFor="">
          <input type="text" placeholder='Search items' value={text} onChange={handleText} />
          {text.length ? <CloseIcon fontSize='small' /> : <SearchOutlinedIcon fontSize='small' />}
        </label>
      </Search>

    </Container>
  )
}
