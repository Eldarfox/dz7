import React, { useState } from 'react';
import {Button, Container, IconButton, List, ListItem, ListItemText, TextField} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {addContact, deleteContact, updateContact} from "../store/todoSlice";
import EditIcon from '@mui/icons-material/EditOutlined'
import DeleteIcon from '@mui/icons-material/DeleteOutlined'

const ContactsPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [editId, setEditId] = useState(null);
    const [editName, setEditName] = useState("");
    const [editEmail, setEditEmail] = useState("");

    const dispatch = useDispatch();
    const contacts = useSelector(state => state.todo);


    const handleEditClick = (contact) => {
        setEditId(contact.id);
        setEditName(contact.name);
        setEditEmail(contact.email);
    };

    const handleSaveEdit = () => {
        if (editName.trim() && editEmail.trim()) {
            dispatch(updateContact({ id: editId, name: editName, email: editEmail }));
            setEditId(null);
            setEditName("");
            setEditEmail("");
        }
    };

    const handleCancelEdit = () => {
        setEditId(null);
        setEditName("");
        setEditEmail("");
    };

    const handleAddContact = () => {
        if (name.trim() && email.trim()) {
            dispatch(addContact({ name, email }));
            setName("");
            setEmail("");
        }
    };

    const handleDelete = (id) => {
        dispatch(deleteContact({ id }));
    };


    return (
        <Container>
            <TextField
                fullWidth
                margin="normal"
                onChange={e => setName(e.target.value)}
                id="outlined-basic"
                label="Name"
                value={name}
                variant="outlined"
            />
            <TextField
                fullWidth
                margin="normal"
                onChange={e => setEmail(e.target.value)}
                id="outlined-basic"
                label="Email"
                value={email}
                variant="outlined"
            />
            <Button variant="contained" color="primary" onClick={handleAddContact}>Add Contact</Button>
            <List>
                {contacts.map(contact => (
                    <ListItem key={contact.id} divider>
                        {editId === contact.id ? (
                            <>
                                <TextField
                                    margin="normal"
                                    onChange={e => setEditName(e.target.value)}
                                    id="outlined-basic"
                                    label="Name"
                                    value={editName}
                                    variant="outlined"
                                />
                                <TextField
                                    margin="normal"
                                    onChange={e => setEditEmail(e.target.value)}
                                    id="outlined-basic"
                                    label="Email"
                                    value={editEmail}
                                    variant="outlined"
                                />
                                <Button onClick={handleSaveEdit}>Save</Button>
                                <Button onClick={handleCancelEdit}>Cancel</Button>
                            </>
                        ) : (
                            <>
                                <ListItemText
                                    primary={contact.name}
                                    secondary={contact.email}
                                />
                                <IconButton onClick={() => handleEditClick(contact)}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton onClick={() => handleDelete(contact.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </>
                        )}
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default ContactsPage;
