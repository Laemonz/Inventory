import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import {useState} from "react";
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";
import serverConstants from "../constants/server";
import {Alert} from "@mui/material";


const DeleteItem = () => {
    const [formValues, setFormValues] = useState();
    const [errorState, setErrorState] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    const id = location.state.id


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const deleteItem = async() => {
        setErrorState(null);
        const URL = `${serverConstants.server}/items/delete`
        const data = {
            id,
            reason: formValues.reason,
        }
        try{
            await axios.patch(URL, data);
            navigate('/');
        } catch (error) {
            setErrorState(error.response)
        }
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        await deleteItem();
    };

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Delete Item
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    required
                    id="reason"
                    name="reason"
                    label="Reason"
                    fullWidth
                    autoComplete="item-reason"
                    variant="standard"
                    onChange={handleInputChange}
                />
                {errorState && (
                    <Alert severity="error" sx={{ margin: '5px' }}>Cannot delete item - {errorState.data.message}</Alert>
                )}
               <Button variant="contained" color="primary" type="submit">
                   Delete Item
               </Button>
            </form>
        </React.Fragment>
    );
}

export default DeleteItem;