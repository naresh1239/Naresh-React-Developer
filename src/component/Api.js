import "./css-component/Education.css"
const Api = [
  {
    id: 1,
    title: "Frontend Developer",
    cat : "skill",
    ex : "More than 3 years ",
    p: <div className="progress">
      <div className="flex">
        <h5>HTML</h5>
        <h5>90%</h5>
      </div>
      <meter max="100" min="20" value="90"></meter>

      <div className="flex">
        <h5>css</h5>
        <h5>80%</h5>
      </div>
      <meter max="100" min="20" value="80"></meter>

      <div className="flex">
        <h5>javascript</h5>
        <h5>60%</h5>
      </div>
      <meter max="100" min="20" value="60"></meter>

      <div className="flex">
        <h5>bootstrap</h5>
        <h5>80%</h5>
      </div>
      <meter max="100" min="20" value="80"></meter>

      <div className="flex">
        <h5>react</h5>
        <h5>75%</h5>
      </div>
      <meter max="100" min="20" value="75"></meter>
      
    </div> ,
  },

  {
    id: 3,
    title: "Education",
    ex : "",
    cat : "edu",
    p: <div className="education-api">
      <h5>Diploma In Computer Application</h5>
      <p>Ballabgarh - Institute</p>
      <p>2019-2021</p>
    </div>,
  },
  {
    id: 3,
    title: "My goals",
    ex : "",
    cat : "aim",
    p: "I want to become a full stack mern developer ",
  },
  {
    id: 4,
    title: "Web Development",
    ex : "",
    cat : "edu",
    p: <div className="education-api">
    <h5>Youtube</h5>
    <p>2019-202..</p>
  </div>,
  },
  {
    id: 4,
    title: "Some fontend designs",
    ex : "Website links",
    cat : "pro",
    p: <div className="education-api">
      <p><i className="bi bi-at"></i><a href="https://naresh1239.github.io/whatsappclone/" target="_blank">whatsappclone</a></p>
      <p><i className="bi bi-at"></i><a href="https://naresh1239.github.io/bootstrap-5/" target="_blank">bootstrap-5 website without single line of css code</a></p>
      <p><i className="bi bi-at"></i><a href="https://naresh1239.github.io/firsttodoapp/" target="_blank">todo app with localStorage</a></p>
      <p><i className="bi bi-at"></i><a href="https://naresh1239.github.io/darkmood/" target="_blank">beautiful card with darkmode</a></p>
      <p><i className="bi bi-at"></i><a href="https://naresh1239.github.io/ecommerce/" target="_blank">ecommerce website design</a></p>
      <p><i className="bi bi-at"></i><a href="https://naresh1239.github.io/BRUNCH/" target="_blank">website with pure css</a></p>
    
  </div>,
  },
];
export default Api;
