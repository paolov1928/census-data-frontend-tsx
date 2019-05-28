import {
  createStyles,
  Paper,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core"
import * as React from "react"

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      marginTop: 10,
      overflowX: "auto",
      border: "3px solid #282c34"
    },
    table: {
      minWidth: 700
    },
    headerFont: {
      fontSize: "calc(10px + 2vmin)",
      fontWeight: "bold"
    },
    headerRow: {
      borderBottom: "3px solid #282c34"
    }
  })

interface IndividualStat {
  Variable: string
  Count: number
  Average_Age: number
}

interface Props extends WithStyles<typeof styles> {
  stats: Array<IndividualStat>
}

const CountListMaterialExperiment: React.SFC<Props> = props => {
  const { classes } = props

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} padding="default">
        <TableHead>
          <TableRow className={classes.headerRow}>
            <TableCell className={classes.headerFont}>Variable</TableCell>
            <TableCell className={classes.headerFont} align="right">
              Count
            </TableCell>
            <TableCell className={classes.headerFont} align="right">
              Average Age
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.stats.map(stat => (
            <TableRow key={props.stats.indexOf(stat)}>
              <TableCell>{stat.Variable}</TableCell>
              <TableCell align="right">{stat.Count.toLocaleString()}</TableCell>
              <TableCell align="right">{stat.Average_Age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

// instrument the component with the CSS styles defined above, and export it.
export default withStyles(styles)(CountListMaterialExperiment)
