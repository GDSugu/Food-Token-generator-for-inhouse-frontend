import { useState } from "react";
import BarChart from "./BarCharts";
import LineChart from "./LineCharts";
import PieChart from "./PieChart";

function FoodChart() {
    const UserData = [
    {
      id: 1,
      year: 2017,
      customer: 65000,
      
    },
    {
      id: 2,
      year: 2018,
      customer: 67300,
     
    },
    {
      id: 3,
      year: 2019,
      customer: 70000,
     
    },
    {
      id: 4,
      year: 2020,
      customer: 75000,
     
    },
    {
      id: 5,
      year: 2021,
      customer: 80000,
      
    },
  ];



  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Customer Growth",
        data: UserData.map((data) => data.customer),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  


  const FoodTypes = [
    {
      id: 1,
      Food: "Pizza",
      Variety: 18
      
      
    },
    {
      id: 2,
      Food: "Drinks",
      Variety: 6
     
    },
    {
      id: 3,
      Food: "Salads",
      Variety: 3
     
    },
    {
      id: 4,
      Food: "Sauces",
      Variety: 8
     
    },
    {
      id: 5,
      Food: "Pasta",
      Variety: 3
      
    },
    {
      id: 6,
      Food: "Desserts",
      Variety: 6
     
    }
  ];

  const [Foodtypes, setFoodtypes] = useState({
    labels: FoodTypes.map((data) => data.Food),
    datasets: [
      {
        label: "Customer Growth",
        data: FoodTypes.map((data) => data.Variety),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
          "#0a417a",
          "#323232"

        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });


  
  const ResBranch = [
    {
      id: 1,
      Country: "India",
      Branches: 10
    },
    {
      id: 2,
      Country: "Jordan",
      Branches: 6
     
    },
    {
      id: 3,
      Country: "United Arab Emirates",
      Branches: 6
     
    },
    {
      id: 4,
      Country: "Saudi Arabia",
      Branches: 9
     
    },
    {
      id: 5,
      Country: "Myanmar",
      Branches: 5
    },
    {
      id: 6,
      Country: "Bahrain " ,
      Branches: 7
     
    },
    {
      id: 7,
      Country: "China" ,
      Branches: 14
    },
    {
      id: 8,
      Country: "Cambodia" ,
      Branches: 9
    },
    {
      id: 9,
      Country: "Laos" ,
      Branches: 5
    },
    {
      id: 10,
      Country: "Thailand" ,
      Branches: 15
    }
  ];

  const [Branch, setBranch] = useState({
    labels: ResBranch.map((data) => data.Country),
    datasets: [
      {
        label: "Tasty Food Restuarant Worldwide Branches",
        data: ResBranch.map((data) => data.Branches),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
          "#0a417a",
          "#323232",
          "#cea9bc",
          "#2085ec",
          "#72b4eb"

        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });


  return (
    <>
    <div className="d-flex justify-content-center">

      <div style={{ width: 600 }}>
      <h2 style={{color:"red"}}>Food Menu - Tasty Food restaurant </h2>
        <PieChart  chartData={Foodtypes} />
      </div>
    </div>
    <br></br>

    <div className="d-flex justify-content-center">
       <div style={{ width: 700 }}>
       <h2 style={{color:"red"}}> Worldwide Branches - Tasty Food restaurant </h2>
        <BarChart chartData={Branch} />
      </div>
     
    </div>
    <br></br>

    <div className="d-flex justify-content-center">
      
      <div  style={{ width: 700 }}>
      <h2 style={{color:"red"}}> This chart shows the past five years of our Tasty Food restaurant customer growth</h2>
        <LineChart  chartData={userData} />
      </div>
    </div>
    </>
  );
}

export default FoodChart;