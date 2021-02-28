import { Card, CardContent, CardHeader, Divider, Grid, Typography } from '@material-ui/core'
import React , {useContext} from 'react'
import Form from './Form/Form'
import List from './List/List'
import useStyles from './styles'
import {transactionContext} from '../../context/globalContext'

const Main = () => {
    const classes = useStyles()
    const {balance} = useContext(transactionContext)
    return (
       <Card className={classes.root} >
           <CardHeader title="Expense Tracker" />
           <CardContent >
               <Typography align="center" variant="h5">Total Balance ${balance}</Typography>
               <Typography variant="subtitle2" style={{lineHeight:'1.5em', marginTop: '20px'}}> try say something</Typography>
               <Divider/>
               <Form/>
           </CardContent>
           <CardContent className={classes.cardContent}>
          <Grid  container spacing={2}>
           <Grid item xs={12}>
        <List/>
           </Grid>
          </Grid>
           </CardContent>
       </Card>
    )
}

export default Main
