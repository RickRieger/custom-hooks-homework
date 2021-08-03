import CustomHooksArrayFormat from './hooks/inputHooks';
import './App.css';

function App() {
  const [userName, userNameOnChange, clearUserNameInput, showUserName] =
    CustomHooksArrayFormat('');
  const [email, emailOnChange, clearEmailInput, showEmail] =
    CustomHooksArrayFormat('');
  const [password, passwordOnChange, clearPasswordInput, showPassword] =
    CustomHooksArrayFormat('');

  function handleOnSubmit(e) {
    e.preventDefault();
    showUserName();
    showEmail();
    showPassword();
    clearEmailInput();
    clearPasswordInput();
    clearUserNameInput();
  }

  return (
    <div className='App'>
      <form onSubmit={handleOnSubmit}>
        <input
          type='text'
          placeholder='user name'
          value={userName}
          onChange={userNameOnChange}
        />
        <br />
        <input
          type='email'
          placeholder='email'
          value={email}
          autoComplete='email'
          onChange={emailOnChange}
        />
        <br />
        <input
          type='password'
          placeholder='password'
          value={password}
          autoComplete='current-password'
          onChange={passwordOnChange}
        />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
