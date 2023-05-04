import { removeContact } from 'redux/servises/operations';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactList = () => {
  const { items, error } = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: 5 }}>
      {error && <p>{error}</p>}
      {filteredContacts.length > 0 && (
        <ul>
          {filteredContacts.map(item => (
            <li key={item.id}>
              {item.name}: {item.number}
              {/* <button
                type="button"
                onClick={() => dispatch(removeContact(item.id))}
                style={{
                  marginLeft: 5,
                }}
              > */}
              {/* Delete
              </button> */}
              <IconButton
                aria-label="delete"
                type="button"
                color="primary"
                onClick={() => dispatch(removeContact(item.id))}
              >
                <DeleteIcon />
              </IconButton>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
