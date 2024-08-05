import React, { useState } from 'react';
import { Button, Container, IconButton, List, ListItem, ListItemText, TextField, Checkbox } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, toggleTask, updateTask, deleteTask } from '../store/taskSlice';
import EditIcon from '@mui/icons-material/EditOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

const TaskPage = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [editId, setEditId] = useState(null);
    const [editName, setEditName] = useState("");
    const [editDescription, setEditDescription] = useState("");

    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks || []);

    const handleAddTask = () => {
        if (name.trim() && description.trim()) {
            dispatch(addTask({ name, description }));
            setName("");
            setDescription("");
        }
    };

    const handleEditClick = (task) => {
        setEditId(task.id);
        setEditName(task.name);
        setEditDescription(task.description);
    };

    const handleSaveEdit = () => {
        if (editName.trim() && editDescription.trim()) {
            dispatch(updateTask({ id: editId, name: editName, description: editDescription }));
            setEditId(null);
            setEditName("");
            setEditDescription("");
        }
    };

    const handleCancelEdit = () => {
        setEditId(null);
        setEditName("");
        setEditDescription("");
    };

    const handleToggle = (id) => {
        dispatch(toggleTask({ id }));
    };

    const handleDelete = (id) => {
        dispatch(deleteTask({ id }));
    };

    return (
        <Container>
            <TextField
                fullWidth
                margin="normal"
                onChange={e => setName(e.target.value)}
                label="Task Name"
                value={name}
                variant="outlined"
            />
            <TextField
                fullWidth
                margin="normal"
                onChange={e => setDescription(e.target.value)}
                label="Task Description"
                value={description}
                variant="outlined"
            />
            <Button variant="contained" color="primary" onClick={handleAddTask}>Add Task</Button>
            <List>
                {tasks.map(task => (
                    <ListItem key={task.id} divider>
                        <Checkbox
                            checked={task.completed}
                            onChange={() => handleToggle(task.id)}
                        />
                        {editId === task.id ? (
                            <>
                                <TextField
                                    margin="normal"
                                    onChange={e => setEditName(e.target.value)}
                                    label="Task Name"
                                    value={editName}
                                    variant="outlined"
                                />
                                <TextField
                                    margin="normal"
                                    onChange={e => setEditDescription(e.target.value)}
                                    label="Task Description"
                                    value={editDescription}
                                    variant="outlined"
                                />
                                <Button onClick={handleSaveEdit}>Save</Button>
                                <Button onClick={handleCancelEdit}>Cancel</Button>
                            </>
                        ) : (
                            <>
                                <ListItemText
                                    primary={task.name}
                                    secondary={task.description}
                                    style={{
                                        textDecoration: task.completed ? 'line-through' : 'none'
                                    }}
                                />
                                <IconButton onClick={() => handleEditClick(task)}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton onClick={() => handleDelete(task.id)}>
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

export default TaskPage;
