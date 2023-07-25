window.onload = function () {
  let form = document.getElementById("search-form");

  form.onsubmit = function (event) {
    event.preventDefault(); // Prevent form from submitting normally
    let domainName = document.getElementById("search-field").value;
    fetchDomainInfo(domainName);
  };
};

function fetchDomainInfo(domainName) {
  let app = document.getElementById("app");
  app.innerHTML = ""; // Clear the div for new data

  let apiUrl = `http://localhost:3000/api/domaininfo/${domainName}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      // Check if data and data.domain are defined and that data.domain is an array.
      if (
        !data ||
        !data.domain ||
        !Array.isArray(data.domain) ||
        data.domain.length === 0
      ) {
        console.error("Unexpected response data");
        return;
      }

      let domain = data.domain[0];

      let domainNameElement = document.createElement("h2");
      domainNameElement.textContent = `Domain Name: ${domain.domainname}`;

      let domainType = document.createElement("p");
      domainType.textContent = `Domain Type: ${domain.domaintype}`;

      let domainStatus = document.createElement("p");
      domainStatus.textContent = `Status: ${domain.status}`;

      let authCode = document.createElement("p");
      domainStatus.textContent = `Auth Code: ${domain.authcode}`;

      let ownerContact = document.createElement("p");
      ownerContact.textContent = `Owner Contact: ${domain.owner_contact.contact_firstname} ${domain.owner_contact.contact_lastname}`;

      let nameservers = document.createElement("p");
      nameservers.textContent = `Nameservers: ${domain.nameserver
        .map((ns) => ns.hostname)
        .join(", ")}`;

      app.appendChild(domainNameElement);
      app.appendChild(domainType);
      app.appendChild(domainStatus);
      app.appendChild(authCode);
      app.appendChild(ownerContact);
      app.appendChild(nameservers);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
