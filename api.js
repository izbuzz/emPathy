const json = {"count":15,"hits":[{"company_name":"Tru Talent","formatted_relative_time":"2 days ago","id":"eb758bf367aa0ff8","link":"/job/eb758bf367aa0ff8?locality=us","locality":"us","location":"Paramus, NJ","pub_date_ts_milli":1691989200000,"title":"IT Specialist Level 1"},{"company_name":"Rutgers University","formatted_relative_time":"2 days ago","id":"71a245d44e3ab763","link":"/job/71a245d44e3ab763?locality=us","locality":"us","location":"Newark, NJ 07102","pub_date_ts_milli":1691989200000,"title":"User Support Specialist III (Newark Network Operations)"},{"company_name":"Pryor Cashman","formatted_relative_time":"1 day ago","id":"3a565ae2f539efe8","link":"/job/3a565ae2f539efe8?locality=us","locality":"us","location":"New York, NY 10036","pub_date_ts_milli":1691989200000,"title":"Help Desk Analyst"},{"company_name":"Woongjin, Inc","formatted_relative_time":"Today","id":"6f1cb8bfd11c10cb","link":"/job/6f1cb8bfd11c10cb?locality=us","locality":"us","location":"Ridgefield Park, NJ","pub_date_ts_milli":1692075600000,"title":"System Administrator - bilingual (Korean/English)"},{"company_name":"Legacy Seller","formatted_relative_time":"1 day ago","id":"db66db6e844cbbd8","link":"/job/db66db6e844cbbd8?locality=us","locality":"us","location":"Nanuet, NY 10954","pub_date_ts_milli":1692075600000,"title":"Computer Programmer"},{"company_name":"Geek Squad","formatted_relative_time":"Today","id":"7fe506f13b2daffb","link":"/job/7fe506f13b2daffb?locality=us","locality":"us","location":"Jersey City, NJ 07310","pub_date_ts_milli":1692075600000,"title":"Geek Squad Advanced Repair Agent"},{"company_name":"Citi","formatted_relative_time":"Just posted","id":"c775af9d681df965","link":"/job/c775af9d681df965?locality=us","locality":"us","location":"New York, NY 10012","pub_date_ts_milli":1690952400000,"title":"BSG In- Business Risk and Control Full Time Analyst 2024"},{"company_name":"Teaneck Public Schools","formatted_relative_time":"1 day ago","id":"43742bb7ff6e9753","link":"/job/43742bb7ff6e9753?locality=us","locality":"us","location":"Teaneck, NJ 07666","pub_date_ts_milli":1691989200000,"title":"Anticipated Vacancy - Technology Support Specialist Level 1"},{"company_name":"Safe Passage Project","formatted_relative_time":"1 day ago","id":"c0c51d4f0e03bc73","link":"/job/c0c51d4f0e03bc73?locality=us","locality":"us","location":"New York, NY 10013","pub_date_ts_milli":1690866000000,"title":"Operations & IT Associate"},{"company_name":"EOS IT Solutions","formatted_relative_time":"2 days ago","id":"2c80d566dc4537e3","link":"/job/2c80d566dc4537e3?locality=us","locality":"us","location":"New York, NY","pub_date_ts_milli":1691902800000,"title":"AV Lead Field Technician"},{"company_name":"JPMorgan Chase & Co","formatted_relative_time":"Today","id":"e7496670672a96d8","link":"/job/e7496670672a96d8?locality=us","locality":"us","location":"Jersey City, NJ 07310","pub_date_ts_milli":1691989200000,"title":"Business User Acceptance Testing Analyst - Payments"},{"company_name":"NICE Systems","formatted_relative_time":"1 day ago","id":"d7fa00e8a35d978f","link":"/job/d7fa00e8a35d978f?locality=us","locality":"us","location":"Hoboken, NJ","pub_date_ts_milli":1692075600000,"title":"Director of Support"},{"company_name":"Valfile","formatted_relative_time":"2 days ago","id":"e52f779b03e7a0d0","link":"/job/e52f779b03e7a0d0?locality=us","locality":"us","location":"Jersey City, NJ 07302","pub_date_ts_milli":1691989200000,"title":"Software Engineer"},{"company_name":"Radware","formatted_relative_time":"1 day ago","id":"4fba7b592ec9b13b","link":"/job/4fba7b592ec9b13b?locality=us","locality":"us","location":"Mahwah, NJ 07430","pub_date_ts_milli":1691989200000,"title":"Emergency Response Team (ERT) Security Analyst"},{"company_name":"ClientServer Technology Solutions","formatted_relative_time":"Today","id":"8831c0029e577c3c","link":"/job/8831c0029e577c3c?locality=us","locality":"us","location":"Iselin, NJ 08830","pub_date_ts_milli":1692162000000,"title":"Software Developer"}],"indeed_final_url":"https://www.indeed.com/jobs?q=computer&l=kearny&start=10&fromage=3&radius=50","next_page_id":3,"suggest_locality":null};

const jobs = document.getElementById("jobs");

// fetch(url, options)
//   .then(response => response.json())
// 	.then(response => JSON.stringify(response))
// 	.then(response => console.log(response));
  // .then(jobs => jobs["hits"].forEach(job => createListing(job)));
json["hits"].forEach(job => createListing(job));


function createListing(job) {
  const e = document.createElement("li");
  const company = document.createElement("h3");
  company.textContent = job["company_name"];
  const desc = document.createElement("p");
  desc.textContent = job["title"];
  const location = document.createElement("h4");
  location.textContent = job["location"]
  const link = document.createElement("a");
  link.href = "https://www.indeed.com/viewjob?jk=" + job["link"].slice(4);

  e.append(company, desc, location, link);
  jobs.append(e);
}
