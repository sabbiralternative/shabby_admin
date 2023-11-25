import { useState } from "react";
import { config } from "../../utils/config";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Error from "../../components/Notification/Error";
import UseDownLineData from "../../hooks/UseDownlineData";

const userType = [
  {
    name: "Super Admin",
    value: "admin_master",
  },
  {
    name: "Admin",
    value: "hyper_master",
  },
  {
    name: "Master",
    value: "super_master",
  },

  {
    name: "Agent",
    value: "master",
  },
  {
    name: "User",
    value: "punter",
  },
];

const CreateAccount = () => {
  const createDownLineApi = config?.result?.endpoint?.createDownLine;
  const userCheckNameApi = config?.result?.endpoint?.checkUsername;
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const [user, setUser] = useState("");
  const [validUser, setValidUser] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [errNotify, setErrNotify] = useState("");
  const index = userType.findIndex((item) => item.value === role);
  const roleData = userType.slice(index + 1);
  const [, refetch] = UseDownLineData();

  const checkUserValidity = async (e) => {
    setUser(e);
    const res = await axios.post(
      userCheckNameApi,
      {
        username: e,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = res.data;
    if (data.success) {
      setValidUser(true);
    } else {
      setValidUser(false);
    }
  };

  const onSubmit = async (data) => {
    if (user.length === 0) {
      setValidUser(false);
      return;
    }
    const res = await axios.post(
      createDownLineApi,
      {
        password: data?.password,
        confirmPassword: data?.password,
        accountType: data?.role,
        notes: data?.remark,
        loginname: user,
        mpassword: data?.transactionCode,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = res.data;
    if (result?.success) {
      refetch();
      navigate("/admin/user");
    } else if (result?.success === false) {
      setErrNotify(result?.error?.status[0]?.description);
    }
  };

  return (
    <div data-v-b00d14ae="" className="page-content">
      {errNotify && <Error message={errNotify} setMessage={setErrNotify} />}
      <div data-v-b00d14ae="">
        <div data-v-b00d14ae="">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <h4 className="mb-0 font-size-18">Create Account</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <Link to="/" className="">
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/admin/user" className="router-link-active">
                        Users
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">
                      <span aria-current="location">Create Account</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            data-vv-scope="InserUserAccount"
          >
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>User name:</label>
                          <input
                            onChange={(e) => {
                              checkUserValidity(e.target.value);
                            }}
                            placeholder="User Name"
                            type="text"
                            name="userName"
                            className={`form-control animation ${
                              validUser ? "is-valid" : "is-invalid"
                            }`}
                          />
                        </div>
                        {/*    <!-- is-valid / is-invalid --> */}
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Password:</label>
                          <input
                            {...register("password", { required: true })}
                            placeholder="Password"
                            type="password"
                            name="password"
                            className={`form-control animation ${
                              errors.password ? "is-invalid" : ""
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Full Name:</label>
                      <input
                        {...register("fullName", { required: true })}
                        placeholder="Full Name"
                        data-vv-as="Full Name"
                        type="text"
                        name="fullName"
                        className={`form-control animation ${
                          errors.fullName ? "is-invalid" : ""
                        }`}
                        aria-required="true"
                        aria-invalid="false"
                      />
                    </div>

                    <div className="form-group tag-select">
                      <label>User Type:</label>
                      <select
                        {...register("role", { required: true })}
                        name="role"
                        label="label"
                        data-vv-as="User Type"
                        className={`form-control ${
                          errors.role ? "is-invalid" : ""
                        }`}
                        aria-required="true"
                        aria-invalid="false"
                      >
                        <option value="">Select User Type</option>

                        {roleData?.map((role, i) => {
                          return (
                            <option key={i} value={role?.value}>
                              {role?.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div className="d-flex justify-content-end align-items-center">
                      <input
                        {...register("transactionCode", { required: true })}
                        placeholder="Transaction Code"
                        type="password"
                        name="transactionCode"
                        className={`form-control ${
                          errors.transactionCode ? "is-invalid" : ""
                        }`}
                        aria-required="true"
                        aria-invalid="false"
                      />
                      <button
                        type="submit"
                        id="spinner-dark-8"
                        className="btn btn-primary ml-2"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">General Information</h4>
                    <div className="form-group">
                      <label>City:</label>
                      <input
                        {...register("city", { required: true })}
                        placeholder="City"
                        type="text"
                        data-vv-as="City"
                        name="city"
                        className="form-control animation"
                        aria-required="false"
                        aria-invalid="false"
                      />
                    </div>
                    <div className="form-group">
                      <label>Mobile Number:</label>
                      <input
                        {...register("mobileNumber", { required: true })}
                        placeholder="Mobile Number"
                        type="text"
                        data-vv-as="Mobile Number"
                        name="mobileNumber"
                        maxLength="15"
                        className="form-control animation"
                        aria-required="false"
                        aria-invalid="false"
                      />
                    </div>
                    <div className="form-group">
                      <label>Remark:</label>
                      <textarea
                        {...register("remark", { required: true })}
                        placeholder="Remark"
                        data-vv-as="Remark"
                        name="remark"
                        className="form-control"
                        aria-required="false"
                        aria-invalid="false"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end align-items-center">
                      <button
                        type="submit"
                        id="spinner-dark-8"
                        className="btn btn-primary ml-2"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
