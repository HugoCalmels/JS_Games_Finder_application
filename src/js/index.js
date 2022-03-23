
console.log("hi")

const nav = `<a href="/">Home</a> | 
                   <a href="/about">About</a> | 
                   <a href="/contact">Contact</a>`;
      const routes = {
        "/": `<h1>Home</h1>${nav}<section class="home">I am the Home section</section>`,
        "/about": `<h1>About</h1>${nav}<section class="home">I am the about section</section>`,
        "/more":  `<h1>more</h1>${nav}<section class="home">I am the more section</section>`,
      };
      const render = path => {
        document.querySelector("#app")
          .innerHTML = routes[path] || `<h1>404</h1>${nav}`
        ;
        document.querySelectorAll('[href^="/"]').forEach(el => 
          el.addEventListener("click", evt => {
            evt.preventDefault();
            const {pathname: path} = new URL(evt.target.href);
            window.history.pushState({path}, path, path);
            render(path);
          })
        );
      };
      window.addEventListener("popstate", e =>
        render(new URL(window.location.href).pathname)
      );
render("/");
      

////////////////////////////////////////