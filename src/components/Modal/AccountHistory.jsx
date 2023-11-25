const AccountHistory = ({ profileData }) => {
  return (
    <div
      className="tab-content text-muted"
      id="__BVID__2237__BV_tab_container_"
    >
      <div
        role="tabpanel"
        aria-hidden="false"
        className="tab-pane active"
        id="__BVID__2246"
        aria-labelledby="__BVID__2246___BV_tab_button__"
      >
        <div className="table-responsive">
          <div className="table no-footer table-responsive-sm">
            <table
              id="eventsListTbl"
              role="table"
              aria-busy="false"
              aria-colcount="5"
              className="table b-table"
            >
              {/*    <!----><!----> */}
              <thead role="rowgroup" className="">
                {/*     <!----> */}
                <tr role="row" className="">
                  <th
                    role="columnheader"
                    scope="col"
                    aria-colindex="1"
                    className=""
                  >
                    <div>Super User</div>
                  </th>
                  <th
                    role="columnheader"
                    scope="col"
                    aria-colindex="2"
                    className=""
                  >
                    <div>User</div>
                  </th>
                  <th
                    role="columnheader"
                    scope="col"
                    aria-colindex="3"
                    className=""
                  >
                    <div>Transfer From</div>
                  </th>
                  <th
                    role="columnheader"
                    scope="col"
                    aria-colindex="4"
                    className="text-right"
                  >
                    <div>Amount</div>
                  </th>
                  <th
                    role="columnheader"
                    scope="col"
                    aria-colindex="5"
                    className=""
                  >
                    <div>Date</div>
                  </th>
                </tr>
              </thead>
              <tbody role="rowgroup">
                {/*   <!----> */}
                {profileData?.length > 0 &&
                  profileData?.map((data, i) => {
                    return (
                      <tr key={i} role="row" className="">
                        <td aria-colindex="1" role="cell" className="">
                          {data?.superUser}
                        </td>
                        <td aria-colindex="2" role="cell" className="">
                          {data?.user}
                        </td>
                        <td aria-colindex="3" role="cell" className="">
                          {data?.transferForm}
                        </td>
                        <td aria-colindex="4" role="cell" className="">
                          <p className="text-right mb-0">{data?.amount}</p>
                        </td>
                        <td aria-colindex="5" role="cell" className="">
                          <div>{data?.date}</div>
                        </td>
                      </tr>
                    );
                  })}

                {/*   <!----><!----> */}
              </tbody>
              {/*    <!----> */}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountHistory;
