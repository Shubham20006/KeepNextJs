"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { signin } from "../../Services/UserServices";
import { TextField } from "@mui/material";
import { setCookie } from "cookies-next";
import { cookies } from "next/dist/client/components/headers";

function SignIn() {
  const router = useRouter();
  const [input, setInput] = React.useState({
    email: "",
    password: "",
  });
  const [checkError, setCheckError] = React.useState({
    EmailTrue: false,
    EmailError: "",
    PasswordTrue: false,
    PasswordError: "",
  });
  const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]*$/;
  const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;
  const setName = (e) => {
    setInput({ ...input, email: e.target.value });
  };
  const setPassword = (e) => {
    setInput({ ...input, password: e.target.value });
  };

  const Submit = async () => {
    let emailTest = emailRegex.test(input.email);
    let passwordTest = passwordRegex.test(input.password);
    if (emailTest === false) {
      setCheckError({
        EmailTrue: true,
        EmailError: "Please Enter Valid Email",
      });
    } else if (passwordTest === false) {
      setCheckError({
        PasswordTrue: true,
        PasswordError: "Please Enter Valid Password",
      });
    }

    //pass to server
    if (emailTest === true && passwordTest === true) {
      let response = await signin(input);
      console.log(response);
      localStorage.setItem("token", response.data.id);
        //document.cookie = "token" + "=" + response.data.id+ ";path=/";
     // document.cookie = `token=${response.data.id};path=/`;
     setCookie("token", response.data.id)
     //cookies().set('token', response.data.id)
 
     router.push("/")
    }
  };

  //for showing password
  const [show, setShow] = React.useState(true);

  return (
    <>
      <div className="flex min-h-screen  flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
        <div className="flex flex-col ">
          <div className="  min-h-[80vh]  bg-white  min-w-[35vw] sm:w-[70vw] md:w-[55vw] lg:w-[40vw] border-2 border-slate-300 rounded-md">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                className="mx-auto h-15 w-24"
                src="https://media.wired.co.uk/photos/606da4ae938ecee6e930e9c3/master/w_1600,c_limit/google-logo_2.jpg"
                alt="Your Company"
              />
              <h3 className=" text-center text-2xl font-bold leading-9 tracking-tight text-slate-900">
                Sign in
              </h3>
              <h6 className=" text-center text-md  leading-9 tracking-tight text-slate-900">
                with your google account
              </h6>
            </div>

            <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm mb-5">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <div className="mt-2 xs:w-[100%]  max:sm:w-[100%] xl:w-[100%] rounded-md  py-1.5 text-gray-900  ">
                    <TextField
                      fullWidth
                      className=" placeholder:text-gray-400 m:text-sm sm:leading-6"
                      id="outlined-basic"
                      label="Email or phone"
                      variant="outlined"
                      type="email"
                      autoComplete="current-email"
                      size="small"
                      onChange={setName}
                      error={checkError.EmailTrue}
                      helperText={checkError.EmailError}
                    />
                  </div>
                  <div
                    className="flex  justify-start flex-col sm:flex-rol md:flex-row xl:flex-row 2xl:flex-row
                                  sm:justify-between :2xl:justify-between 2xl:justify-between xl:justify-between md:justify-between "
                  >
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-indigo-600 hover:text-indigo-500 "
                      >
                        Forgot Email or Phone?
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mt-2 xs:w-[100%]  max:sm:w-[100%] xl:w-[100%] rounded-md  py-1.5 text-gray-900   ">
                    <TextField
                      id="outlined-basic"
                      fullWidth
                      className=" rounded-md  py-1.5 text-gray-900  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      label="Password"
                      variant="outlined"
                      type="password"
                      size="small"
                      onChange={setPassword}
                      error={checkError.PasswordTrue}
                      helperText={checkError.PasswordError}
                    />
                    <div onClick={() => setShow(!show)}>
                      {" "}
                      {show ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </div>
                  </div>
                  <div
                    className="flex  justify-start flex-col sm:flex-rol md:flex-row xl:flex-row 2xl:flex-row
                             sm:justify-between :2xl:justify-between 2xl:justify-between xl:justify-between md:justify-between "
                  >
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-indigo-600 hover:text-indigo-500 "
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                </div>
                <p className=" text-start text-sm text-gray-500 ">
                  <p href="#" className="text-sm leading-6 text-slate-900 ">
                    Now your computer? Use Guest mode to sign in privately.
                  </p>
                  <p
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Learn more
                  </p>
                </p>
                <div className="flex justify-between">
                  <h5 className=" w-2/3  min-w-1/2  text-sm font-semibold leading-6 text-blue-600 hover:text-blue-900">
                    <a href="SignUp">Create account</a>
                  </h5>
                  <button
                    type="submit"
                    className="flex h-1/2 w-1/3 2xl:w-1/3 xl:w-1/3 md:1/3 sm:1/3 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={Submit}
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-2  w-full flex  justify-between">
            <p className=" w-1/3 text-start text-md text-gray-600 ">
              <a
                href="#"
                className="text-xs leading-6 text-slate-900 hover:text-slate-600"
              >
                English(United States)
              </a>
              <list className="text-slate-900 ">
                <ArrowDropDownIcon />
              </list>
            </p>

            <div className=" w-2/4 flex flex-col md:justify-between sm:justify-between xl:justify-between 2xl:justify-between sm:flex-row md:flex-row xl:flex-row 2xl:flex-row">
              <p className=" text-center text-sm text-gray-500">
                <a
                  href="#"
                  className=" text-xs leading-6 text-slate-600 hover:text-slate-900"
                >
                  Help
                </a>
              </p>
              <p className="text-center text-sm text-gray-500">
                <a
                  href="#"
                  className="text-xs leading-6 text-slate-600 hover:text-slate-900"
                >
                  Private
                </a>
              </p>
              <p className=" text-center text-sm text-gray-500">
                <a
                  href="#"
                  className="text-xs leading-6 text-slate-600 hover:text-slate-900"
                >
                  Terms
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignIn;
