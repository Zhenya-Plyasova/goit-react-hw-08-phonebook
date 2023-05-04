import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@mui/material';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filter/slice';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);
    
    return (
      <form style={{ display: 'flex', justifyContent: 'center', }}>
        <div style={{ display: 'inline-grid' }}>
          <h2>Contacts</h2>
          <TextField
            type="text"
            name="filter"
            id="outlined-basic"
            label="Find contacts by name"
            variant="outlined"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={e => {
              const action = setFilter(e.target.value.toLowerCase());
              dispatch(action);
            }}
            value={filter}
            margin="normal"
            placeholder="Fill the name"
          />
          {/* <label
            htmlFor="InputFilter"
            style={{
                display: 'inline-grid',
            }}
        >
            Find contacts by name
            <input
                type="text"
                name="filter"
                id="InputFilter"
                value={filter}
                onChange={e => {
                    const action = setFilter(e.target.value.toLowerCase());
                    dispatch(action);
                }}
                style={{
                    marginTop: 15,
                    height: 30,
                }}
            />
        </label> */}
        </div>
      </form>
    );
};
