<script lang="ts">
   import SsLogoSvg from "../../components/svgs/ss-logo-svg.svelte";
   import { onMount } from "svelte";

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
       <li><a href="#top">Home</a></li>
       <li><a href="#trusted-by">About us</a></li>
       <li><a href="#our-services">Our Services</a></li>
       <li><a href="#our-team">Our Team</a></li>
       <li>
         <span class="dropdown"><a href="/resources">Resources</a></span>
         <div class="dropdown-content">
           <a href="/blog">Blog</a>
           <a href="/case-studies">Case Studies</a>
           <a href="/whitepapers">Whitepapers</a>
           <a href="/webinars">Webinars</a>
         </div>
       </li>
     </ul>
   </nav>
   <div class="top-cat">
     <span class="mode-toggle">
       {#if isDarkMode}
         <!-- Moon SVG -->
         <svg
           width="20"
           height="20"
           viewBox="0 0 24 24"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             d="M21.752 15.002C21.502 15.002 21.262 14.962 21.022 14.882C18.342 14.062 16.442 11.882 16.442 9.002C16.442 7.422 16.962 5.902 17.922 4.702C18.262 4.262 18.282 3.632 17.952 3.192C17.612 2.742 17.012 2.642 16.562 2.982C14.282 4.632 12.812 7.202 12.812 9.992C12.812 14.992 17.322 18.002 21.742 18.002C23.082 18.002 24.352 17.712 25.472 17.172C25.872 16.972 26.062 16.502 25.932 16.052C25.802 15.602 25.352 15.352 24.912 15.502C23.942 15.842 22.862 16.002 21.752 16.002C21.752 15.002 21.752 15.002 21.752 15.002Z"
             fill="white"
           />
         </svg> |
       {:else}
         <!-- Sun SVG -->
         <svg
           width="20"
           height="20"
           viewBox="0 0 20 20"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             fill-rule="evenodd"
             clip-rule="evenodd"
             d="M9.75 6.5C7.95507 6.5 6.5 7.95507 6.5 9.75C6.5 11.5449 7.95507 13 9.75 13C11.5449 13 13 11.5449 13 9.75C13 7.95507 11.5449 6.5 9.75 6.5ZM5 9.75C5 7.12665 7.12665 5 9.75 5C12.3734 5 14.5 7.12665 14.5 9.75C14.5 12.3734 12.3734 14.5 9.75 14.5C7.12665 14.5 5 12.3734 5 9.75Z"
             fill="white"
           />
           <path
             fill-rule="evenodd"
             clip-rule="evenodd"
             d="M9.75 0C10.1642 0 10.5 0.335786 10.5 0.75V1.75C10.5 2.16421 10.1642 2.5 9.75 2.5C9.33579 2.5 9 2.16421 9 1.75V0.75C9 0.335786 9.33579 0 9.75 0ZM2.85567 2.85567C3.14856 2.56278 3.62344 2.56278 3.91633 2.85567L4.62333 3.56267C4.91622 3.85556 4.91622 4.33044 4.62333 4.62333C4.33044 4.91622 3.85556 4.91622 3.56267 4.62333L2.85567 3.91633C2.56278 3.62344 2.56278 3.14856 2.85567 2.85567ZM16.6443 2.85567C16.9372 3.14856 16.9372 3.62344 16.6443 3.91633L15.9373 4.62333C15.6444 4.91622 15.1696 4.91622 14.8767 4.62333C14.5838 4.33044 14.5838 3.85556 14.8767 3.56267L15.5837 2.85567C15.8766 2.56278 16.3514 2.56278 16.6443 2.85567ZM0 9.75C0 9.33579 0.335786 9 0.75 9H1.75C2.16421 9 2.5 9.33579 2.5 9.75C2.5 10.1642 2.16421 10.5 1.75 10.5H0.75C0.335786 10.5 0 10.1642 0 9.75ZM17 9.75C17 9.33579 17.3358 9 17.75 9H18.75C19.1642 9 19.5 9.33579 19.5 9.75C19.5 10.1642 19.1642 10.5 18.75 10.5H17.75C17.3358 10.5 17 10.1642 17 9.75ZM4.62333 14.8767C4.91622 15.1696 4.91622 15.6444 4.62333 15.9373L3.91633 16.6443C3.62344 16.9372 3.14856 16.9372 2.85567 16.6443C2.56278 16.3514 2.56278 15.8766 2.85567 15.5837L3.56267 14.8767C3.85556 14.5838 4.33044 14.5838 4.62333 14.8767ZM14.8767 14.8767C15.1696 14.5838 15.6444 14.5838 15.9373 14.8767L16.6443 15.5837C16.9372 15.8766 16.9372 16.3514 16.6443 16.6443C16.3514 16.9372 15.8766 16.9372 15.5837 16.6443L14.8767 15.9373C14.5838 15.6444 14.5838 15.1696 14.8767 14.8767ZM9.75 17C10.1642 17 10.5 17.3358 10.5 17.75V18.75C10.5 19.1642 10.1642 19.5 9.75 19.5C9.33579 19.5 9 19.1642 9 18.75V17.75C9 17.3358 9.33579 17 9.75 17Z"
             fill="white"
           />
         </svg> |
       {/if}
     </span>
     <button
       class="hero-button"
       on:click={() => mapScrollIntoView("#contact-us")}>Contact us</button
     >
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
         <li><a href="#top">Home</a></li>
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

   nav a {
     color: white;
     text-decoration: none;
     font-size: 1em;
   }

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

   .nav .dropdown-content {
     display: none;
     position: absolute;
     background-color: #f9f9f9;
     box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
     min-width: 160px;
     z-index: 1;
   }

   .dropdown {
     color: var(--constant-white);
   }

   .nav .dropdown-content a {
     color: var(--constant-white);
     padding: 12px 16px;
     text-decoration: none;
     display: block;
   }

   .nav .dropdown-content a:hover {
     background-color: #f1f1f1;
   }

   .nav .dropdown:hover .dropdown-content {
     display: block;
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
