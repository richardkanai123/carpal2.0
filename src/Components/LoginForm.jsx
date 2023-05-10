'use client'
import { FcGoogle } from 'react-icons/fc'
// next link
import Link from 'next/link'

// toastify
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


// react hook form
// yup
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
// resolver
import { yupResolver } from '@hookform/resolvers/yup'

// form validation
const schema = yup.object().shape({
    email: yup.string().email().required("Email is required, must be a valid email"),
    password: yup.string().min(8).max(16).required("Password is required, min 8 characters"),
})


const LoginForm = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => { 
        // prevent default form submission
    toast.warn(data.email + " " + data.password, {position: "top-center"})
        reset()
    }


return (
  <>
          {/* log in form and use google button */}
      <div className="w-full md:w-[400px] md:p-4 flex flex-col items-center justify-center bg-gray-700 rounded-md shadow-sm shadow-sky-600 py-4 ">
        <p className="text-xs text-sky-300">Your car maintenance companion</p>
        <hr className="w-full my-2" />
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full py-4 px-1 flex flex-col gap-2 items-center justify-center align-middle">
                <input
                    className="p-2 outline-none ring-0 border-0 rounded-md shadow-sm w-full bg-slate-600 text-yellow-200 font-semibold text-base my-2 hover:bg-slate-500 hover:shadow-sm invalid:ring-2 invalid:ring-red-500 "
                    type="email"
                    placeholder="Your email Address"
                    {...register("email")}
                />
                {
                    errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>
                }
                <input
                    className="p-2 outline-none ring-0 border-0 rounded-md shadow-sm w-full bg-slate-600 text-yellow-200 font-semibold text-base my-2 hover:bg-slate-500 hover:shadow-sm invalid:ring-2 invalid:ring-red-500  "
                    type="password"
                    placeholder="Your Password"
                    {...register("password")}
                />
                {
                    errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>
                }
          <button
                    className="p-2 outline-none ring-0 border-0 rounded-md shadow-sm bg-sky-500
                    hover:bg-opacity-70 text-lg font-semibold text-white w-1/2"
            type="submit">
            Log In
          </button>
        </form>

            {/* reset password or create account links */}
            <div className="w-full flex align-middle items-center justify-around gap-2">
                <Link href="/reset-password" >
                    <span className="text-sm text-sky-300 hover:text-sky-500">Reset Password</span>
                </Link>
                <Link href="/create-account">
                    <span className="text-sm text-sky-300 hover:text-sky-500">Create Account</span>
                </Link>
            </div>

            <hr className="w-full my-2" />
            

            {/* google button with a neon glow on hover , tailwind*/}
            <button
                className="w-3/4 p-2 outline-none ring-0 border-0 rounded-md shadow-sm bg-sky-500 hover:bg-opacity-70 text-lg font-bold text-white  flex align-middle items-center justify-center gap-2 hover:shadow-lg hover:ring-2 hover:ring-sky-500 hover:ring-opacity-50"
            >
                <FcGoogle className="text-2xl" />
                <span>Log In with Google</span>
            </button>
            
            <hr className="w-full my-2" />

        </div>
        <ToastContainer />
            </>
  )
}

export default LoginForm