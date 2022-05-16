import React, { useEffect, useState} from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress} from '@mui/material'
import axios from "axios";
import ItemActions from "./ItemActions";

const ViewItems = (props) => {
    const {server} = props;
    const [items, setItems] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getItems = async() => {
            const URL = `${server}/items/`
            const response = await axios.get(URL);
            setItems(response.data);
            setIsLoading(false);
        }
        getItems();
    },[server])

    return isLoading ?
        <CircularProgress />
        :
        (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Deleted</TableCell>
                        <TableCell align="right">Deletion Comment</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map((item) => (
                        <TableRow
                            key={item._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {item.name}
                            </TableCell>
                            <TableCell align="right">{item.price}</TableCell>
                            <TableCell align="right">{item.deleted ? 'Yes' : 'No'}</TableCell>
                            <TableCell align="right">{item.deletionComment}</TableCell>
                            <TableCell align="center">
                                <ItemActions id={item._id}/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default  ViewItems;