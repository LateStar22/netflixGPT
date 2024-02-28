import { FormProvider, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

const Form = () => {
    const form = useForm({
        defaultValues : {
            firstname : "",
            password : ""
        }
    }); //form is an object here. It helps in 1. manage form data 2. submit form data 3. Enforce validation and provide visual feedback
    const { register, control,handleSubmit,formState } = form; //formState object contains Error for all form fields.
    const {errors} = formState;

    const onSubmit = (data) => { // we can also post this data to an API on fly right from here.
        console.log("form submitted",data);
    };

    return (//noValidate will prevent by default browser form validation.
        <>
            <form onSubmit={handleSubmit(onSubmit)} noValidate> 
                <input
                    type="text"
                    id='fname'
                    name='firstname'
                    placeholder='Email or phone number'
                    className='h-[60px] w-full bg-slate-900 bg-opacity-40 rounded-sm mb-2 outline-none box-border focus:border-4 px-1 border-2'
                    {...register('firstname', {  //by using register now this input field is being tracked by react-hook-form. 
                        pattern: { //using pattern validation, we can use required also
                            value : /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message : "Invalid Email format",
                        },
                        validate : {
                            notAdmin : (fieldValue) => {
                                return (
                                    fieldValue !== "admin@gmail.com" || 
                                    "Enter a valid email address"
                                );
                            },
                            notBadDomain : (fieldValue) => {
                                return (
                                    !fieldValue.includes("baddomain.com") || 
                                    "This domain is not supported"
                                );
                            }
                        }
                    })}
                />
                <p className='text-red-700'>{errors.firstname?.message}</p>
                <input
                    type="password"
                    id='password'
                    name='password'
                    placeholder='Your Password'
                    className='h-[60px] w-full bg-slate-900 bg-opacity-40 rounded-sm mb-2 outline-none box-border focus:border-4 px-1 border-2'
                    {...register('password', {
                        required: { //used required here.
                            value : true,
                            message : "password required"}
                    })}
                />
                <p className='text-red-700'>{errors.password?.message}</p>
                <button type='submit' className='h-[50px] w-full bg-red-600 mt-2 mb-4'>Sign In</button>
            </form>
            <DevTool control={control} />
        </>
    );
};

export default Form;
