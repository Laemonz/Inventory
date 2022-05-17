import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import serverConstants from "../constants/server";
import {Alert} from "@mui/material";


const CreateItem = () => {
    const [formValues, setFormValues] = useState();
    const [errorState, setErrorState] = useState();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const createItem = async() => {
        const URL = `${serverConstants.server}/items/create`
        const item = {
            name: formValues.name,
            price: formValues.price,
        }
        try{
            await axios.post(URL, item);
            navigate('/');
        } catch (error) {
            setErrorState(error.response)
        }
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        await createItem();
    };

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Create Item
            </Typography>
            <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="name"
                        name="name"
                        label="Name"
                        fullWidth
                        autoComplete="item-name"
                        variant="standard"
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="price"
                        name="price"
                        label="Price"
                        fullWidth
                        autoComplete="item-price"
                        variant="standard"
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    {errorState && (
                        <Alert severity="error" sx={{ margin: '5px' }}>Cannot delete item - {errorState.data.message}</Alert>
                    )}
                   <Button variant="contained" color="primary" type="submit">
                       Create
                   </Button>
                </Grid>
            </Grid>
            </form>
        </React.Fragment>
    );
}

export default CreateItem;