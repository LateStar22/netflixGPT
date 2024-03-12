import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { useUserContext } from "../Contexts/userContext"
import { useNavigate, Navigate } from 'react-router-dom';
import auth from "../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useAction } from '../Contexts/actionContext';

const Form = (props) => {
    const form = useForm({
        defaultValues: {
            firstname: "",
            password: ""
        }
    });
    const navigate = useNavigate();
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;
    // const auth = getAuth(firebaseApp); no need to use it again and again in all components as we have centralized the Firebase authentication initialization in firebaseconfig.js file 

    const { action, stateChanger } = props;

    const { setUser } = useUserContext();

    const { setAction } = useAction();

    const onSignUp = async (data) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
            const user = userCredential.user;
            alert("SIgned Up!")
            stateChanger(); //as soon as we are successfully signed up, we have to change the state of Login.jsx to Sign In.
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        }
    };

    const onSignIn = async (data) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
            const user = userCredential.user;
            setUser(user);
            setAction("Sign Up");
            navigate("/browse");
            alert("Successfully Signed In!")
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        }
    };


    return (
        <>
            <form onSubmit={handleSubmit(action === "Sign Up" ? onSignUp : onSignIn)} noValidate>
                {action === "Sign Up" && (
                    <>
                        <input
                            type="text"
                            id='firstname'
                            name='firstname'
                            placeholder='First Name'
                            className='h-[60px] w-full bg-slate-900 bg-opacity-40 rounded-sm mb-2 outline-none box-border focus:border-4 px-1 border-2'
                            {...register('firstname', {
                                required: "First Name required",
                            })}
                        />
                        <p className='text-red-700'>{errors.firstname?.message}</p>
                        <input
                            type="text"
                            id='Lastname'
                            name='Lastname'
                            placeholder='Last Name'
                            className='h-[60px] w-full bg-slate-900 bg-opacity-40 rounded-sm mb-2 outline-none box-border focus:border-4 px-1 border-2'
                            {...register('Lastname', {
                                required: "Last Name required",
                            })}
                        />
                        <p className='text-red-700'>{errors.Lastname?.message}</p>
                    </>
                )}
                <input
                    type="text"
                    id='email'
                    name='email'
                    placeholder='Email or phone number'
                    className='h-[60px] w-full bg-slate-900 bg-opacity-40 rounded-sm mb-2 outline-none box-border focus:border-4 px-1 border-2'
                    {...register('email', {
                        pattern: {
                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: "Invalid Email format",
                        }
                    })}
                />
                <p className='text-red-700'>{errors.email?.message}</p>
                <input
                    type="password"
                    id='password'
                    name='password'
                    placeholder='Your Password'
                    className='h-[60px] w-full bg-slate-900 bg-opacity-40 rounded-sm mb-2 outline-none box-border focus:border-4 px-1 border-2'
                    {...register('password', {
                        required: "Password is required",
                    })}
                />
                <p className='text-red-700'>{errors.password?.message}</p>
                {

                    <button type='submit' className='h-[50px] w-full bg-red-600 mt-2 mb-4'>{action}</button>

                }
            </form>
            <DevTool control={control} />
        </>
    );
};

export default Form;
