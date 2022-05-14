import React from "react";
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RestoreIcon from '@mui/icons-material/Restore';

const ItemActions = (props) => {
    const {handleEdit, handleDelete, handleRestore } = props;
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