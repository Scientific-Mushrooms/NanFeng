import React, { Component } from "react";
import { Drawer, List, Divider, Grid, MenuList, MenuItem, ListItemIcon, ListItemText } from '@material-ui/core';



export class AdminPanel extends Component {

    render() {
        return (
            <div>
                <MenuList>
                    <MenuItem >
                        <ListItemText inset primary="Sent mail" />
                    </MenuItem>

                    <MenuItem >
                        <ListItemText  inset primary="Drafts" />
                    </MenuItem>

                    <MenuItem >
                        
                        <ListItemText inset primary="Inbox" />
                    </MenuItem>
                </MenuList>
            </div>
        );
    }
}
