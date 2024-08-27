<script lang="ts">
  let currentIndex = 0;
  const teamMembers = [
    {
      name: "Washington Ogol",
      title: "Chief Executive Officer",
      img: "/team-photos/washington-ogol.jpeg",
      desc: "In the realm of leadership, Washington Ogol stands out as a beacon of team collaboration. As the Chief Executive Officer, he embodies a profound affinity for team membership, exemplifying a people-focused approach that permeates our organizational culture.",
    },
    {
      name: "Anthony Ngatia",
      title: "Chief Health Officer",
      img: "/team-photos/Antony.jpeg",
      desc: "Anthony Ngatia is a dedicated health professional with over 15 years of experience in public health and wellness. As the Chief Health Officer, he leads our health initiatives, ensuring the well-being of our community through innovative programs and strategic health policies. Anthony's expertise in preventive healthcare and his passion for improving health outcomes make him an invaluable asset to our team.",
    },
    {
      name: "Joram Kabach",
      title: "Chief Strategy Officer",
      img: "/team-photos/joram-kabach.jpeg",
      desc: "Joram Kabach is a seasoned operations expert with a passion for driving efficiency and excellence. As the Chief Strategy Officer, he oversees our day-to-day operations and ensures that our processes are optimized for success.",
    },
    {
      name: "Anne Ngatia",
      title: "Chief Marketing Officer",
      img: "/team-photos/anne-ngatia.jpeg",
      desc: "Anne Ngatia is a seasoned financial expert with a passion for driving business growth. As the Chief Financial Officer, she is responsible for overseeing the financial health of the organization and ensuring that our financial strategies align with our long-term goals.",
    },
    {
      name: "Alloys Mila",
      title: "Chief Technology Officer",
      img: "/team-photos/alloys-mila.jpeg",
      desc: "Alloys Mila is a visionary technologist with a knack for turning ideas into reality. As the Chief Technology Officer, he leads our technology team in developing innovative solutions that drive business growth and enhance customer experiences.",
    },
    {
      name: "Kelvin Adungosi",
      title: "Chief Data Engineer",
      img: "/team-photos/kelvin-adungosi.jpeg",
      desc: "Kelvin Adungosi is a data wizard with a passion for turning data into actionable insights. As the Chief Data Engineer, he leads our data team in developing cutting-edge data solutions that drive business growth and enhance customer experiences.",
    },
    {
      name: "Nancy Kinyua",
      title: "Head Geospatial Engineer",
      img: "/team-photos/Nancy.png",
      desc: "Nancy Kinyua is a seasoned geospatial expert with a passion for driving business growth. As the Head Geospatial Engineer, she is responsible for overseeing the geospatial health of the organization and ensuring that our geospatial strategies align with our long-term goals.",
    },
    {
      name: "Joanita Kisembo",
      title: "Head Project Manager",
      img: "/team-photos/Joan.jpg",
      desc: "Joanita Kisembo is a seasoned project manager with a passion for driving business growth. As the Head Project Manager, she is responsible for overseeing the project health of the organization and ensuring that our project strategies align with our long-term goals.",
    },
  ];

  function nextMember() {
    currentIndex = (currentIndex + 1) % teamMembers.length;
  }

  function prevMember() {
    currentIndex = (currentIndex - 1 + teamMembers.length) % teamMembers.length;
  }

  function selectMember(index: number) {
    currentIndex = index;
  }
</script>

<div id="our-team" class="inline-container">
  <div class="heading-section">
    <div>
      <div class="title">Our Team</div>
      <h4>Meet Our Experienced <br /> Team Members</h4>
    </div>
    <div class="description">
      Our team members are more than just experts; they are passionate problem
      solvers, data enthusiasts, and software wizards dedicated to bringing your
      ideas to life. Get to know the individuals who drive our success, and
      explore the diverse skills and backgrounds they bring to the table. At
      Statsspeak, it's our team's collective expertise and unwavering commitment
      that make the extraordinary possible.
    </div>
  </div>
  <div class="team">
    <div class="flex">
      <div class="card">
        <img
          src={teamMembers[currentIndex].img}
          alt={teamMembers[currentIndex].name}
          class="member-image"
        />
        <div class="card-info">
          <div class="card-title">
            <span>{teamMembers[currentIndex].name}</span>
          </div>
          <div class="card-subtitle">
            <span>{teamMembers[currentIndex].title}</span>
          </div>
        </div>
        <div class="card-buttons">
          <button class="prev" on:click={prevMember}>
            <img src="/prev.svg" alt="prev" />
          </button>
          <button class="next" on:click={nextMember}>
            <img src="/next.svg" alt="next" />
          </button>
        </div>
      </div>
      <img src="/connector.svg" alt="connector" class="connector" />
      <div class="next-in-line">
        <div class="images-container">
          <div class="images">
            {#each teamMembers as member, index}
              {#if index !== currentIndex}
                <div class="next-member" on:click={() => selectMember(index)}>
                  <img src={member.img} class="next-image" alt={member.name} />
                </div>
              {/if}
            {/each}
          </div>
        </div>
        <div class="member-description">
          <div class="social-media-links">
            <img src="/LinkedIN_white.svg" alt="linkedin" />
            <img src="/Mail.svg" alt="twitter" />
          </div>
          <div>
            <p class="member-description-text">
              {teamMembers[currentIndex].desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .heading-section {
    display: grid;
    padding-bottom: 112px;
    /* border: 1px solid red; */
  }

  .heading-section h4 {
    font-size: 2em;
    margin-bottom: 1em;
    color: var(--description-text);
  }

  .title {
    font-family: var(--font-family-secondary), "Source Sans 3", sans-serif;
    color: var(--secondary-500);
    margin-bottom: 14px;
    font-size: 3em;
    font-weight: 600;
  }

  .team {
    height: 100%;
  }

  .description {
    font-family: var(--font-family-secondary);
    margin-top: 1em;
    color: var(--paragraph-text);
    font-size: 1.15em;
    /* border: 1px solid red; */
  }

  .flex {
    display: flex;
    /* justify-content: space-between; */
    gap: 3.1em;
    align-items: flex-start;
    position: relative;
    /* flex-wrap: wrap; */
  }

  .images-container {
   /* overflow-x: auto; */
    width: 100%;
    /* border: 1px solid red; */
    /* padding-top: 3em; */
    padding-right: 3em;
  }

  .images {
    display: flex;
    flex-wrap: nowrap;
    gap: 10px;
  }

  .next-member {
    flex: 0 0 auto;
  }

  .member-image,
  .next-image {
    border-radius: 50%;
  }

  .next-image {
    height: 120px;
    width: 120px;
    box-shadow: none;
  }

  .next-image:hover {
    cursor: pointer;
    box-shadow: 0px 12px 56px #00abc8;
  }

  .card {
    /* flex: 0 0 300px; */
    /* min-height: 270px;
        min-width: 280px; */
    position: relative;
    background: var(--team-card-bg);
    /* padding: 2em; */
    border-radius: 9px;
    transition: 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
  }

  .card::after {
    content: "";
    position: absolute;
    top: 75%;
    left: 100%; /* Position it to the right of the card */
    width: 43px; /* Adjust width as needed */
    height: 5px; /* Adjust height as needed */
    background: var(--team-card-bg); /* Same background as the card */
    border-radius: 5px; /* Make the ends rounded */
  }

  .connector {
    position: absolute;
    top: 80%;
    left: 28%;
    transform: translate(-50%, -50%);
    display: none;
  }

  .card-title {
    padding-top: 1em;
    justify-content: center;
    align-items: center;
  }

  .card-subtitle {
    color: var(--constant-white);
  }

  .card-title span {
    font-size: 1.25em;
    font-weight: 550;
    color: var(--constant-white);
  }

  .card-buttons {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 1em;
    gap: 10px;
  }

  .card-buttons button {
    /* width: 10px;
        height: 10px; */
    border-radius: 5px;
    background-color: inherit;
    border: 1px solid #fff;
  }

  .next-in-line {
    display: flex;
    flex-direction: column;
    width: 100%;
    /* overflow: hidden; */
  }

  .next-in-line .images {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }

  .member-description {
    background: var(--team-card-bg);
    width: 100%;
    border-radius: 9px;
    display: flex;
  }

  .member-description-text {
    color: white;
    font-size: 1em;
    padding: 1em;
  }

  .social-media-links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
  }

  .social-media-links img {
    height: 30px;
    width: 30px;
  }

  /* Media Queries */
  @media (min-width: 320px) and (max-width: 480px) {
    .inline-container {
      margin-top: -70%;
    }

    .heading-section {
      grid-template-columns: 1fr;
      padding-bottom: 48px;
      gap: 1em;
    }

    .member-image {
      width: 50px;
      height: 50px;
    }

    .card {
      min-height: 240px;
      min-width: 70%;
      padding: 1em;
      position: relative;
    }

    .card .member-image {
      height: 100px;
      width: 100px;
    }

    .card-buttons button {
      max-width: 1em;
    }

    .connector {
      position: absolute;
      top: 57%;
      left: 5%;
      transform: rotate(90deg);
      height: 35px;
      width: 35px;
    }

    .next-in-line .images {
      display: none;
    }

    .next-image {
      height: 100px;
      width: 100px;
      box-shadow: none;
    }

    .next-in-line .member-description {
      width: 100%;
      border-radius: 9px;
      display: flex;
      flex-direction: column;
    }

    .next-in-line .social-media-links {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 0.5em;
      padding-top: 1em;
      padding-left: 1em;
    }

    .flex {
      display: flex;
      flex-direction: column;
      gap: 1.8em;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    .inline-container {
      /* border: 1px solid red; */
      margin-top: -70%;
    }

    .heading-section {
      grid-template-columns: 1fr;
      padding-bottom: 48px;
      gap: 1em;
    }

    .member-image {
      width: 50px;
      height: 50px;
    }

    .card {
      min-height: 240px;
      min-width: 50%;
      padding: 1em;
      position: relative; /* Add this line */
    }

    .card .member-image {
      height: 100px;
      width: 100px;
    }

    .card-buttons button {
      max-width: 1em;
    }

    .connector {
      position: absolute;
      top: 60%;
      left: 5%;
      transform: rotate(90deg);
      height: 35px;
      width: 35px;
    }

    .next-in-line .images {
      padding-bottom: 29%;
    }

    .next-in-line .images img {
      margin-right: 1em;
    }

    .next-image {
      height: 100px;
      width: 100px;
      box-shadow: none;
      /* border: 1px solid red; */
    }

    .next-in-line .member-description {
      /* border: 1px solid red; */
      min-width: 100%;
      border-radius: 9px;
      display: flex;
      flex-direction: column;
      margin-left: -65%;
    }

    .next-in-line .social-media-links {
      display: flex;
      /* flex-direction: column; */
      justify-content: flex-start;
      align-items: flex-start;
      gap: 0.5em;
      padding-top: 1em;
      padding-left: 1em;
      /* margin-left: 2em; */
    }

    .flex {
      display: flex;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .card::after {
      top: 105%; /* Position at the bottom edge of the card */
      left: 20%; /* Center horizontally */
      width: 28px;
      transform: translateX(-50%) rotate(90deg); /* Rotate by 90 degrees */
    }

    .images-container {
      overflow-x: auto;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    .card::after {
      top: 105%; /* Position at the bottom edge of the card */
      left: 20%; /* Center horizontally */
      width: 30px;
      transform: translateX(-50%) rotate(90deg); /* Rotate by 90 degrees */
    }

    .images-container {
      overflow-x: scroll;
    }

    .images-container::-webkit-scrollbar {
      display: none; /* For Chrome, Safari, and Opera */
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    .card::after {
      top: 80%; /* Position at the bottom edge of the card */
      left: 100%; /* Center horizontally */
      width: 30px;
    }

    .images-container {
      overflow-x: scroll;
    }

    .images-container::-webkit-scrollbar {
      display: none; /* For Chrome, Safari, and Opera */
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    .inline-container {
      /* border: 1px solid red; */
      margin-top: -45%;
    }

    .card {
      padding: 1em;
      min-width: 250px;
      min-height: 270px;
    }

    .next-in-line .images {
      padding-bottom: 5em;
    }

    .heading-section {
      grid-template-columns: 1fr;
      padding-bottom: 48px;
      gap: 1em;
    }

    .member-image,
    .next-image {
      width: 100px;
      height: 100px;
    } /* margin-left: -65%; */

    .connector {
      display: none;
    }

    .next-image {
      margin-right: 1em;
    }

    .next-in-line .member-description {
      /* border: 1px solid red; */
      width: 100%;
      border-radius: 9px;
      display: flex;
      height: max-content;
      /* flex-direction: column; */
    }

    .next-in-line .social-media-links {
      display: flex;
      /* flex-direction: column; */
      justify-content: center;
      align-items: center;
      gap: 0.5em;
      padding-top: 1em;
      padding-left: 1em;
      /* margin-left: 2em; */
    }

    .flex {
      /* border: 1px solid red; */
      gap: 2em;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    .inline-container {
      /* border: 1px solid red; */
      margin-top: -45%;
    }

    .card {
      padding: 1em;
      min-width: 250px;
      min-height: 270px;
    }

    .next-in-line .images {
      padding-bottom: 3em;
    }

    .heading-section {
      grid-template-columns: 1fr;
      padding-bottom: 48px;
      gap: 1em;
    }

    .member-image {
      width: 100px;
      height: 100px;
    }

    .connector {
      display: none;
    }

    .next-image {
      margin-right: 1em;
    }

    .next-in-line .member-description {
      /* border: 1px solid red; */
      width: 100%;
      border-radius: 9px;
      display: flex;
      height: max-content;
      /* flex-direction: column; */
    }

    .next-in-line .social-media-links {
      display: flex;
      /* flex-direction: column; */
      justify-content: center;
      align-items: center;
      gap: 0.5em;
      padding-top: 1em;
      padding-left: 1em;
      /* margin-left: 2em; */
    }
  }

  @media (min-width: 1281px) and (max-width: 1440px) {
    .inline-container {
      /* border: 1px solid red; */
      margin-top: -35%;
    }

    .card {
      padding: 1em;
      min-width: 250px;
      min-height: 270px;
    }

    .next-in-line .images {
      padding-bottom: 4em;
    }

    .heading-section {
      /* grid-template-columns: 2fr; */
      grid-template-columns: 0.7fr 1fr;
      padding-bottom: 48px;
      gap: 1em;
    }

    .member-image {
      width: 100px;
      height: 100px;
    }

    .connector {
      display: none;
    }

    /* .next-image {
      margin-right: 1em; */
    /* } */

    .next-in-line .member-description {
      /* border: 1px solid red; */
      width: 100%;
      border-radius: 9px;
      display: flex;
      height: max-content;
      /* flex-direction: column; */
    }

    .next-in-line .social-media-links {
      display: flex;
      /* flex-direction: column; */
      justify-content: center;
      align-items: center;
      gap: 0.5em;
      padding-top: 1em;
      padding-left: 1em;
      /* margin-left: 2em; */
    }
  }

  @media (min-width: 1441px) {
    .inline-container {
      /* border: 1px solid red; */
      /* margin-inline: 0%; */
      margin-top: -30%;
      min-width: 70%;
    }

    .card {
      padding: 1em;
      min-width: 250px;
      min-height: 300px;
    }

    .next-in-line .images {
      padding-bottom: 4em;
    }

    .heading-section {
      /* grid-template-columns: 2fr; */
      grid-template-columns: 0.7fr 1fr;
      padding-bottom: 48px;
      gap: 1em;
    }

    .heading-section .description {
      margin-left: -25%;
    }

    .member-image {
      width: 100px;
      height: 100px;
    }

    .connector {
      display: none;
    }

    /* .next-image {
        margin-right: 1em; */
    /* } */

    .next-in-line .member-description {
      /* border: 1px solid red; */
      width: 100%;
      border-radius: 9px;
      display: flex;
      min-height: 100px;
      justify-content: center;
      align-items: center;
      /* flex-direction: column; */
    }

    .next-in-line .social-media-links {
      display: flex;
      /* flex-direction: column; */
      justify-content: center;
      align-items: center;
      gap: 0.5em;
      padding-top: 1em;
      padding-left: 1em;
      /* margin-left: 2em; */
    }
  }
</style>
