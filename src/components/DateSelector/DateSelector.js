import React from "react";
function DateSelector({ currentDateRangeHandler }) {
  let dateHandler = (e) => currentDateRangeHandler(e.target.value);
  return (
    <div className="dateSelectorWrapper">
      <select className="selectorTop dateSelector" onChange={dateHandler}>
        <option value="">Select date</option>
        <option value="Today">Today</option>
        <option value="This Week">This Week</option>
        <option value="This Month">This Month</option>
      </select>
    </div>
  );
}
export default DateSelector;
