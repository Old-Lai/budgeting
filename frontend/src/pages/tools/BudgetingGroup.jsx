import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function BudgetingGroup() {
  return (
    <div>
      <Button variant="contained" color="info"><Link to="/tools/table/demo">Demo Table</Link></Button>
      <h1>Budgeting Group</h1>
      <p>Budgeting Group page content</p>
    </div>
  )
}