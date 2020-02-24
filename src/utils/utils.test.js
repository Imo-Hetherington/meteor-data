const { filterYear, createMeteorCount } = require("./utils");
const meteors = [
  {
    name: "Aachen",
    id: "1",
    nametype: "Valid",
    recclass: "L5",
    mass: "21",
    fall: "Fell",
    year: "1880-01-01T00:00:00.000",
    reclat: "50.775000",
    reclong: "6.083330",
    geolocation: {
      latitude: "50.775",
      longitude: "6.08333"
    }
  },
  {
    name: "Aarhus",
    id: "2",
    nametype: "Valid",
    recclass: "H6",
    mass: "720",
    fall: "Fell",
    year: "1951-01-01T00:00:00.000",
    reclat: "56.183330",
    reclong: "10.233330",
    geolocation: {
      latitude: "56.18333",
      longitude: "10.23333"
    }
  },
  {
    name: "Abee",
    id: "6",
    nametype: "Valid",
    recclass: "EH4",
    mass: "107000",
    fall: "Fell",
    year: "1952-01-01T00:00:00.000",
    reclat: "54.216670",
    reclong: "-113.000000",
    geolocation: {
      latitude: "54.21667",
      longitude: "-113.0"
    }
  }
];

describe("filterYear", () => {
  it("Given a single meteor object and a year, returns the meteor if it fell in that year", () => {
    expect(filterYear([meteors[0]], "1880")).toEqual([meteors[0]]);
  });
  it("function doesn't mutate or reference original array", () => {
    const arr = [];
    filterYear(arr, "1880");
    expect(arr).toEqual([]);
    expect(filterYear(arr, "1880")).not.toBe(arr);
  });
  it("Given multiple meteor objects and a year, returns the meteors that fell in that year", () => {
    expect(filterYear(meteors, "1880")).toEqual([meteors[0]]);
  });
});

describe.only("createMeteorCount", () => {
  it("Given a single year span, returns meteor count for that year", () => {
    expect(createMeteorCount(meteors, "1951", "1951")).toEqual({ 1951: 1 });
  });
  it("Given a 2 year span, returns meteor count for that year", () => {
    expect(createMeteorCount(meteors, "1951", "1952")).toEqual({
      1951: 1,
      1952: 1
    });
  });
});
