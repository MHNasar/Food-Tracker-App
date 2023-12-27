
let foodlist = [
  { id: 1, name: 'Chicken Breast', fat: 3.6, carbs: 0, protein: 31 },
  { id: 2, name: 'Brown Rice', fat: 1.6, carbs: 45, protein: 5 },
  { id: 3, name: 'Broccoli', fat: 0.3, carbs: 6, protein: 2.4 },
  { id: 4, name: 'Olive Oil', fat: 14, carbs: 0, protein: 0 },
  { id: 5, name: 'Banana', fat: 0.4, carbs: 27, protein: 1.3 },
  { id: 6, name: 'Quinoa', fat: 4, carbs: 39, protein: 8 },
  { id: 7, name: 'Almonds', fat: 14, carbs: 6, protein: 6 },
  { id: 8, name: 'Salmon', fat: 13, carbs: 0, protein: 25 },
  { id: 9, name: 'Sweet Potato', fat: 0.2, carbs: 26, protein: 2 },
  { id: 10, name: 'Eggs', fat: 10, carbs: 1, protein: 12 },
  { id: 11, name: 'Spinach', fat: 0, carbs: 1, protein: 1 },
  { id: 12, name: 'Greek Yogurt', fat: 9, carbs: 9, protein: 23 },
  { id: 13, name: 'Oats', fat: 4, carbs: 28, protein: 6 },
  { id: 14, name: 'Avocado', fat: 21, carbs: 12, protein: 2 },
  { id: 15, name: 'Black Beans', fat: 1.3, carbs: 41, protein: 15 },
  { id: 16, name: 'Ground Beef (90% lean)', fat: 10, carbs: 0, protein: 27 },
  { id: 17, name: 'Blueberries', fat: 0.5, carbs: 21, protein: 1 },
  { id: 18, name: 'Cottage Cheese', fat: 10, carbs: 6, protein: 28 },
  { id: 19, name: 'Whole Wheat Bread', fat: 2, carbs: 24, protein: 8 },
  { id: 20, name: 'Shrimp', fat: 1, carbs: 0, protein: 24 },
  { id: 21, name: 'Apple', fat: 0.3, carbs: 25, protein: 0.5 },
  { id: 22, name: 'Carrots', fat: 0.2, carbs: 12, protein: 0.6 },
  { id: 23, name: 'Peanut Butter', fat: 16, carbs: 8, protein: 7 },
  { id: 24, name: 'Lentils', fat: 0.4, carbs: 40, protein: 18 },
  { id: 25, name: 'Cheese (Cheddar)', fat: 9, carbs: 0.4, protein: 7 },
  { id: 26, name: 'Tomato', fat: 0.2, carbs: 5, protein: 1 },
  { id: 27, name: 'Ground Turkey (93% lean)', fat: 8, carbs: 0, protein: 22 },
  { id: 28, name: 'Walnuts', fat: 18, carbs: 4, protein: 4 },
  { id: 29, name: 'Oranges', fat: 0.2, carbs: 15, protein: 1.2 },
  { id: 30, name: 'Yogurt (plain, non-fat)', fat: 0.4, carbs: 17, protein: 10 },
  { id: 31, name: 'Tofu', fat: 5, carbs: 2, protein: 10 },
  { id: 32, name: 'Hummus', fat: 8, carbs: 14, protein: 8 },
  { id: 33, name: 'Chickpeas', fat: 3, carbs: 27, protein: 9 },
  { id: 34, name: 'Turkey Breast', fat: 1, carbs: 0, protein: 26 },
  { id: 35, name: 'Pumpkin Seeds', fat: 13, carbs: 15, protein: 6 },
  { id: 36, name: 'Cauliflower', fat: 0.3, carbs: 5, protein: 2 },
  { id: 37, name: 'Milk (1% fat)', fat: 2, carbs: 12, protein: 8 },
  { id: 38, name: 'Beef Steak (lean)', fat: 5, carbs: 0, protein: 30 },
  { id: 39, name: 'Green Peas', fat: 0.4, carbs: 14, protein: 5 },
  { id: 40, name: 'Pineapple', fat: 0.2, carbs: 21, protein: 0.5 },
  { id: 41, name: 'Cucumber', fat: 0.2, carbs: 4, protein: 1 },
  { id: 42, name: 'Chia Seeds', fat: 9, carbs: 12, protein: 4 },
  { id: 43, name: 'Beets', fat: 0.2, carbs: 10, protein: 1.6 },
  { id: 44, name: 'Raspberries', fat: 0.7, carbs: 12, protein: 1.5 },
  { id: 45, name: 'Tuna (canned in water)', fat: 1, carbs: 0, protein: 20 },
  { id: 46, name: 'Mushrooms', fat: 0.3, carbs: 3, protein: 2 },
  { id: 47, name: 'Pasta (whole wheat)', fat: 1.3, carbs: 37, protein: 7 },
  { id: 48, name: 'Artichokes', fat: 0.2, carbs: 11, protein: 3.3 },
  { id: 49, name: 'Grapefruit', fat: 0.2, carbs: 9, protein: 0.6 },
  { id: 50, name: 'Cabbage', fat: 0.1, carbs: 6, protein: 1.3 },
  { id: 51, name: 'Peppers (bell)', fat: 0.3, carbs: 6, protein: 1 },
  { id: 52, name: 'Tilapia', fat: 2, carbs: 0, protein: 26 },
  { id: 53, name: 'Cottage Cheese (fat-free)', fat: 0.3, carbs: 4, protein: 14 },
  { id: 54, name: 'Soy Milk', fat: 4, carbs: 5, protein: 7 },
  { id: 55, name: 'Green Tea', fat: 0, carbs: 0, protein: 0 },
  { id: 56, name: 'Cherries', fat: 0.3, carbs: 16, protein: 1.3 },
  { id: 57, name: 'Beef Liver', fat: 5, carbs: 0, protein: 21 },
  { id: 58, name: 'Honey', fat: 0, carbs: 82, protein: 0.3 },
  { id: 59, name: 'Grapes', fat: 0.2, carbs: 17, protein: 0.6 },
  { id: 60, name: 'Peaches', fat: 0.3, carbs: 15, protein: 1.6 },
  { id: 61, name: 'Cottage Cheese (2% fat)', fat: 2, carbs: 3, protein: 13 },
  { id: 62, name: 'Pomegranate Seeds', fat: 1.2, carbs: 38, protein: 3.4 },
  { id: 63, name: 'Turkey Sausage', fat: 10, carbs: 2, protein: 16 },
  { id: 64, name: 'Haddock', fat: 0.6, carbs: 0, protein: 20 },
  { id: 65, name: 'Cranberries', fat: 0.4, carbs: 12, protein: 0.4 },
  { id: 66, name: 'Asparagus', fat: 0.2, carbs: 4, protein: 2.2 },
  { id: 67, name: 'Turkey Breast (smoked)', fat: 2, carbs: 0, protein: 22 },
  { id: 68, name: 'Mackerel', fat: 18, carbs: 0, protein: 20 },
  { id: 69, name: 'Sunflower Seeds', fat: 23, carbs: 20, protein: 24 },
  { id: 70, name: 'Sardines (in oil)', fat: 11, carbs: 0, protein: 24 }
];



let todaysFood = [];


function updateDateTime() {
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);
  document.getElementById('current-date-time').textContent = formattedDate;
}

// Functions to handle the food list
function showFoodList() {
  let html = '<h2>Full Food List</h2>';
  html += '<table><tr><th>Name</th><th>Fat (g)</th><th>Carbs (g)</th><th>Protein (g)</th><th>Edit /Delete/Add to Today</th>';
  foodlist.forEach(food => {
    html += `<tr>
      <td>${food.name}</td>
      <td>${food.fat}</td>
      <td>${food.carbs}</td> 
      <td>${food.protein}</td>
      <td>
        <button onclick="editFood(${food.id})">Edit</button>
        <button onclick="deleteFood(${food.id})">Delete</button>
        <button onclick="addToToday(${food.id})">Add to Today's</button>
      </td>
    </tr>`;
  });

  html += '</table>';
  document.getElementById('content').innerHTML = html;
}


function addToToday(foodId) {
  const foodItem = foodlist.find(food => food.id === foodId);
  if (foodItem) {
    todaysFood.push(foodItem);
  }
}

function editFood(foodId) {
  
  console.log('Editing food with Id:', foodId);
}

function deleteFood(foodId) {
  foodlist = foodlist.filter(food => food.id !== foodId);
  showFoodList();
}



function updateTodayChart() {
  const proteinTotal = todaysFood.reduce((acc, curr) => acc + curr.protein, 0);
  const carbsTotal = todaysFood.reduce((acc, curr) => acc + curr.carbs, 0);
  const fatTotal = todaysFood.reduce((acc, curr) => acc + curr.fat, 0);

  const chartData = {
    labels: ['Protein', 'Carbs', 'Fat'],
    datasets: [{
      data: [proteinTotal, carbsTotal, fatTotal],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    }],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const chartCanvas = document.getElementById('todayChartCanvas');
  new Chart(chartCanvas, {
    type: 'pie',
    data: chartData,
    options: chartOptions,
  });
}


updateTodayChart();

// Functions to handle today's food List
function showToday() {
  let html = '<h2>Today\'s Food List</h2>';
  html += '<table><tr><th>Name</th><th>Fat (g)</th><th>Carbs (g)</th><th>Protein (g)</th><th>Remove</th>';
  todaysFood.forEach(food => {
    html += `<tr>
      <td>${food.name}</td>
      <td>${food.fat}</td>
      <td>${food.carbs}</td> 
      <td>${food.protein}</td>
      <td>
        <button onclick="removeFromToday(${food.id})">Remove</button>
      </td>
    </tr>`;
  });
  html += '</table>';
  document.getElementById('content').innerHTML = html;
}

function removeFromToday(foodId) {
  todaysFood = todaysFood.filter(food => food.id !== foodId);
  showToday(); // Update Today's view
}


showFoodList();


updateDateTime();
setInterval(updateDateTime, 1000); // Update every second
