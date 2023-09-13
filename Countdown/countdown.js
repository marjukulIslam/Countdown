// styling

let classList = {
  cover: `flex flex-col w-2/3 md:flex-row md:w-full lg:w-3/4 max-w-2/3 gap-14 justify-evenly items-center py-20 px-10`,
  imageBox: `flex-1`,
  text: `flex-1 w-full p-8 bg-gray-300 rounded-lg flex flex-col gap-8`,
  image: `rounded-md`,
  textHeader: `flex flex-col gap-1`,
  description: `text-gray-700`,
  counter: `flex flex-wrap md:flex-nowrap justify-center gap-4`,
  headline: `text-2xl font-semibold text-blue-500`,
  targetTime: `font-bold text-gray-700 tracking-wider`,
  box: `flex rounded-lg flex-col justify-center items-center bg-gray-800 h-20 w-20 text-gray-50 p-3`,
  digit: `text-3xl`,
  type: ``,
};

let elementName = [
  "cover",
  "imageBox",
  "text",
  "image",
  "textHeader",
  "description",
  "counter",
  "headline",
  "targetTime",
  "box",
  "digit",
  "type",
];

elementName.forEach((element) => {
  let name = element;
  element = document.querySelector(`.${element}`);
  element.classList = classList[`${name}`];
  element.classList.add(`${name}`);
});

// innerContent

innerContent = {
  headline: `Vision: London Bridge`,
  targetTime: `Get toghether at London Bridge on the 1st October, 2032`,
  description: `
মহান আল্লাহ আমাদের সবাইকে জান্নাতিদের অন্তর্ভুক্ত করুক। এবং সেখানে দেখা করার সৌভাগ্য দিক। আর এই ছোট্ট দুনিয়ার জীবনেও আমাদের সবাইকে দীর্ঘ আয়ু দান করুক। এবং আল্লাহ আমাদের আর্থিক ভাবে সচ্ছল হতে সাহায্য করুক। দেশের বাইরে কোথাও সবাইকে একত্রীত হবার তৌফিক দিক।
নিজেদের সর্বোচ্চ দিয়ে নিজেদের বিকাশের জন্য পরিশ্রম করে যেতে পারার তৌফিক প্রার্থনা মহান সৃষ্টিকর্তার কাছে।
    `,
  digit: `-`,
  type: `-`,
};

let variableContent = [
  "headline",
  "targetTime",
  "description",
  "digit",
  "type",
];

// function and loop variables

let times;
let names = ["Years", "Months", "Days", "Hours", "Minutes", "Seconds"];

//

variableContent.forEach((content) => {
  document.querySelector(`.${content}`).textContent = `${
    innerContent[`${content}`]
  }`;
});

// countdown box - set up

for (let i = 0; i < names.length; i++) {
  let counter = document.querySelector(".counter");
  let box = document.querySelector(".box");
  let extracted = counter.appendChild(box.cloneNode(true));
}

document.querySelector(".box").remove();

//

let targetDate = new Date(2032, 9, 1).getTime();

let countdown = setInterval(RemainingTime, 1000);
RemainingTime();

//

function RemainingTime() {
  let currentDate = new Date().getTime();

  let dueMs = targetDate - currentDate;

  let dueYears = dueMs / (1000 * 60 * 60 * 24 * 365);
  let Years = Math.floor(dueYears);

  let dueMonths = (dueYears - Years) * (365 / 30);
  let Months = Math.floor(dueMonths);

  let dueDays = (dueMonths - Months) * 30;
  let Days = Math.floor(dueDays);

  let dueHours = (dueDays - Days) * 24;
  let Hours = Math.floor(dueHours);

  let dueMinutes = (dueHours - Hours) * 60;
  let Minutes = Math.floor(dueMinutes);

  let dueSeconds = (dueMinutes - Minutes) * 60;
  let Seconds = Math.floor(dueSeconds);

  times = [Years, Months, Days, Hours, Minutes, Seconds];

  for (let i = 0; i < names.length; i++) {
    document.querySelectorAll(".digit")[i].textContent = times[i];
    document.querySelectorAll(".type")[i].textContent = names[i];
  }

  if (dueMs < 0) {
    document.querySelector(
      ".counter"
    ).innerHTML = `<p class=''>Time has passed! and it waits for none!</p>`;
  }
}
