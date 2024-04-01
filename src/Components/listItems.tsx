import { ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import Person3Icon from '@mui/icons-material/Person3';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
export const listItems = (  
<>
<ListItemButton>


<ListItemIcon>
    <SpaceDashboardIcon />
</ListItemIcon>
<ListItemText primary="imc-Dash" />
</ListItemButton>

<ListItemButton>
    <ListItemIcon>
<Person3Icon />
    </ListItemIcon>
    <ListItemText primary="Leads" />
</ListItemButton>

import BarChartIcon from '@mui/icons-material/BarChart';

<ListItemButton>
    <ListItemIcon>
        <StackedBarChartIcon />
        <ListItemText primary="reports" />
    </ListItemIcon>
</ListItemButton>

import LayersIcon from '@mui/icons-material/Layers';

<ListItemButton>
    <ListItemIcon>
        <LayersIcon />
        <ListItemText primary="Integrations" /> 
    </ListItemIcon>
</ListItemButton>
</>

);



export const secondaryListItems = ( 
    <>
<ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>

    </>

);