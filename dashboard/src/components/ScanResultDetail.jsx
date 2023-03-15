import {useEffect, useState} from 'react';

import { Table, TableHead, TableBody, TableRow,TableCell } from "@mui/material";

import { getScan1 } from '../service/api';
import { useParams } from 'react-router-dom';


const ScanResultDetail = () =>{

    const [user, setUser] = useState([]);

    const { id } = useParams();
    useEffect(() =>{
        loadDetails();

    }, []);

    const loadDetails = async () =>{
        const response = await getScan1(id);
        setUser(response.data);
        // console.log(user);
     
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
            <TableBody>
                {
                  user.map(user1 => (
                    <TableRow>
                        <TableCell>{user1.ruleid}</TableCell>
                        <TableCell>{user1.description}</TableCell>
                        <TableCell>{user1.security}</TableCell>
                        <TableCell>{user1.path}</TableCell>

                    </TableRow>
                  ))

                }
            </TableBody>
        </Table>
    )

   

}

export default ScanResultDetail;