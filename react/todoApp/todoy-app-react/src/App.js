import db from './firebase-config';
import firebase from 'firebase';  
import AddTaskIcon from '@mui/icons-material/AddTask';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';


const [todos, setTodos] = useState([]);
const [input, setInput] = useState('');

useEffect(() => {
  console.log('useEffect Hook!!!');

  db.collection('todos').orderBy('datetime', 'desc').onSnapshot(snapshot => {
    console.log('Firebase Snap!');
    setTodos(snapshot.docs.map(doc => {
      return {
        id: doc.id,
        name: doc.data().todo,
        datatime: doc.data().datatime
      }
    }))
  })

}, []);

const addTodo = (event) => {
  event.preventDefault();
  db.collection('todos').add({
    todo: input,
    datetime: firebase.firestore.FieldValue.serverTimestamp()
  })
  setInput('');
}

function App() {
  return (
    
    <Container maxWidth="sm">

      <form noValidate>

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="todo"
          label="Enter ToDo"
          name="todo"
          autoFocus
          value={input}
          onChange={event => setInput(event.target.value)}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          onClick={addTodo}
          disabled={!input}
          startIcon={<AddTaskIcon />}
        >
          Add Todo
      </Button>

      </form>


    </Container >

  );
}

export default App;
