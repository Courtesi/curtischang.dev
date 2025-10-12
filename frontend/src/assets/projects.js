const projects = []

const filtered = projects.filter(element => element.description.includes("Featured:")).map(element => ({...element, description: element.description.slice(10)}));
filtered.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

filtered.forEach(element => {
    const total = Object.values(element.languages).reduce((sum, value) => sum + value, 0);

    // Step 2: Convert to Percentage
    const percentagesArray = Object.entries(element.languages).map(([key, value]) => [
        key, 
        ((value / total) * 100).toFixed(2) // Convert to percentage & round
    ]);

    // Step 3: Sort the Array in Descending Order (Greatest percentage first)
    percentagesArray.sort((a, b) => b[1] - a[1]);

    // Step 4: Convert Back to an Object (Optional)
    const sortedPercentages = Object.fromEntries(percentagesArray);

    element.languages = sortedPercentages;
});


console.log(filtered);

export default filtered;