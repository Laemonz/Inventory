import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import {useState} from "react";
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";


const EditItem = (props) => {
    const {server} = props;
    const [formValues, setFormValues] = useState();
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

    const editItem = async() => {
        const URL = `${server}/items/edit`
        const data = {
            id,
            name: formValues.name,
            price: formValues.price,
        }
        await axios.patch(URL, data)
        //todo: add error handling
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        await editItem();
        navigate('/');
    };

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Edit Item
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
                   <Button variant="contained" color="primary" type="submit">
                       Update Item
                   </Button>
                </Grid>
            </Grid>
            </form>
        </React.Fragment>
    );
}

export default EditItem;