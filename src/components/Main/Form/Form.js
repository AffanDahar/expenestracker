import {
  FormControl,
  Grid,
  InputLabel,
  Typography,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@material-ui/core";
import {transactionContext} from '../../../context/globalContext'
import React , {useContext, useState }from "react";
import {incomeCategories , expenseCategories} from '../../constants/constants'
import formatDate from '../../../utils/formateDate';
import useStyles from "./styles";

const initialState = {
  amount : '',
  type : 'income',
  date :  formatDate(new Date()),
  category : ''
}
const Form = () => {

  const classes = useStyles();

  const [data , setData] = useState(initialState)
  const { addTransaction } = useContext(transactionContext);
  
  const createTransaction = () => {
    addTransaction({...data , amount : (Number(data.amount)) , id : Math.floor(Math.random()*1000)})
    setData(initialState)
  }

  const filteredCategories = data.type === 'income' ? incomeCategories : expenseCategories

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography
          align="center"
          variant="subtitle2"
          gutterBottom
        ></Typography>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel>Types</InputLabel>
          <Select value={data.type} onChange={(e) => setData({...data , type : e.target.value})}>
            <MenuItem value="income">Income</MenuItem>
            <MenuItem value="expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select value={data.category} onChange={(e) => setData({...data , category : e.target.value})}>
           {filteredCategories.map((category) => (
             <MenuItem value={category.type}>{category.type}</MenuItem>
           ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <TextField type="number" label="amount" fullWidth onChange={(e) => setData({...data , amount : e.target.value})} />
      </Grid>

      <Grid item xs={12}>
        <TextField type="date" label="Date" value={data.date} fullWidth  onChange={(e) => setData({...data , date : formatDate(e.target.value)})}/>
      </Grid>
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        fullWidth
        onClick={createTransaction}
      >
        {" "}
        Create
      </Button>
    </Grid>
  );
};

export default Form;
