// npm install flag-icons
//# or
//yarn add flag-icons
async function fetchData() {
  try {
    let response = await fetch("cricketData.json");
    if (response.status != 200) {
      console.log("error while parsing");
    } else {
      let data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}
fetchData();
