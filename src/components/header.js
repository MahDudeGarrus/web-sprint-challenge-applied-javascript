const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  let mainDiv = document.createElement("div")
  let firstSpan = document.createElement("span")
  let  secondSpan = document.createElement("span");
  let  firstH1 = document.createElement("h1");

  secondSpan.textContent = temp;
  firstSpan.textContent = date;
  firstH1.textContent = title;

  mainDiv.classList.add("header")
  firstSpan.classList.add("date")
  secondSpan.classList.add("temp")
  
  mainDiv.appendChild(firstSpan);      
  mainDiv.appendChild(firstH1);
  mainDiv.appendChild(secondSpan);
  return mainDiv;

}

const headerAppender = (selector) => {
  const headerContainer = document.querySelector(`${selector}`)
  headerContainer.appendChild(Header('What?', '5/16/2021', '70F'))
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
