import React, { useState } from "react";

const CountBox = () => {
  const [num, setNum] = useState(0);
  const increase = () => {
    if (num < 10) {
      setNum(num + 1);
    } else {
      setNum(10);
      setmax(true);
    }
  };
  const decrease = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      setNum(0);
      setmin(true);
    }
  };
  const reset = () => {
    setNum(num === 0);
    setmax(false);
    setmin(false);
  };

  const [show, setshow] = useState(true);
  const [max, setmax] = useState(false);
  const [min, setmin] = useState(false);

  return (
    <>
      <div class="card my-5 ">
        <h5 class="card-header">Count Table</h5>
        <div class="card-body">
          <h1 class="card-title">{num}</h1>
          <div className="Massage">
            {show && <p class="card-body">Start Counting...</p>}
          </div>

          <button
            onClick={() => {
              increase();
              setshow(false);
            }}
            class="btn btn-primary"
            type="submit"
          >
            Increase
          </button>
          <button
            onClick={() => {
              decrease();
              setshow(false);
            }}
            class="btn btn-light"
            type="submit"
          >
            Decrease
          </button>
          <button
            onClick={() => {
              reset();
              setshow(true);
            }}
            class="btn btn-warning"
            type="submit"
          >
            Reset
          </button>
          <div class="alert alert-primary my-5" role="alert">
            {max && <p>Reached max Number!!!</p>}
          </div>
          <div class="alert alert-primary" role="alert">
            {min && <p>Reached minimum Number!!!</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default CountBox;
