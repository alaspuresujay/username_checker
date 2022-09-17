import React, { useEffect, useState } from "react";
import style from "../styles/algo.module.css";
function algo() {
  const randomArray = [
    427, 126, 783, 216, 273, 71, 793, 547, 761, 885, 477, 985, 824, 646, 264,
    813, 463, 415, 370, 513, 429, 886, 448, 462, 688, 356, 172, 655, 34, 5, 542,
    959, 801, 508, 96, 418, 582, 608, 338, 825, 123, 774, 345, 428, 298, 187,
    234, 883, 916, 614, 318, 317, 216, 317, 692, 837, 800, 186, 87, 898, 811,
    934, 576, 641, 247, 530, 13, 726, 461, 846, 535, 362, 494, 205, 112, 703,
    935, 777, 846, 849, 597, 935, 369, 844, 29, 321, 809, 471, 521, 705, 526,
  ];

  const [arra, setArra] = useState(randomArray);
  const [pass, setPass] = useState(1);

  // get max and min value of array
  const max = Math.max(...randomArray);
  const min = Math.min(...randomArray);

  useEffect(() => {
    const arrayNew = bubbleSort(arra);
    // setArra(arrayNew);
  }, []);

  function scale(
    number: number,
    inMin: number,
    inMax: number,
    outMin: number,
    outMax: number
  ) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  }

  function bubbleSort(arr: number[]) {
    //Outer pass
    for (let i = 0; i < arr.length; i++) {
      //Inner pass
      setPass((prev) => prev + 1);

      for (let j = 0; j < arr.length - i - 1; j++) {
        //Value comparison using ascending order

        if (arr[j + 1] < arr[j]) {
          //Swapping

          [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        }
      }
      setTimeout(() => {
        setArra([...arr]);
        // console.log(arr);
      }, 5000);
      console.log("update", pass);
    }
    return arr;
  }

  return (
    <div className={style.algo__container}>
      <div className={style.algo__title}>
        <h1>Algorithms</h1>
      </div>
      <div className={style.algo__content}>
        <div
          style={{
            height: "30vh",
            backgroundColor: "yellow",
            width: 5,
            gap: 5,
            position: "relative",
          }}
        >
          <div
            style={{
              height: 2,
              backgroundColor: "gray",
              top: 10,
              position: "absolute",
            }}
          />
          {/* {(() => {
            for (let i = min; i <= max; i++) {
              return (
                <div
                  style={{
                    height: 1,
                    backgroundColor: "gray",
                    position: "absolute",
                    top: i,
                  }}
                />
              );
            }
          })()} */}
        </div>
        {
          // for loop to generate random number
          arra.map((item, index) => (
            <div
              onMouseOver={() => {
                console.log(item);
              }}
              key={index}
              style={{ height: `${scale(item, min, max, 0, 100)}%` }}
              className={style.algo__content__item}
            />
          ))
        }
      </div>
      {console.log(arra)}
      <div className={style.algo__content__min}>
        <p>Min: {min}</p>
        <p>Max: {max} </p>
        <p>pass: {pass}</p>
      </div>
    </div>
  );
}

export default algo;
