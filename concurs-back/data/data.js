import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "OrganisedChaos1!",
  database: "concrus-back",
  port: 3306,
});