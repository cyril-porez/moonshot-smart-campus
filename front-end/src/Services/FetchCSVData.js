import { useEffect, useState } from "react";
import axios from "axios"; // Import Axios

export default function FetchCSVData() {
  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    fetchCSVData(); // Fetch the CSV data when the component mounts
  }, []); // The empty array ensures that this effect runs only once, like componentDidMount

  const fetchCSVData = () => {
    const csvUrl =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSfZSb7e36Zoyo5jHyh6ntNEQgmJ8-iyvx2ndk1KmmILLK7fYAVEhJUa_PIHllBxBYy8J4MImBrDdVZ/pub?output=csv"; // Replace with your Google Sheets CSV file URL

    axios
      .get(csvUrl) // Use Axios to fetch the CSV data
      .then((response) => {
        const parsedCsvData = parseCSV(response.data); // Parse the CSV data into an array of objects
        setCsvData(parsedCsvData); // Set the fetched data in the component's state
        console.log(parsedCsvData); // Log the data to the console
      })
      .catch((error) => {
        console.error("Error fetching CSV data:", error);
      });
  };

  function parseCSV(csvText) {
    const rows = csvText.split(/\r?\n/); // Use a regular expression to split the CSV text into rows while handling '\r'
    const headers = rows[0].split(","); // Extract headers (assumes the first row is the header row)
    const data = []; // Initialize an array to store the parsed data
    for (let i = 1; i < rows.length; i++) {
      const rowData = rows[i].split(","); // Use the regular expression to split the row while handling '\r'
      const rowObject = {};
      for (let j = 0; j < headers.length; j++) {
        rowObject[headers[j]] = rowData[j];
      }
      data.push(rowObject);
    }
    return data;
  }

  return null; // Return null since we don't want to render anything
}
