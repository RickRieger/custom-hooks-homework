import CustomHooksObjectFormat from './hooks/inputHooks-2';

import './App.css';
function App() {
  const {
    value: userName,
    clearInput: clearUserNameInput,
    onChange: userNameOnChange,
    showValue: showUserName,
  } = CustomHooksObjectFormat('');

  const {
    value: email,
    clearInput: clearEmailInput,
    onChange: emailOnChange,
    showValue: showEmail,
  } = CustomHooksObjectFormat('');

  const {
    value: password,
    clearInput: clearPasswordInput,
    onChange: passwordOnChange,
    showValue: showPassword,
  } = CustomHooksObjectFormat('');

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
