import {useEffect, useState} from 'react';

import { Table, TableBody, TableCell, TableHead, TableRow, styled } from "@mui/material";

import {getScan} from '../service/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
   width 90%;
   margin: 50px auto 0 auto;
`

const THead = styled(TableRow)`
background: #000000;
& > th {
    color: #fff;
    font-size:20px;
}

`;

const TBody = styled(TableRow)`
& > td {
    font-size: 15px;
}
`


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
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Repository Name</TableCell>
                    <TableCell>Scan Status</TableCell>
                    <TableCell>Findings</TableCell>
                    <TableCell>TimeStamp</TableCell>
                    <TableCell>id</TableCell>

                </THead>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TBody>
                            <TableCell>{user.Reponame}</TableCell>
                            <TableCell>{user.status}</TableCell>
                            <TableCell><Link to={`/detail/${user._id}`}>{user.status}</Link></TableCell>
                            <TableCell>{user.createdAt}</TableCell>
                            <TableCell>{user._id}</TableCell>
                        </TBody>
                    ))
                }

            </TableBody>
        </StyledTable>
    )
}

export default ScanResultList;