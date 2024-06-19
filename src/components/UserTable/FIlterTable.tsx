import { useEffect, useRef } from "react";
import { useState } from "react";
import filter from "../../assets/icon/filter-results-button.svg";
import "./userTable.scss";

type PropsType = {
  current: number;
};

const FIlterTable = ({ current }: PropsType) => {
  const [filterer, setFilterer] = useState<number | boolean>();

  const organization = ["Select", "lendsqr", "nokia", "jku", "gtyh"];
  const status = ["Select", "Active", "Inactive", "Pending", "Blacklist"];

  const boxRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleClick = (ev: MouseEvent) => {
      if (!boxRef.current?.contains(ev.target as Node)) {
        setFilterer(!filterer);
        // close the box
      }
    };
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [boxRef]);

  return (
    <span ref={boxRef}>
      <img
        className="th-img"
        src={filter}
        alt="filter"
        onClick={() => setFilterer(current)}
      />
      {filterer === current && (
        <div className="filter">
          <form>
            <div className="form-filter-options">
              <label htmlFor="organization">Organization</label>
              <select name="organization" id="organization">
                {organization.map((item, index) => (
                  <option key={index}>{item}</option>
                ))}
              </select>
            </div>
            <div className="form-filter-options">
              <label htmlFor="username">Username</label>
              <input
                className="inputs"
                type="text"
                name="username"
                placeholder="User"
              />
            </div>
            <div className="form-filter-options">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div className="form-filter-options">
              <label htmlFor="date">Date</label>
              <input type="date" name="date" placeholder="Date" />
            </div>
            <div className="form-filter-options">
              <label htmlFor="tel">Phone Number</label>
              <input type="tel" name="tel" placeholder="Phone Number" />
            </div>
            <div className="form-filter-options">
              <label htmlFor="status">Status</label>
              <select name="status" id="status">
                {status.map((item, index) => (
                  <option key={index}>{item}</option>
                ))}
              </select>
            </div>
            <div className="filter-buttons">
              <button type="reset">Reset</button>
              <button type="submit">Filter</button>
            </div>
          </form>
        </div>
      )}
    </span>
  );
};

export default FIlterTable;
