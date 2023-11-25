import { useState } from "react";
import { config } from "../../utils/config";
import axios from "axios";

const BankTable = ({ data }) => {
  const [clientPnls, setClientPnls] = useState(Array(data?.length).fill(""));
  const downLineEdit = config?.result?.endpoint?.downLineEdit;
  const token = localStorage.getItem("token");
  const [errorMsg, setErrorMsg] = useState(Array(data?.length).fill(""));
  const [successMsg, setSuccessMsg] = useState(Array(data?.length).fill(""));
  const [lastClickedIndex, setLastClickedIndex] = useState(null);



  const handleSubmit = async (i, username) => {
    setLastClickedIndex(i);
    let newClientPnls = [...clientPnls];
    const res = await axios.post(
      downLineEdit,
      {
        downlineId: username,
        amount: newClientPnls[i],
        type: "bankTransfer",
        mpassword: 123456,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const data = res.data;
    if (data?.success) {
      setSuccessMsg(data?.result?.message);
      console.log(data);
    } else {
      console.log(data);
      setErrorMsg(data?.error?.status[0]?.description);
    }
  };

  return (
    <div className="table no-footer table-hover table-responsive-sm">
      <table
        id="eventsListTbl"
        role="table"
        aria-busy="false"
        aria-colcount="9"
        className="table b-table"
      >
        {/*  <!----> */}
        <colgroup>
          <col style={{ width: "200px" }} />
          <col style={{ width: "auto" }} />
          <col style={{ width: "auto" }} />
          <col style={{ width: "auto" }} />
          <col style={{ width: "auto" }} />
          <col style={{ width: "auto" }} />
          <col style={{ width: "auto" }} />
          <col style={{ width: "250px" }} />
          <col style={{ width: "200px" }} />
        </colgroup>
        <thead role="rowgroup" className="">
          {/*   <!----> */}
          <tr role="row" className="">
            <th role="columnheader" scope="col" aria-colindex="1" className="">
              <div>User Name</div>
            </th>

            <th
              role="columnheader"
              scope="col"
              aria-colindex="3"
              className="text-right"
            >
              <div>Pts</div>
            </th>
            <th
              role="columnheader"
              scope="col"
              aria-colindex="4"
              className="text-right"
            >
              <div>Client(P/L)</div>
            </th>
            <th
              role="columnheader"
              scope="col"
              aria-colindex="5"
              className="text-right"
            >
              <div>Exposure</div>
            </th>
            <th
              role="columnheader"
              scope="col"
              aria-colindex="6"
              className="text-right"
            >
              <div>Available Pts</div>
            </th>
            <th role="columnheader" scope="col" aria-colindex="7" className="">
              <div>Account Type</div>
            </th>
            <th role="columnheader" scope="col" aria-colindex="8" className="">
              <div>Action</div>
            </th>
            <th role="columnheader" scope="col" aria-colindex="9" className="">
              <div>Status</div>
            </th>
          </tr>
        </thead>
        <tbody role="rowgroup">
          {/*    <!----> */}
          {data &&
            data?.length > 0 &&
            data?.map(
              (
                { accountType, availablePts, exposure, pnl, pts, username },
                i
              ) => {
                return (
                  <tr key={i} role="row" className="">
                    <td aria-colindex="1" role="cell" className="">
                      <span title="Lake777 (ajdjd)" className="text-ellipsis">
                        {username}
                      </span>
                    </td>

                    <td aria-colindex="3" role="cell" className="">
                      <p className="text-right mb-0">{pts}</p>
                    </td>

                    <td aria-colindex="4" role="cell" className="">
                      <p className="text-right mb-0">{pnl}</p>
                    </td>

                    <td aria-colindex="5" role="cell" className="">
                      <p className="text-right mb-0">{exposure}</p>
                    </td>

                    <td aria-colindex="6" role="cell" className="">
                      <p className="text-right mb-0">{availablePts}</p>
                    </td>

                    <td aria-colindex="7" role="cell" className="">
                      {accountType}
                    </td>

                    <td aria-colindex="8" role="cell" className="">
                      <a
                        onClick={() => {
                          const newClientPnls = [...clientPnls];
                          newClientPnls[i] =
                            newClientPnls[i] === pnl ? "" : pnl;
                          setClientPnls(newClientPnls);
                        }}
                        style={{ cursor: "pointer" }}
                        className="text-success"
                      >
                        All <i className="fas fa-arrow-right"></i>
                      </a>
                      <input
                        type="number"
                        name="amount"
                        placeholder="0"
                        className="form-control form-control-sm transfer-amt"
                        value={clientPnls[i]}
                        onChange={(e) => {
                          const newClientPnls = [...clientPnls];
                          newClientPnls[i] = e.target.value;
                          setClientPnls(newClientPnls);
                        }}
                      />
                      <button
                        onClick={() => handleSubmit(i, username)}
                        className="btn btn-info btn-sm"
                      >
                        Submit
                      </button>
                    </td>
                    <td aria-colindex="9" role="cell" className="">
                      {lastClickedIndex === i ? (
                        <span
                          className={`${
                            successMsg.length > 1 ? "text-success" : "text-danger"
                          }`}
                        >
                          {errorMsg ? errorMsg : null}
                          {successMsg ? successMsg : null}
                        </span>
                      ) : null}
                    </td>
                  </tr>
                );
              }
            )}
        </tbody>
      </table>
    </div>
  );
};

export default BankTable;
