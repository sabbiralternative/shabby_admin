const CurrentBetsTable = ({ betsType, filteredBetsData, tableRef }) => {
  return (
    <div className="table no-footer table-responsive-sm">
      <table
        ref={tableRef}
        id="current-bets"
        role="table"
        aria-busy="false"
        aria-colcount="11"
        className="table b-table table-bordered"
      >
        <colgroup>
          <col style={{ width: "auto" }} />
          <col style={{ width: "200px" }} />
          <col style={{ width: "auto" }} />
          <col style={{ width: "auto" }} />
          <col style={{ width: "auto" }} />
          <col style={{ width: "auto" }} />
          <col style={{ width: "auto" }} />
          <col style={{ width: "auto" }} />
          <col style={{ width: "auto" }} />
          <col style={{ width: "auto" }} />
          <col style={{ width: "auto" }} />
        </colgroup>
        <thead role="rowgroup" className="">
          {/* Sports T-Head */}
          {betsType === "sports" && (
            <tr role="row" className="">
              <th
                role="columnheader"
                scope="col"
                tabIndex="0"
                aria-colindex="1"
                aria-sort="none"
                className="position-relative"
              >
                <div>Event Type</div>
                <span className="sr-only">(Click to sort ascending)</span>
              </th>
              <th
                role="columnheader"
                scope="col"
                tabIndex="0"
                aria-colindex="2"
                aria-sort="none"
                className="position-relative"
              >
                <div>Event Name</div>
                <span className="sr-only">(Click to sort ascending)</span>
              </th>
              <th
                role="columnheader"
                scope="col"
                tabIndex="0"
                aria-colindex="3"
                aria-sort="none"
                className="position-relative"
              >
                <div>User Name</div>
                <span className="sr-only">(Click to sort ascending)</span>
              </th>
              <th
                role="columnheader"
                scope="col"
                tabIndex="0"
                aria-colindex="4"
                aria-sort="none"
                className="position-relative"
              >
                <div>M Name</div>
                <span className="sr-only">(Click to sort ascending)</span>
              </th>
              <th
                role="columnheader"
                scope="col"
                tabIndex="0"
                aria-colindex="5"
                aria-sort="none"
                className="position-relative"
              >
                <div>Nation</div>
                <span className="sr-only">(Click to sort ascending)</span>
              </th>
              <th
                role="columnheader"
                scope="col"
                tabIndex="0"
                aria-colindex="6"
                aria-sort="none"
                className="position-relative text-right"
              >
                <div>U Rate</div>
                <span className="sr-only">(Click to sort ascending)</span>
              </th>
              <th
                role="columnheader"
                scope="col"
                tabIndex="0"
                aria-colindex="7"
                aria-sort="none"
                className="position-relative text-right"
              >
                <div>Amount</div>
                <span className="sr-only">(Click to sort ascending)</span>
              </th>
              <th
                role="columnheader"
                scope="col"
                tabIndex="0"
                aria-colindex="8"
                aria-sort="none"
                className="position-relative"
              >
                <div>Place Date</div>
                <span className="sr-only">(Click to sort ascending)</span>
              </th>
              <th
                role="columnheader"
                scope="col"
                tabIndex="0"
                aria-colindex="9"
                aria-sort="none"
                className="position-relative"
              >
                <div>IP</div>
                <span className="sr-only">(Click to sort ascending)</span>
              </th>
              <th
                role="columnheader"
                scope="col"
                aria-colindex="10"
                className=""
              >
                <div>Browser</div>
              </th>
              <th
                role="columnheader"
                scope="col"
                aria-colindex="11"
                className=""
              >
                <div>Action</div>
              </th>
            </tr>
          )}
          {/* casino T-Head */}
          {betsType === "casino" && (
            <tr role="row" className="">
              <th
                role="columnheader"
                scope="col"
                tabIndex="0"
                aria-colindex="1"
                aria-sort="none"
                className="position-relative"
              >
                <div>Event Name</div>
                <span className="sr-only"> (Click to sort ascending)</span>
              </th>
              <th
                role="columnheader"
                scope="col"
                tabIndex="0"
                aria-colindex="2"
                aria-sort="none"
                className="position-relative"
              >
                <div>User Name</div>
                <span className="sr-only"> (Click to sort ascending)</span>
              </th>
              <th
                role="columnheader"
                scope="col"
                tabIndex="0"
                aria-colindex="3"
                aria-sort="none"
                className="position-relative"
              >
                <div>Nation</div>
                <span className="sr-only"> (Click to sort ascending)</span>
              </th>
              <th
                role="columnheader"
                scope="col"
                tabIndex="0"
                aria-colindex="4"
                aria-sort="none"
                className="position-relative text-right"
              >
                <div>U Rate</div>
                <span className="sr-only"> (Click to sort ascending)</span>
              </th>
              <th
                role="columnheader"
                scope="col"
                tabIndex="0"
                aria-colindex="5"
                aria-sort="none"
                className="position-relative text-right"
              >
                <div>Amount</div>
                <span className="sr-only"> (Click to sort ascending)</span>
              </th>
              <th
                role="columnheader"
                scope="col"
                tabIndex="0"
                aria-colindex="6"
                aria-sort="none"
                className="position-relative"
              >
                <div>Place Date</div>
                <span className="sr-only"> (Click to sort ascending)</span>
              </th>
              <th
                role="columnheader"
                scope="col"
                tabIndex="0"
                aria-colindex="7"
                aria-sort="none"
                className="position-relative"
              >
                <div>IP</div>
                <span className="sr-only"> (Click to sort ascending)</span>
              </th>
              <th
                role="columnheader"
                scope="col"
                aria-colindex="8"
                className=""
              >
                <div>Browser</div>
              </th>
              <th
                role="columnheader"
                scope="col"
                aria-colindex="9"
                className=""
              >
                <div>Action</div>
              </th>
            </tr>
          )}
        </thead>

        {/* Sports T-Body */}
        {betsType === "sports" && (
          <tbody role="rowgroup">
            {filteredBetsData?.map((betData, i) => {
            
              return (
                <tr
                  key={i}
                  role="row"
                  aria-rowindex="1"
                  className={`${
                    betData?.betType === "Lay" ? "lay-border" : "back-border"
                  }`}
                >
                  <td aria-colindex="1" role="cell" className="">
                    {betData?.sports}
                  </td>
                  <td aria-colindex="2" role="cell" className="">
                    {betData?.eventName}
                  </td>
                  <td aria-colindex="3" role="cell" className="">
                    alex12
                  </td>
                  <td aria-colindex="4" role="cell" className="">
                    {betData?.marketName}
                  </td>
                  <td aria-colindex="5" role="cell" className="">
                    <p className="mb-0">{betData?.nation}</p>
                  </td>
                  <td aria-colindex="6" role="cell" className="">
                    <p className="text-right mb-0">{betData?.userRate}</p>
                  </td>
                  <td aria-colindex="7" role="cell" className="">
                    <p className="text-right mb-0">{betData?.amount}</p>
                  </td>
                  <td aria-colindex="8" role="cell" className="">
                    <div>{betData?.placeDate}</div>
                  </td>
                  <td aria-colindex="9" role="cell" className="">
                    <p className="mb-0 pointer">{betData?.ipAddress}</p>
                  </td>
                  <td aria-colindex="10" role="cell" className="">
                    <a className="text-success">Detail</a>
                  </td>
                  <td aria-colindex="11" role="cell" className="">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        value="[object Object]"
                        id="__BVID__1721"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="__BVID__1721"
                      ></label>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        )}

        {/* Casino T-Body */}
        {betsType === "casino" && (
          <tbody role="rowgroup">
            {/* <!----> */}
            <tr role="row" className="b-table-empty-row">
              <td colSpan="9" role="cell" className="">
                <div role="alert" aria-live="polite">
                  <div className="text-center my-2">
                    There are no records to show
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        )}
        {/* Casino T-Body */}
        {betsType === "sports" && filteredBetsData?.length === 0 && (
          <tbody role="rowgroup">
            {/* <!----> */}
            <tr role="row" className="b-table-empty-row">
              <td colSpan="9" role="cell" className="">
                <div role="alert" aria-live="polite">
                  <div className="text-center my-2">
                    There are no records to show
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

export default CurrentBetsTable;
