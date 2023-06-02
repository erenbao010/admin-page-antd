import { Button, Table } from "antd";
import PrimaryLayout from "../../components/Layout";
import { useState } from "react";
import Admin_edit_user from "../User/AddUser";
import Chart from "../../components/Chart/Grantchart";
import Chart2 from "../../components/Chart/Chart2";
const About = () => {
  return (
    <div>
      <Chart></Chart>
      <Chart2></Chart2>
    </div>
  );
};

export default About;
