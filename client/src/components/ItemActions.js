import React from "react";
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RestoreIcon from '@mui/icons-material/Restore';
import { useNavigate } from "react-router-dom";


const ItemActions = (props) => {
    const {id} = props
    const navigate = useNavigate();

    const handleEdit = () => navigate('/edit', {state: {id}})
    const handleDelete = () => navigate('/delete', {state: {id}})
    const handleRestore = () => navigate('/restore', {state: {id}})

    return (
        <>
            <IconButton aria-label="edit" onClick={handleEdit}>
                <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" onClick={handleDelete}>
                <DeleteIcon />
            </IconButton>
            <IconButton aria-label="restore" onClick={handleRestore}>
                <RestoreIcon />
            </IconButton>
        </>
    )
}

export default ItemActions;