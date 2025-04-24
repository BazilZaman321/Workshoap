// import React,{useState} from 'react'


// const Register=()=>{
//     const [password ,setPassword]=  useState(" ");

//     const handleRegister =(e)=>{
//         e.preventDefault();
//         setPassword(" ");
//     }
//     return(
//         <form onSubmit={handleRegister}>
//             <input  
//             type='password'
//             placeholder='Enter password'
//             value={password}
//             onChange={(e)=>
//                 setPassword(e.target.value)
//             }required
//             />

//         </form>
//     );
// };


// export default Register










// import React, { useState } from 'react';
// import { Formik, Form, Field } from 'formik';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';

// const LoginForm = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 border border-gray-200 rounded-lg shadow-md">
//       <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

//       <Formik
//         initialValues={{ email: '', password: '' }}
//         onSubmit={(values) => {
//           console.log(values);
//         }}
//       >
//         {() => (
//           <Form className="space-y-5">
//             {/* Email Field */}
//             <div>
//               <label className="block text-sm font-medium mb-1">Email</label>
//               <Field
//                 type="email"
//                 name="email"
//                 className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             {/* Password Field with Eye Toggle */}
//             <div>
//               <label className="block text-sm font-medium mb-1">Password</label>
//               <div className="relative">
//                 <Field
//                   type={showPassword ? 'text' : 'password'}
//                   name="password"
//                   className="w-full px-4 py-2 border border-gray-300 rounded pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <span
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </span>
//               </div>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//             >
//               Login
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default LoginForm;

import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 border border-gray-200 rounded shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <div className="flex">
            <input
              type={show ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="px-3 bg-gray-200 rounded-r hover:bg-gray-300"
            >
              {show ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;