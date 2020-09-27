document.body.onload = displayLinks();

/**
 * This function displays the links to each set of notes for Web Frontend II.
 */
function displayLinks() {
  //ol li a
  const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    },
    {
      label: "Week2 notes",
      url: "week2/index.html"
    },
    {
      label: "Week3 notes",
      url: "week3/index.html"
    }
  ];
  const fullList = document.createElement('ol');
  for(link of links) {
      const elem = document.createElement('li');
      const a = document.createElement('a');
      a.innerText = link.label;
      a.href = link.url;
      elem.appendChild(a);
      fullList.appendChild(elem);
      console.log(fullList);
      document.body.appendChild(fullList);
  }
}