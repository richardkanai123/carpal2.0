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
        .required("Password is required, min 8 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,16}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
    Confirmpassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
              // password and confirm password must match
        .required("Confirm Password is required"),
        

});

const CreateAccountForm = () => {
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

            <AnimatePresence
                mode="out-in"
                initial="hidden"
                animate="visible"
                key="login-form"
            >
                <div
                    //   neon glow animation , neon blue shadow
                    whileHover={{ boxShadow: "0 0 1rem #00ffff" }}
                    className="w-full md:w-[400px] md:p-4 flex flex-col items-center justify-center bg-gray-600 rounded-md shadomw-s shadow-sky-600 py-4 px-2 "
                >
                    <p
                        className="text-sm italic font-semibold text-sky-300
          "
                    >
                        Create Account
                    </p>
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
                            className="w-full mb-2"
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
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.1 }}
                            className="w-full mb-2"
                        >
                            <input
                                className="p-2 outline-none ring-0 border-0 rounded-md shadow-sm w-full bg-zinc-800 text-yellow-200 font-semibold text-base my-2 hover:bg-slate-500 hover:shadow-sm invalid:ring-2 invalid:ring-red-500  "
                                type="password"
                                placeholder="Your Password"
                                {...register("Confirmpassword")}
                            />
                            {errors.Confirmpassword && (
                                <p className="text-red-500 text-sm">
                                    {errors.Confirmpassword.message}
                                </p>
                            )}
                        </motion.div>
                        <motion.button
                            //   animate from bottom to top with a delay of 0.5s
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="p-2 outline-none ring-0 border-0 rounded-md shadow-sm bg-sky-500 hover:bg-opacity-70 text-lg font-semibold text-white w-1/2 hover:shadow-md hover:scale-125 hover:text-purple-800 transform transition-all ease-in-out"
                            type="submit"
                        >
                           Create Account
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
                        <p className="text-sm text-sky-300 hover:text-sky-500">
                            Already have an account?
                        </p>

                        <Link href="/">
                            <span className="text-sm text-white hover:text-zinc-900 p-2 bg-sky-500 font-bold rounded-md">
                                Log In
                            </span>
                        </Link>
                </motion.div>
                
                <motion.hr
                    // animate opacity from 0 to 1 with a delay of 0.5s and move from left to right with a duration of 0.5s
                    initial={{ opacity: 0, x: -50, y: 10 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}

                    className="w-full my-2" />
                
                    {/* google button with a neon glow on hover , tailwind*/}
                    <motion.button
                        //   rotate and scale animation
                    whileHover={{
                        scale: 1.1,
                        boxShadow: "0 0..25rem #00ffff",
                        accentColor: "#00ffff",
                    }}
                        whileTap={{ scale: 0.9 }}
                        className="w-2/3 p-2 outline-none ring-0 border-0 rounded-md shadow-sm bg-sky-400 hover:bg-opacity-70 text-lg font-bold text-white  flex align-middle items-center justify-center gap-2 hover:shadow-lg hover:ring-2 hover:ring-sky-500 hover:ring-opacity-50"
                    >
                        <span>Sign Up With </span>
                        <FcGoogle className="text-2xl" />
                    </motion.button>

                    <hr className="w-full my-2" />
                </div>
                <ToastContainer />
            </AnimatePresence>
    );
};
export default CreateAccountForm;
