import React from 'react';
import { useForm } from 'react-hook-form';

export type SignInFormData = {
  email: string;
  password: string;
};

const Signin = () => {
  const {
    register,
    formState: { errors },
  } = useForm<SignInFormData>();

  return (
    <form className="flex flex-col gap-5 ">
      <h2 className="text-3xl font-bold">Sign in</h2>
      <label className="text-grey-700 text-sm font-bold flex-1">
        Email
        <input
          type="email"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register('email', { required: 'This field is required' })}
        />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
      </label>
      <label className="text-grey-700 text-sm font-bold flex-1">
        Password
        <input
          type="password"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register('password', {
            required: 'This field is required',
            minLength: { value: 6, message: 'Password must be at least 6 characters' },
          })}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </label>
    </form>
  );
};

export default Signin;
