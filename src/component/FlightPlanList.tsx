import { Box, List, ListItemButton, ListItemText } from "@mui/material";

function FlightPlanList() {
  return (
    <Box>
      <List>
        <ListItemButton>
          <ListItemText primary="Random Label"/>
        </ListItemButton>
      </List>
    </Box>
  )
}

export default FlightPlanList;