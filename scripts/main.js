const dataSetEls = document.getElementById("chart");
const myReq = new Request("data.json");
const dateCalculation = new Date();
let day = dateCalculation.getDay();

fetch(myReq)
	.then(response => response.json())
	.then(data => {
		for (let i = 0; i < data.length; i++) {
			console.log(`data.day 1: ${data[i].day}`);
			console.log(`data.day 1: ${data[i].amount}`);
			const dataSetEl = document.createElement("div");
			const amountEl = document.createElement("div");
			const dayEl = document.createElement("p");

			amountEl.style.height = `${data[i].amount * 2}px`;
			amountEl.className = "chart__amount";

			dayEl.className = "chart__day";
			dayEl.textContent = data[i].day;
			if (data[i].day === getDayName(day)) {
				amountEl.className = "chart__amount active";
			} else {
				amountEl.className = "chart__amount";
			}

			dataSetEl.className = "chart__data-set";
			dataSetEl.appendChild(amountEl);
			dataSetEl.appendChild(dayEl);
			dataSetEls.appendChild(dataSetEl);
		}
	})
	.catch(console.error);

function getDayName(day) {
	switch (day) {
		case 0:
			return "sun";
			break;
		case 1:
			return "mon";
			break;
		case 2:
			return "tue";
			break;
		case 3:
			return "wed";
			break;
		case 4:
			return "thu";
			break;
		case 5:
			return "fri";
			break;
		case 6:
			return "sat";
			break;
	}
}
//function createHTMLEls(data) {
//	const amountEl = document.createElement("div");
//			amountEl.className = "chart__amount";
//}

// async function updateChart(spendingData) {
// 	let spending = await fetch(spendingData);
// }
