// Function to create a horizontal bar chart
function createHorizontalBarChart(canvasId, title, yAxisValues, xAxisValues) {
    const ctx = document.getElementById(canvasId).getContext('2d');
  
    return new Chart(ctx, {
      type: 'bar',
      data: {
        labels: xAxisValues,
        datasets: [{
          label: title,
          data: yAxisValues,
          backgroundColor: 'rgba(0, 128, 0, 0.6)',
          borderColor: 'rgba(0, 128, 0, 1)',
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'y',
        scales: {
          x: {
            beginAtZero: true
          }
        }
      }
    });
  }
  
  // Sample data for the first chart (sorted in descending order)
  const jobLocationYValues = [60000, 55000, 50000, 45000, 40000, 35000, 30000, 25000, 20000, 15000, 10000, 5000, 0];
  const jobLocationXValues = ['Everett', 'Seattle', 'Lynnwood', 'Bothell', 'Mukilteo', 'Edmonds'];
  
  // Sample data for the second chart (sorted in descending order)
  const jobTypeYValues = [140000, 120000, 100000, 80000, 60000, 40000, 20000, 0];
  const jobTypeXValues = ['Service Plumbing', 'Bid Work HVAC', 'Service HVAC', 'Bid Work Plumbing', 'HWT Replacement', 'Maintenance', 'Material Sale'];
  
  // Create the first chart
  createHorizontalBarChart('jobLocationChart', 'Revenue By Job Location', jobLocationYValues, jobLocationXValues);
  
  // Create the second chart
  createHorizontalBarChart('jobTypeChart', 'Revenue By Job Type', jobTypeYValues, jobTypeXValues);
  