// import { SparklesCore } from "@/components/ui/sparkles";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [passShow, setPassShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="md:grid grid-cols-2 gap-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered"
                />
                {errors.name && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: "Password field is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    
                  })}
                  type={passShow ? "text" : "password"}
                  placeholder="Enter your password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a className="label-text-alt link link-hover">
                    <p onClick={() => setPassShow(!passShow)}>
                      <small>
                        {passShow ? (
                          <span>Hide Pass</span>
                        ) : (
                          <span>Show Pass</span>
                        )}
                      </small>
                    </p>
                  </a>
                </label>
                {errors.password && <span>{errors.password.message}</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  {...register("confirm", {
                    required: "Confirm password field is required",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  type={passShow ? "text" : "password"}
                  placeholder="Confirm password"
                  className="input input-bordered"
                />
                {errors.confirm && <span>{errors.confirm.message}</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Contact Number</span>
                </label>
                <input
                  {...register("number", { required: true })}
                  type="number"
                  placeholder="+088"
                  className="input input-bordered"
                />
                {errors.number && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  {...register("photo", { required: true })}
                  type="text"
                  placeholder="Photo url"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                {...register("address", { required: true })}
                type="text"
                placeholder="Enter your Address"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-1">
              <button className="btn btn-warning">Sign Up</button>
            </div>
          </form>
          <div className="px-5 text-center">
            <div className="divider mt-0 "></div>
            <p className="font-semibold">Or Sign In with</p>
          </div>
          <div className="text-center mb-7">
            <Link to="/login">
              Have an account?{" "}
              <span className="text-yellow-700 font-bold">LogIn</span>{" "}
            </Link>
          </div>
    </div>
  );
};

export default SignUp;
