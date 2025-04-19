async function submitFoodData() {
  const food = document.getElementById('foodInput').value;
  const quantity = document.getElementById('quantityInput').value;

  if (!food || !quantity) {
    alert("Please enter both food and quantity.");
    return;
  }

  const apiUrl = "https://ztjp1rn43b.execute-api.us-east-1.amazonaws.com/prod/calories"; // your real API

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        food: food,
        quantity: quantity
      })
    });

    const data = await response.json();

    document.getElementById("calorieOutput").innerText = `Total Calories: ${data.calories}`;
  } catch (error) {
    console.error("Error:", error);
    document.getElementById("calorieOutput").innerText = "Error fetching data.";
  }
}
