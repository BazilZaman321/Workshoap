import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const tempErrors = {};
    if (!name) tempErrors.name = "Name is required";
    if (!email.includes("@")) tempErrors.email = "Email is invalid";
    if (password.length < 6) tempErrors.password = "Minimum 6 characters";

    setErrors(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
      alert("Form Submitted ✅");
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-4 bg-gray-100 rounded">
      <h2 className="text-xl font-bold text-center mb-4">Simple Form</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        
        {/* Name */}
        <input
          className="w-full p-2 border rounded"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}

        {/* Email */}
        <input
          className="w-full p-2 border rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}

        {/* Password */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            className="w-full p-2 border rounded"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="absolute right-2 top-2 text-sm text-blue-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        {errors.password && <p className="text-sm text-red-600">{errors.password}</p>}

        {/* Submit */}
        <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
