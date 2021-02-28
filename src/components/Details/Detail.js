import React from 'react'
import {Card, CardContent, CardHeader , Typography} from '@material-ui/core'
import useStyles from './styles'
import useTransactions from '../../useTransaction'
const Detail = ({title}) => {
    const classes = useStyles()
    const { total} = useTransactions(title)
    return (
        <Card className={title === 'income' ? classes.income : classes.expense}>
            <CardHeader title={title} />
            <CardContent>
                <Typography variant='h5'>${total}</Typography>
            </CardContent>
        </Card>
    )
}

export default Detail
