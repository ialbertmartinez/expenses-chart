const dataSetEls = document.getElementById("chart");
const myReq = new Request("data.json");
const dateCalculation = new Date();
let day = dateCalculation.getDay();

fetch(myReq)
	.then(response => response.json())
	.then(data => {
		for (let i = 0; i < data.length; i++) {
			console.log(`data.day ${i}: ${data[i].day}`);
			console.log(`data.day ${i}: ${data[i].amount}`);
			const dataSetEl = document.createElement("div");
			const amountEl = document.createElement("div");
			const dayEl = document.createElement("p");
			const amountTooltipEl = document.createElement("div");

			amountEl.style.height = `${data[i].amount * 2}px`;
			amountEl.className = "chart__amount";

			amountTooltipEl.className = "chart__amount chart__amount_tooltip";
			amountTooltipEl.textContent = numberToCurrencyFormat(data[i].amount);

			dayEl.className = "chart__day";
			dayEl.textContent = data[i].day;

			if (data[i].day === getDayName(day)) {
				amountEl.className = "chart__amount active";
			} else {
				amountEl.className = "chart__amount";
			}

			dataSetEl.className = "chart__data-set";
			dataSetEl.appendChild(amountEl);
			dataSetEl.appendChild(amountTooltipEl);
			dataSetEl.appendChild(dayEl);
			dataSetEls.appendChild(dataSetEl);
		}
	})
	.catch(console.error);

const numberToCurrencyFormat = amount => {
	return amount.toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
	});
};

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
		default:
			return "Invalid input. Try again.";
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
