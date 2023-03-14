
import {AppBar, Toolbar, styled } from '@mui/material';

import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background: #111111
`;

const Tabs = styled(NavLink)`
    font-size:20px;
    margin-right: 30px;
    color: inherit;
    text-decoration: none;
`

const NavBar = () => {
    return (
        <Header position="static">
            <Toolbar>
                <Tabs to='/add'>Add Scan</Tabs>
                <Tabs to='/list'> Scan List</Tabs>
                <Tabs to='/detail'> Scan Detail</Tabs>

            </Toolbar>
        </Header>
    )
}

export default NavBar;