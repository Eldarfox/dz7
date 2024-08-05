import React, { useState } from 'react';
import { Button, Container, List, ListItem, ListItemText, TextField, Checkbox, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addCheckbox, toggleCheckbox, deleteCheckbox } from '../store/checkboxSlice';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

const CheckboxPage = () => {
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const checkboxes = useSelector(state => state.checkboxes || []);

    const handleAddCheckbox = () => {
        if (name.trim()) {
            dispatch(addCheckbox({ name }));
            setName("");
        }
    };

    const handleToggle = (id) => {
        dispatch(toggleCheckbox({ id }));
    };

    const handleDelete = (id) => {
        dispatch(deleteCheckbox({ id }));
    };

    return (
        <Container>
            <TextField
                fullWidth
                margin="normal"
                onChange={e => setName(e.target.value)}
                label="task"
                value={name}
                variant="outlined"
            />
            <Button variant="contained" color="primary" onClick={handleAddCheckbox}>Add task</Button>
            <List>
                {checkboxes.map(cb => (
                    <ListItem key={cb.id} divider>
                        <Checkbox
                            checked={cb.checked}
                            onChange={() => handleToggle(cb.id)}
                        />
                        <ListItemText
                            primary={cb.name}
                            style={{
                                textDecoration: cb.checked ? 'line-through' : 'none'
                            }}
                        />
                        <IconButton onClick={() => handleDelete(cb.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default CheckboxPage;
