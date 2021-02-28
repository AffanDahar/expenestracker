import React,  { useContext}from 'react'
import {Avatar, List as MUList, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Slide , IconButton} from '@material-ui/core'
import { Delete, MoneyOff } from '@material-ui/icons';
import {transactionContext} from '../../../context/globalContext'
import useStyles from './styles'
const List = () => {
    const classes = useStyles()

const {transactions} = useContext(transactionContext)
    // const transactions = [{
    //     id: 1 , type : 'income' , category : 'salary' , amount : 50 , date : new Date()
    // }]
    return (
        <MUList className={classes.list}>
            {transactions.map((transaction) => (
                <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
              <ListItem>
                  <ListItemAvatar>
                      <Avatar className={transaction.type === 'income' ? classes.avatarIncome : classes.avatarExpense}>
               <MoneyOff/>
                      </Avatar>
                  </ListItemAvatar>

                  <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`}/>
              <ListItemSecondaryAction>
                  <IconButton edge='end' aria-label='delete' >
                      <Delete/>
                  </IconButton>
              </ListItemSecondaryAction>
              </ListItem>
                </Slide>
            ))}
        </MUList>
    )
}

export default List
