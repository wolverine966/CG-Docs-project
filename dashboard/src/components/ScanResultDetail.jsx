import {useEffect, useState} from 'react';

import { Table, TableHead, TableBody, TableRow,TableCell } from "@mui/material";

import { getScan1 } from '../service/api';
import { useParams } from 'react-router-dom';


const ScanResultDetail = () =>{

    const [user, setUser] = useState([]);

    const {id} = useParams();
    // console.log(data);

    useEffect(() =>{
        loadDetails();

    }, []);

    const loadDetails = async () =>{
        let response = await getScan1(id);
        let json=(response.data);
     
        setUser(json);
     console.log(json)
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
              
                
                    <TableRow>
                        <TableCell>{user.ruleid}</TableCell>
                        <TableCell>{user.description}</TableCell>
                        <TableCell>{user.security}</TableCell>
                        <TableCell>{user.path}</TableCell>

                    </TableRow>
                 

            
                      
            </TableBody>
        </Table>
    )

   

}

export default ScanResultDetail;