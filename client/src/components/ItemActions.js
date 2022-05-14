import React from "react";
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const ItemActions = (props) => {
    const {handleEdit, handleDelete} = props;
    return (
        <>
            <IconButton aria-label="delete" onClick={handleEdit}>
                <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" onClick={handleDelete}>
                <DeleteIcon />
            </IconButton>
        </>
    )
}

export default ItemActions;