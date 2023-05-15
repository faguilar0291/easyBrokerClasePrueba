class EasyBrokerAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://staging-api.easybroker.com/v1";
  }

  async getProperties() {
    const headers = {
      Authorization: `Bearer ${this.apiKey}`,
      "Content-Type": "application/json",
    };

    const url = `${this.baseUrl}/properties`;

    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });

    if (response.ok) {
      const data = await response.json();
      const titles = [];
      data.data.forEach((property) => {
        titles.push(property.attributes.title);
      });
      return titles;
    } else {
      return [];
    }
  }
}

// Example usage
const apiKey = "l7u502p8v46ba3ppgvj5y2aad50lb9";
const api = new EasyBrokerAPI(apiKey);
api.getProperties().then((titles) => {
  console.log("Titles of properties:");
  titles.forEach((title) => {
    console.log(title);
  });
});
