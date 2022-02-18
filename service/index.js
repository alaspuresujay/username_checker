export const getGithubUser = (data) =>
  fetch(`https://api.github.com/users/${data}`)
    .then((res) => res.json())
    .then((json) => ({
      items: json,
      DataisLoaded: true,
    }));

export const getInstagramUser = (data) => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Cookie",
    "csrftoken=DXBJY5fBPO1npr3GzfHMZ0NET78hew5H; ig_did=442A6E9E-9CD6-4A36-8887-E8CC699944DC; ig_nrcb=1; mid=Yg9A4wAEAAG4TApR65uHuHBWznDL"
  );

  var requestOptions = {
    mode: "no-cors",
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    "https://www.instagram.com/web/search/topsearch/?context=blended&query=alaspuresujay&rank_token=0.3953592318270893&count=1",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log("RESULT", result))
    .catch((error) => console.log("ERR> ", error));

  // fetch(`https://www.instagram.com/${data}?__a=1`, {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Accept: "*/*",
  //     "Access-Control-Allow-Headers": "X-Custom-Header",
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Credentials": "true",
  //   },
  // })
  //   .then((res) => res.json())
  //   .then((json) => ({
  //     items: json,
  //     DataisLoaded: true,
  //   }));
};
const fetchService = (url, data) =>
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((json) => ({
      items: json,
      DataisLoaded: true,
    }));

export const getFacebookUser = (data) => {
  const access_token =
    "EAAD8C5MyWfYBAGzlWXAiHjzVHv9h0y1a9fwQyLZCjYvUktMs3Du4KwBsAv4UUWpKftriZCIu63sMUg3HvZAiRhP4Gs0eZB0Egu2Nz2pC8mHAT9QjIE6082pkGuhDY5ts9jyuf7svpcpVbJQweRRUpgboRyMZBKN11iBBeHPM8SKNx5bWKCxCrZB1ck6duM2zH6JSkq8c0GG4HPzXSZBtoUowHXzam0hbqBgBrQbM3mzvOrFsGr6i1lo";
  const url = `https://graph.facebook.com/v13.0/2071680996336011?access_token=${access_token}`;
  var requestOptions = {
    mode: "no-cors",
    method: "GET",
    // headers: myHeaders,
    redirect: "follow",
  };

  fetch(url, requestOptions)
    .then((response) => response.json())
    .then((result) => console.log("RESULT", result))
    .catch((error) => console.log("ERR> ", error));
};
