"use client";
import { FcGoogle } from "react-icons/fc";
// next link
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

// toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// react hook form
// yup
import { useForm } from "react-hook-form";
import * as yup from "yup";
// resolver
import { yupResolver } from "@hookform/resolvers/yup";

// form validation
const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required("Email is required, must be a valid email"),
  password: yup
    .string()
    .min(8)
    .max(16)
    .required("Password is required, min 8 characters"),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // prevent default form submission
    toast.warn(data.email + " " + data.password, { position: "top-center" });
    reset();
  };

  return (
    <>
      <AnimatePresence
        mode="out-in"
        initial="hidden"
        animate="visible"
        key="login-form"
      >
        <div
          //   neon glow animation , neon blue shadow
          whileHover={{ boxShadow: "0 0 1rem #00ffff" }}
          className="w-full md:w-[400px] md:p-4 flex flex-col items-center justify-center bg-gray-700 rounded-md shadomw-s shadow-sky-600 py-4 px-2 "
        >
          <p
            className="text-sm italic font-semibold text-sky-300
          "
          >
            Your car maintenance companion
          </p>
          <hr className="w-full my-2" />


          {/* google button with a neon glow on hover , tailwind*/}
          <motion.button
            //   rotate and scale animation
            whileHover={{ rotate: 2, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-2/3 p-2 outline-none ring-0 border-0 rounded-md shadow-sm bg-sky-500 hover:bg-opacity-70 text-lg font-bold text-white  flex align-middle items-center justify-center gap-2 hover:shadow-lg hover:ring-2 hover:ring-sky-500 hover:ring-opacity-50"
          >
            <FcGoogle className="text-2xl" />
            <span>Log In with Google</span>
          </motion.button>
          <hr className="w-full my-2" />

          <form
            // disable auto suggestion and auto complete
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            onSubmit={handleSubmit(onSubmit)}
            className="w-full py-4 px-1 flex flex-col gap-2 items-center justify-center align-middle"
          >
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full"
            >
              <input
                className="p-2 outline-none ring-0 border-0 rounded-md shadow-sm w-full bg-zinc-800 text-yellow-200 font-semibold text-base my-2 hover:bg-slate-500 hover:shadow-sm invalid:ring-2 invalid:ring-red-500 "
                type="email"
                placeholder="Your email Address"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1 }}
              className="w-full"
            >
              <input
                className="p-2 outline-none ring-0 border-0 rounded-md shadow-sm w-full bg-zinc-800 text-yellow-200 font-semibold text-base my-2 hover:bg-slate-500 hover:shadow-sm invalid:ring-2 invalid:ring-red-500  "
                type="password"
                placeholder="Your Password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </motion.div>
            <motion.button
              //   animate from bottom to top with a delay of 0.5s
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-2 outline-none ring-0 border-0 rounded-md shadow-sm bg-sky-500
                    hover:bg-opacity-70 text-lg font-semibold text-white w-1/2"
              type="submit"
            >
              Log In
            </motion.button>
          </form>

          {/* reset password or create account links */}
          <motion.div
            //   animate from bottom to top with a delay of 0.5s
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full flex align-middle items-center justify-around gap-2"
          >
            <Link href="/auth/Reset">
              <span className="text-sm text-sky-300 hover:text-sky-500">
                Reset Password
              </span>
            </Link>
            <Link href="/auth/Create-Account">
              <span className="text-sm text-sky-300 hover:text-sky-500">
                Create Account
              </span>
            </Link>
          </motion.div>

          <hr className="w-full my-2" />
        </div>
        <ToastContainer />
      </AnimatePresence>
    </>
  );
};
export default LoginForm;
