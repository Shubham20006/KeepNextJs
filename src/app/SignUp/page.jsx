"use client"
import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { signup } from '../../Services/UserServices';
import { TextField } from '@mui/material';


function SignUp() {
  const NameRegex = /^[A-Z]{1}[a-z]{2,}$/;
  const UserNameRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]*$/;
  const passRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;
  const [input, setInput] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmpassword: '',
    service: 'advance'
  })
  const setFirstName = (e) => {
    setInput({ ...input, firstName: e.target.value })
  }
  const setLastName = (e) => {
    setInput({ ...input, lastName: e.target.value })
  }
  const setEmail = (e) => {
    setInput({ ...input, email: e.target.value })
  }
  const setPassword = (e) => {
    setInput({ ...input, password: e.target.value })
  }
  const setConfirmPassword = (e) => {
    setInput({ ...input, confirmpassword: e.target.value })
  }
  const [checkError, setInputError] = React.useState({
    UserFirstName: false,
    UserFirstNameMsg: '',
    UserLastName: false,
    UserLastNameErrorMsg: '',
    UserEmail: false,
    UserEmailErrorMsg: '',
    UserPassword: false,
    UserPasswordErrorMsg: '',
    UserConfirmPassword: false,
    UserConfirmPasswordErrorMsg: ''
  })

  const Submit = async () => {
    let FirstnameTest = NameRegex.test(input.firstName);
    let LastnameTest = NameRegex.test(input.lastName);
    let UserTest = UserNameRegex.test(input.email);
    let passTest1 = passRegex.test(input.password);

    if (FirstnameTest === false) {
      setInputError((prevState) => ({
        ...prevState,
        UserFirstName: true,
        UserFirstNameMsg: "Enter correct First Name",
      }));
    } else {
      setInputError((prevState) => ({
        ...prevState,
        UserFirstName: false,
        UserFirstNameMsg: "",
      }));
    }

    if (LastnameTest === false) {
      setInputError((prevState) => ({
        ...prevState,
        UserLastName: true,
        UserLastNameErrorMsg: "Enter correct Last Name",

      }));
      alert('Enter correct Last Name')
    } else {
      setInputError((prevState) => ({
        ...prevState,
        UserLastName: false,
        UserLastNameErrorMsg: "",
      }));
    }

    if (UserTest === false) {
      setInputError((prevState) => ({
        ...prevState,
        UserEmail: true,
        UserEmailErrorMsg: "Enter correct Username",
      }));
    } else {
      setInputError((prevState) => ({
        ...prevState,
        UserEmail: false,
        UserEmailErrorMsg: "",
      }));
    }

    if (passTest1 === false) {
      setInputError((prevState) => ({
        ...prevState,
        UserPassword: true,
        UserPasswordErrorMsg: "Enter correct Password",
      }));
    } else {
      setInputError((prevState) => ({
        ...prevState,
        UserPassword: false,
        UserPasswordErrorMsg: "",
      }));
    }

    if (FirstnameTest === true && LastnameTest === true && UserTest === true && passTest1 === true) {
      let response = await signup(input)
      console.log(response);
    }
  }

  //for showing password
  const [show, setShow] = React.useState(true)
  const showPassword = () => {
    setShow(!show)
  }

  return (
    <>
      <div className="flex h-screen w-screen  items-center justify-center">
        <div className='flex mt-10 mb-6 items-center justify-center max:sm:w-3/5 border-2 border-slate-400 rounded-lg'>
          <div className="sm:w-3/5 m-5 flex flex-col justify-left xs:w-[90%]">
            <img
              className="h-[10vh] w-24"
              src='https://media.wired.co.uk/photos/606da4ae938ecee6e930e9c3/master/w_1600,c_limit/google-logo_2.jpg'
              alt="Google"
            />
            {/* <logo1 /> */}
            <h3 className="text-2xl font-bold leading-6 tracking-tight text-slate-900">
              Create Your Google Account
            </h3>
            <div className="mt-3">
              <form className="space-y-6" action="#" method="POST">
                <div className='flex  flex-col sm:flex-row justify-between '>
                  {/* first name  */}
                  <div className='h-auto w-full sm:w-[45%]'>
                    <div className="mt-2">
                      <TextField
                        id="outlined-basic"
                        label="First Name"
                        variant="outlined"
                        name="name"
                        type="text"
                        autoComplete="current-fname"
                        required
                        fullWidth
                        size='small'
                        className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        onChange={setFirstName}
                        error={checkError.UserFirstName}
                        helperText={checkError.UserFirstNameMsg}
                      />
                    </div>
                  </div>
                  {/* last name  */}
                  <div className='w-full xs:w-[70%] sm:w-[45%]'>
                    <div className="mt-2">
                      <TextField
                        id="outlined-basic"
                        label="Last Name"
                        variant="outlined"
                        name="name"
                        type="text"
                        autoComplete="current-lname"
                        required
                        fullWidth
                        size='small'
                        className="rounded-md border-0 py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        onChange={setLastName}
                        error={checkError.UserLastName}
                        helperText={checkError.UserLastNameErrorMsg}
                      />
                    </div>
                  </div>
                </div>
                {/* for email */}
                <div className='w-full'>
                  <div className="mt-2 w-full">
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      name="email"
                      type="email"
                      autoComplete="current-email"
                      required
                      fullWidth
                      size='small'
                      className=" rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      onChange={setEmail}
                      error={checkError.UserEmail}
                      helperText={checkError.UserEmailErrorMsg}
                    />
                  </div>
                </div>
                <p className="mt-0 text-start text-sm text-gray-500 ">
                  <p href="#" className="text-sm leading-6 text-slate-900">
                    You can use letters, numbers & periods
                  </p>
                  <p href="#"
                    className=" w-2/3  min-w-1/2  text-sm font-semibold leading-6 text-blue-600 hover:text-blue-900"
                  >
                    Use my current email address instead
                  </p>
                </p>
                {/* password  */}
                <div className='flex  flex-col sm:flex-row justify-between items-center'>
                  <div className='w-full sm:w-[45%]'>
                    <div className="mt-2">
                      <TextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        name="password"
                        type={show ? "password" : "text"}
                        autoComplete="current-password"
                        required
                        fullWidth
                        size='small'
                        className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        onChange={setPassword}
                        error={checkError.UserPassword}
                        helperText={checkError.UserPasswordErrorMsg}
                      />
                    </div>
                  </div>
                  {/* password confirm */}
                  <div className='w-full sm:w-[45%]'>
                    <div className="mt-2 flex">
                      <TextField
                        id="outlined-basic"
                        label="Confirm"
                        variant="outlined"
                        name="password"
                        type={show ? "password" : "text"}
                        autoComplete="current-password"
                        required
                        fullWidth
                        size='small'
                        className=" rounded-md border-0 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                        onChange={setConfirmPassword}
                      />
                    </div>
                  </div>
                  <div onClick={showPassword}> {show ? <VisibilityOffIcon /> : <VisibilityIcon />}</div>
                </div>
                <p className=" text-start text-sm text-gray-500 ">
                  <p href="#"
                    className="text-sm leading-3 text-slate-900"
                  >
                    Use 8 or more characters with a mix of letters, numbers & symbols
                  </p>
                </p>
                <div className='flex justify-between'>
                  <h5
                    className=" w-2/3  min-w-1/2  text-sm font-semibold leading-6 text-blue-600 hover:text-blue-900"
                  >
                    Sign in instead
                  </h5>
                  <button
                    type="submit"
                    className="flex h-1/2 w-1/3 sm:1/3 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={Submit}
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
            {/* </div> */}
          </div>
          <div className='h-0 sm:h-1/2 sm:w-2/5 w-0 invisible sm:visible flex flex-col items-center text-sm leading-6 text-slate-900'>
            <img className='h-[45vh] ' src="https://i0.wp.com/vpn.alotso.com/wp-content/uploads/2021/01/Google-Account.png?w=225&ssl=1" alt="" />
            <p>One account All of Google</p>
            <p>Working for You</p>
          </div>
        </div >
      </div>
    </>
  )
}

export default SignUp