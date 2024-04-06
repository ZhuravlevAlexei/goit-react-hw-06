import { useDispatch } from 'react-redux';
import css from './Contact.module.css';

const Contact = ({ id, name, number, deleteContact }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contItem}>
      {name}: {number}
      <button
        className={css.delButton}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
