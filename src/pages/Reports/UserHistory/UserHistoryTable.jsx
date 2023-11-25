const UserHistoryTable = ({ userHistoryData,tableRef }) => {
  return (
    <div className="table no-footer table-hover table-responsive-sm">
      <table
      ref={tableRef}
        id="user-history"
        role="table"
        aria-busy="false"
        aria-colcount="4"
        className="table b-table"
      >
        <thead role="rowgroup" className="">
          <tr role="row" className="">
            <th
              role="columnheader"
              scope="col"
              tabIndex="0"
              aria-colindex="1"
              aria-sort="none"
              className="position-relative"
            >
              <div>Username</div>
              <span className="sr-only">(Click to sort ascending)</span>
            </th>
            <th role="columnheader" scope="col" aria-colindex="2" className="">
              <div>Date</div>
            </th>
            <th role="columnheader" scope="col" aria-colindex="3" className="">
              <div>IP</div>
            </th>
            <th role="columnheader" scope="col" aria-colindex="4" className="">
              <div>Detail</div>
            </th>
          </tr>
        </thead>
        <tbody role="rowgroup">
          {userHistoryData?.map(({ date, ip, username }, i) => {
            return (
              <tr key={i} role="row" aria-rowindex="1" className="">
                <td aria-colindex="1" role="cell" className="">
                  {username}
                </td>
                <td aria-colindex="2" role="cell" className="">
                  <div>{date}</div>
                </td>
                <td aria-colindex="3" role="cell" className="">
                  {ip}
                </td>
                <td aria-colindex="4" role="cell" className="">
                  <p className="text-center pointer mb-0">
                    <i className="fas fa-eye"></i>
                  </p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserHistoryTable;
