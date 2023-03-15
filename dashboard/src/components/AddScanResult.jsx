import {useState} from 'react';

import { FormControl, FormGroup, InputLabel,Input,Typography,styled, Button,MenuItem,Select } from "@mui/material";

import { addScan } from '../service/api';
import {useNavigate} from 'react-router-dom';

const Container = styled(FormGroup)`
   width: 50%;
   margin: 5% auto 0 auto;
   & > div {
    margin-top:20px
   }
`


const defaultValue={
    status: '',
    Reponame: '',
    type: '',
    ruleid: '',
    path: '',
    line: '',
    description: '',
    security: ''
    // queueat: '',
    // ScaningAt: '',
    // FinishedAt: ''

}



const AddScanResult = () =>{

    const[user,setUser]= useState(defaultValue);

    const navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({...user,[e.target.name]: e.target.value});

    }

    const addScanDetail = async () =>{
        await addScan(user);
        navigate('/list');

    }


    return (
        <Container>
            <Typography variant="h4">Add Scan Result</Typography>
            <FormControl>
                {/* <InputLabel>Status</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='status'/>  */}

                 
                <InputLabel>Status</InputLabel>
        <Select  onChange={(e) => onValueChange(e)} name='status'>
          <MenuItem value={'InProgress'}>InProgress</MenuItem>
          <MenuItem value={'Success'}>Success</MenuItem>
          <MenuItem value={'Queued'}>Queued</MenuItem>
          <MenuItem value={'Failure'}>Failure</MenuItem>
        </Select>
                  
            </FormControl>
            <FormControl>
                <InputLabel>Repository Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='Reponame'/>
            </FormControl>
            <FormControl>
                <InputLabel>Type</InputLabel>
                <Input onChange={(e) => onValueChange(e) } name='type'/>
            </FormControl>
            <FormControl>
                <InputLabel>RuleId</InputLabel>
                <Input onChange={(e) => onValueChange(e) } name='ruleid'/>
            </FormControl>
            <FormControl>
                <InputLabel>Path</InputLabel>
                <Input onChange={(e) => onValueChange(e) }name='path'/>
            </FormControl>
            <FormControl>
                <InputLabel>Line</InputLabel>
                <Input onChange={(e) => onValueChange(e) }name='line'/>
            </FormControl>
            <FormControl>
                <InputLabel>Description</InputLabel>
                <Input onChange={(e) => onValueChange(e) }name='description'/>
            </FormControl>
            <FormControl>
                <InputLabel>Severity</InputLabel>
                <Input onChange={(e) => onValueChange(e) }name='security'/>
            </FormControl>
            {/* <FormControl>
                <InputLabel>Queued At</InputLabel>
                <Input onChange={(e) => onValueChange(e) }name='queueat'/>
            </FormControl>
            <FormControl>
                <InputLabel>Scaning At</InputLabel>
                <Input onChange={(e) => onValueChange(e) }name='ScaningAt'/>
            </FormControl>
            <FormControl>
                <InputLabel>Finished At</InputLabel>
                <Input onChange={(e) => onValueChange(e) }name='FinishedAt'/>
            </FormControl> */}
            <FormControl>
               <Button variant="contained" onClick={() => addScanDetail()}>Add Scan</Button>
            </FormControl>
        </Container>
    )
}
export default AddScanResult;