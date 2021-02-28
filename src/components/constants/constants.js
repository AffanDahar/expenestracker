const incomeColors = ['#123123', '#154731', '#165f40', '#16784f', '#14915f', '#10ac6e', '#0bc77e', '#04e38d', '#00ff9d'];
const expenseColors = ['#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79', '#ffae8a', '#cc474b', '#f55b5f'];

export const incomeCategories = [
  { type: 'business', amount: 0, color: incomeColors[0] },
  { type: 'investments', amount: 0, color: incomeColors[1] },
  { type: 'extra income', amount: 0, color: incomeColors[2] },
  { type: 'deposits', amount: 0, color: incomeColors[3] },
  { type: 'lottery', amount: 0, color: incomeColors[4] },
  { type: 'gifts', amount: 0, color: incomeColors[5] },
  { type: 'salary', amount: 0, color: incomeColors[6] },
  { type: 'savings', amount: 0, color: incomeColors[7] },
  { type: 'rental income', amount: 0, color: incomeColors[8] },
];

export const expenseCategories = [
  { type: 'bills', amount: 0, color: expenseColors[0] },
  { type: 'car', amount: 0, color: expenseColors[1] },
  { type: 'clothes', amount: 0, color: expenseColors[2] },
  { type: 'travel', amount: 0, color: expenseColors[3] },
  { type: 'food', amount: 0, color: expenseColors[4] },
  { type: 'shopping', amount: 0, color: expenseColors[5] },
  { type: 'house', amount: 0, color: expenseColors[6] },
  { type: 'entertainment', amount: 0, color: expenseColors[7] },
  { type: 'phone', amount: 0, color: expenseColors[8] },
  { type: 'pets', amount: 0, color: expenseColors[9] },
  { type: 'other', amount: 0, color: expenseColors[10] },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => c.amount = 0);
  expenseCategories.forEach((c) => c.amount = 0);
};