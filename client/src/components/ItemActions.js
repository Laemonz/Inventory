import React from "react";
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RestoreIcon from '@mui/icons-material/Restore';
import { useNavigate } from "react-router-dom";
import serverConstants from "../constants/server";
import axios from "axios";


const ItemActions = (props) => {
    const {item, restoreCallback} = props
    const { _id: id, name, price } = item
    const navigate = useNavigate();

    const handleEdit = () => navigate('/edit', {state: {id, name, price}})
    const handleDelete = () => navigate('/delete', {state: {id}})
    const handleRestore = async() => {
        const URL = `${serverConstants.server}/items/restore`;
        await axios.patch(URL, {id})
        //todo: add error handling

        restoreCallback(id);
    }

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