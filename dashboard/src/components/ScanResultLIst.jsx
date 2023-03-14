import {useEffect, useState} from 'react';

import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

import {getScan} from '../service/api';
import { Link } from 'react-router-dom';


const ScanResultList = () =>{


    const [users, setUsers] = useState([]);
    useEffect(() => {
          getAllScan();
    }, []);

    const getAllScan= async() => {
       let response = await getScan();
       setUsers(response.data);
    //    console.log(response.data);
    }
    return(
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Repository Name</TableCell>
                    <TableCell>Scan Status</TableCell>
                    <TableCell>Findings</TableCell>
                    <TableCell>TimeStamp</TableCell>

                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TableRow>
                            <TableCell>{user.Reponame}</TableCell>
                            <TableCell>{user.status}</TableCell>
                            <TableCell><Link to="/detail">{user.status}</Link></TableCell>
                            <TableCell>{user.createdAt}</TableCell>
                        </TableRow>
                    ))
                }

            </TableBody>
        </Table>
    )
}

export default ScanResultList;