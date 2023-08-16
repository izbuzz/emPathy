const url = 'https://indeed12.p.rapidapi.com/jobs/search?query=computer&location=kearny&page_id=2&fromage=3&radius=50';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '15e2bce657msh861b79608fa97dbp1af47cjsn3a71e7c9028f',
    'X-RapidAPI-Host': 'indeed12.p.rapidapi.com'
  }
};

const jobs = document.getElementById("jobs");

fetch(url, options)
  .then(response => response.json())
  .then(jobs => jobs["hits"].forEach(job => createListing(job)));


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
