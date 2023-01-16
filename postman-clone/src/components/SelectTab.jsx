import {useState } from 'react';
import { Box, Tabs, Tab } from "@mui/material";
import { makeStyles} from '@mui/styles';

const useStyles = makeStyles({
   component : {
    marginTop : 20
   }
})
const SelectTab = () => {
    const classes = useStyles();
    const [ value, setValue] = useState(0);
    const handleChange = (event , newValue) => {
         setValue(newValue);
    }
  return (
    <Box className={classes.component}>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps =  {{ sx : { backgroundColor :  '#F26B3A', height : 4, bottom : 2}}}
        aria-label="basic tabs example"
      >
        <Tab label="Params" />
        <Tab label="Headers" />
        <Tab label="Body" />
      </Tabs>
      <Box
        role="tabpanel"
        hidden={value !== 0}
        id={`simple-tabpanel- ${0}`}
        aria-labelledby={`simple-tab- ${0}`}
      >
        Params
      </Box>
      <Box
        role="tabpanel"
        hidden={value !== 1}
        id={`simple-tabpanel- ${1}`}
        aria-labelledby={`simple-tab- ${1}`}
      >
        Headers
      </Box>
      <Box
        role="tabpanel"
        hidden={value !== 2}
        id={`simple-tabpanel- ${2}`}
        aria-labelledby={`simple-tab- ${2}`}
      >
        Body
      </Box>
    </Box>
  );
};

export default SelectTab;
