import React, { ChangeEvent, Dispatch, MouseEvent, SetStateAction, useState } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseIcon from '@mui/icons-material/Close';

import { Container, Filter, Search } from './style'

type Props = {
  text: string,
  setText: Dispatch<SetStateAction<string>>
}

export const Filters = ({ text, setText }: Props) => {
  const [filter, setFilter] = useState([false, false]);

  const handleText = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setText(target.value);
  }

  const handleFilter = (event: any, index: number) => {
    setFilter((old => {
      const isChecked = old.some(x => x);

      if (isChecked && index !== old.findIndex(x => x)) {
        return old.reverse();
      }
      old[index] = event.target.checked;
      return [...old];
    }));
  }

  return (
    <Container>

      <Filter>
        <label className={filter[0] ? 'select' : ''} htmlFor="done">
          <span>Done</span>
          <input type="checkbox" name='done' id='done' onChange={(e) => handleFilter(e, 0)} checked={filter[0]} />
        </label>

        <label className={filter[1] ? 'select' : ''} htmlFor="pending">
          <span>Pending</span>
          <input type="checkbox" name='pending' id='pending' onChange={(e) => handleFilter(e, 1)} checked={filter[1]} />
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
