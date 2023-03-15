import {useEffect, useState} from 'react';

import { Table, TableHead, TableBody, TableRow,TableCell } from "@mui/material";

import { getScan1 } from '../service/api';
import { useParams } from 'react-router-dom';


const ScanResultDetail = () =>{

    const [user, setUser] = useState([]);

    const{id} = useParams();
    useEffect(() =>{
        loadDetails();

    }, []);

    const loadDetails = async () =>{
        const response = await getScan1(id);
    }

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>RuleId</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Severity</TableCell>
                    <TableCell>Path</TableCell>
                    
                </TableRow>
            </TableHead>
        </Table>
    )

   

}

export default ScanResultDetail;