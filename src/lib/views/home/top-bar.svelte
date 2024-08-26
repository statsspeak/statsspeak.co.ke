<script lang="ts">
   import SsLogoSvg from "../../components/svgs/ss-logo-svg.svelte";
   import { onMount } from "svelte";
	import SunSvg from "../../components/svgs/sun-svg.svelte";
	import MoonSvg from "../../components/svgs/moon-svg.svelte";

   let isDarkMode = false; // Default is light mode

   const setTheme = (theme: "light" | "dark") => {
     const darkModeToggle = document.querySelector(".mode-toggle");

     if (theme === "dark") {
       document.documentElement.classList.add("dark-mode");
       localStorage.setItem("theme", "dark");
       isDarkMode = true;
     } else {
       document.documentElement.classList.remove("dark-mode");
       localStorage.setItem("theme", "light");
       isDarkMode = false;
     }
   };

   const toggleTheme = () => {
     const currentTheme = localStorage.getItem("theme") || "light";
     const newTheme = currentTheme === "dark" ? "light" : "dark";
     setTheme(newTheme as "light" | "dark");
   };

   const mapScrollIntoView = (selector: string): void => {
     const element = document.querySelector(selector);
     if (element) {
       element.scrollIntoView({ behavior: "smooth", block: "start" });
     }
   };

   onMount(() => {
     // Check if user has previously set dark mode preference (localStorage)
     const savedTheme = localStorage.getItem("theme") || "light";

     setTheme(savedTheme as "light" | "dark");

     // Add event listener for the toggle button
     const toggleButton = document.querySelector(".mode-toggle");
     toggleButton?.addEventListener("click", toggleTheme);
   });

   let menuOpen = false;

   function toggleMenu() {
     menuOpen = !menuOpen;
     const navMenu = document.querySelector(".nav-menu");
     const overlay = document.querySelector(".overlay");
     if (navMenu) {
       navMenu.classList.toggle("show-menu");
     }
     if (overlay) {
       overlay.classList.toggle("show-overlay");
     }
   }

   function handleKeydown(event: KeyboardEvent) {
     if (event.key === "Escape" && menuOpen) {
       toggleMenu();
     }
   }

   onMount(() => {
     document.addEventListener("keydown", handleKeydown);
     return () => {
       document.removeEventListener("keydown", handleKeydown);
     };
   });
 </script>

 <div id="top-bar" class="shadow">
   <div class="logo">
     <a href="/">
       <SsLogoSvg textColor="#fff" />
     </a>
   </div>
   <nav class="nav">
     <ul>
       <li><a href="/">Home</a></li>
       <li><a href="/">About us</a></li>
       <li><a href="/">Our Services</a></li>
       <li><a href="/">Our Team</a></li>
       <li>
        <span class="dropdown">
          <a href="/resources">Resources <img src="Chevron-down.svg" alt="chev" class="chevron-icon" /></a>
        </span>
         <div class="dropdown-content">
           <a href="/resources/case-studies">Case Studies</a>
           <a href="/resources/blog-articles">Blog Articles</a>
           <a href="/resources/press-releases">Press Releases</a>
           <a href="/resources/careers">Careers</a>
         </div>
       </li>
     </ul>
   </nav>
   <div class="top-cat">
     <span class="mode-toggle">
       {#if isDarkMode}
         <!-- Moon SVG -->
         <MoonSvg /> |
       {:else}
         <!-- Sun SVG -->
         <SunSvg /> |
       {/if}
     </span>
     <a href="/" >
     <button
       class="hero-button"
       on:click={() => mapScrollIntoView("#contact-us")}>
       Contact us
      </button>
    </a>
   </div>
   <div id="mobile-nav">
     <button
       class="nav-toggle"
       aria-label="Toggle navigation"
       on:click={toggleMenu}
     >
       ☰
     </button>
     <div
       class="overlay"
       class:show-overlay={menuOpen}
       on:click={toggleMenu}
     ></div>
     <nav class="nav-menu" class:show-menu={menuOpen}>
       <ul>
         <li><a href="#top#our-team">Home</a></li>
         <li><a href="#trusted-by">About us</a></li>
         <li><a href="#our-services">Our Services</a></li>
         <li><a href="#our-team">Our Team</a></li>
         <li><a href="#contact-us">Contact us</a></li>
       </ul>
     </nav>
   </div>
   <!-- <button class="nav-toggle" aria-label="Toggle navigation" on:click={toggleTheme}>
     {#if isDarkMode}
       Light Mode
     {:else}
       Dark Mode
     {/if}
 -->
 </div>

 <style>
   .shadow {
     background: var(--linear-gradient);
     box-shadow:
       0px 1px 3px rgb(0 0 0 / 0.5),
       0px 1px 2px rgb(0 0 0 / 0.1);
   }

   #top-bar {
     position: fixed;
     top: 0;
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 4px 24px;
     cursor: pointer;
     width: 100vw;
     height: 60px;
     z-index: 99;
     /* border: 1px solid reborder: 1px solid redd; */
   }

   nav {
     display: flex;
     align-items: center;
     justify-content: center;
     font-family: var(--font-family-secondary);
     gap: 1em;
     /* margin-left: auto; */
     /* border: 1px solid red; */
   }

   a {
    text-decoration: none;
   }

   /* nav a {
     color: white;
     text-decoration: none;
     font-size: 1em;
   } */

   nav a:hover {
     text-decoration: underline;
   }

   nav ul {
     display: flex;
     gap: 24px;
     margin-left: auto;
     list-style: none;
     padding: 0;
   }

   .nav ul li {
    position: relative;
   }

   .nav .dropdown-content {
     display: none;
     position: absolute;
     background-color: var(--dropdown-bg);
     box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
     min-width: 160px;
     z-index: 1;
     /* margin-top: 1.25em; */
   }

   .chevron-icon {
  vertical-align: middle; /* Aligns the chevron vertically with the text */
  width: 12px;
  height: 12px;
}

.dropdown {
  color: var(--text-color);
  display: flex;
  gap: 0.3em; /* Adjust gap to ensure even spacing between text and icon */
  justify-content: center;
  align-items: center;
}

nav a {
  color: white;
  text-decoration: none;
  font-size: 1em;
  display: flex; /* Ensure flex display for proper alignment */
  align-items: center;
}


   /* .dropdown {
     color: var(--text-color);
     display: flex;
     gap: .5em;
     justify-content: center;
     align-items: center;
   } */

   /* .nav .dropdown-content a {
     color: var(--constant-white);
     padding: 12px 16px;
     text-decoration: none;
     display: block;
   } */

   .nav .dropdown-content a {
    color: var(--text-color);
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

   .nav .dropdown-content a:hover {
     border-bottom: 1px solid var(--constant-blue);
   }

   .nav .dropdown:hover .dropdown-content {
     display: block;
   }

   .nav li:hover .dropdown-content {
    display: block;
  }

  .dropdown {
    cursor: pointer;
  }

   .top-cat {
     display: flex;
     align-items: center;
     /* margin-left: 10em; */
   }

   .top-cat button {
     color: var(--hero-button-text);
     background-color: var(--hero-button-bg);
   }

   #mobile-nav {
     display: none;
   }

   .nav-toggle {
     background: none;
     border: none;
     font-size: 2em;
     cursor: pointer;
     color: white;
   }

   .nav-menu {
     display: none;
     flex-direction: column;
     gap: 16px;
     position: absolute;
     top: 50px;
     right: 0;
     background-color: white;
     border: 1px solid #ccc;
     padding: 16px;
     box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
     align-items: center;
     z-index: 101;
   }

   .nav-menu ul {
     width: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
     padding: 0;
   }

   .nav-menu li {
     width: 100%;
     display: flex;
     justify-content: center;
   }

   .nav-menu a {
     text-decoration: none;
     color: #333;
     font-size: 1.2em;
   }

   .overlay {
     display: none;
     position: fixed;
     top: calc(60px + 1em);
     left: 0;
     width: 100vw;
     height: 100vh;
     background-color: rgba(0, 0, 0, 0.7);
     z-index: 100;
   }

   .mode-toggle {
     color: white;
     display: flex;
     justify-content: center;
     align-items: center;
     gap: 0.3em;
     margin-right: 0.3em;
     font-size: 2em;
     /* font-weight: bold; */
   }

   @media (max-width: 768px) {
     #mobile-nav {
       display: block;
       position: absolute;
       right: 0;
       top: 10px;
     }

     .nav-menu {
       min-width: 100vw;
       min-height: 40vh;
       z-index: 101;
     }

     .top-cat,
     .nav {
       display: none;
     }
   }

   .show-menu {
     display: flex;
   }

   .show-overlay {
     display: block;
   }
 </style>
