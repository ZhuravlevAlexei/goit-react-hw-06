import { useSelector, useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { selectFilters, updateFilter } from '../../redux/filtersSlice.js';

const Filter = () => {
  const filter = useSelector(selectFilters);
  console.log('filter: ', filter);
  const dispatch = useDispatch();
  return (
    <label className={css.contactLabel}>
      Find contacts by name
      <input
        className={css.contactInput}
        type="text"
        name="filter"
        value={filter}
        onChange={evt => dispatch(updateFilter(evt.currentTarget.value.trim()))}
      />
    </label>
  );
};

export default Filter;
