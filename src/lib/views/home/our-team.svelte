<script lang="ts">
    let currentIndex = 0;
    const teamMembers = [
      {
        name: "Washington Ogol",
        title: "Chief Executive Officer",
        img: "/team-photos/washington-ogol.jpeg",
        desc: "In the realm of leadership, Washington Ogol stands out as a beacon of team collaboration. As the Chief Executive Officer, he embodies a profound affinity for team membership, exemplifying a people-focused approach that permeates our organizational culture."
      },
      {
        name: "Anne Ngatia",
        title: "Chief Marketing Officer",
        img: "/team-photos/anne-ngatia.jpeg",
        desc: "Anne Ngatia is a seasoned financial expert with a passion for driving business growth. As the Chief Financial Officer, she is responsible for overseeing the financial health of the organization and ensuring that our financial strategies align with our long-term goals."
      },
      {
        name: "Alloys Mila",
        title: "Chief Technology Officer",
        img: "/team-photos/alloys-mila.jpeg",
        desc: "Alloys Mila is a visionary technologist with a knack for turning ideas into reality. As the Chief Technology Officer, he leads our technology team in developing innovative solutions that drive business growth and enhance customer experiences."
      },
      {
        name: "Joram Kabach",
        title: "Chief Operations Officer",
        img: "/team-photos/joram-kabach.jpeg",
        desc: "Joram Kabach is a seasoned operations expert with a passion for driving efficiency and excellence. As the Chief Operations Officer, he oversees our day-to-day operations and ensures that our processes are optimized for success."
      },
      {
        name: "Kelvin Adungosi",
        title: "Chief Data Engineer",
        img: "/team-photos/kelvin-adungosi.jpeg",
        desc: "Kelvin Adungosi is a data wizard with a passion for turning data into actionable insights. As the Chief Data Engineer, he leads our data team in developing cutting-edge data solutions that drive business growth and enhance customer experiences."
      },
      {
        name: "Viola Dimo",
        title: "Chief Human Resources Officer",
        img: "/team-photos/viola-dimo.jpeg",
        desc: "Viola Dimo is a seasoned HR professional with a passion for building high-performing teams. As the Chief Human Resources Officer, she is responsible for attracting, developing, and retaining top talent to drive our organizational success."
      }
    ];

    function nextMember() {
      currentIndex = (currentIndex + 1) % teamMembers.length;
    }

    function prevMember() {
      currentIndex = (currentIndex - 1 + teamMembers.length) % teamMembers.length;
    }
  </script>

  <div id="our-team" class="inline-container">
    <div class="heading-section">
      <div>
        <div class="title">Our Team</div>
        <h4>Meet Our Experienced Team Members</h4>
      </div>
      <div class="description">
        Our team members are more than just experts; they are passionate problem solvers, data enthusiasts, and software wizards dedicated to bringing your ideas to life. Get to know the individuals who drive our success, and explore the diverse skills and backgrounds they bring to the table. At Statsspeak, it's our team's collective expertise and unwavering commitment that make the extraordinary possible.
      </div>
    </div>
    <div class="team">
      <div class="flex">
        <div class="card">
          <img src={teamMembers[currentIndex].img} alt={teamMembers[currentIndex].name} class="member-image" />
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
          <div class="images">
            {#each teamMembers as member, index}
                {#if index !== currentIndex}
                    <div class="next-member">
                        <img src={member.img} class="next-image" alt={member.name} />
                    </div>
                {/if}
            {/each}
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

    #our-team {
       margin-top: 15%;
    }

    .heading-section {
        display: grid;
        padding-bottom: 112px;
    }

    .heading-section h4{
      font-size: 2em;
      margin-bottom: 1em;
      color: var(--description-text)
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
  }


    .flex{
        display: flex;
        /* justify-content: space-between; */
        gap: 4em;
        align-items: flex-start;
        position: relative;
        /* flex-wrap: wrap; */
    }

    .member-image,.next-image{
        border-radius: 50%;
    }

    .next-image {
        height: 120px;
        width: 120px;
    }

    .card {
        flex: 0 0 300px;
        min-height: 270px;
        min-width: 280px;
        background: var(--team-card-bg);
        padding: 2em;
        border-radius: 9px;
        transition: .3s cubic-bezier(0.39, 0.575, 0.565, 1);
        }

    .connector {
    position: absolute;
    top: 80%;
    left: 28%;
    transform: translate(-50%, -50%);
    z-index: 1;
    /* margin: 0 20px; */
}

    .card-title {
        padding-top: 1em;justify-content: center;
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
    }

    .next-in-line .images {
        /* border: 1px solid red; */
        display: flex;
        justify-content: space-around;
        /* gap: 1em; */
        width: 100%;
        /* margin-top: 1em; */
    }


    .member-description {
      background: var(--team-card-bg);
        /* background: linear-gradient(89.81deg, #006F94 0.14%, #00ABC8 98.85%); */
        width: 100%;
        height: 100px;
        margin-top: 2em;
        border-radius: 9px;
        display: flex;
        padding: 1em;
    }

    .member-description-text {
        color: white;
        font-size: 1em;
        padding: 1em;
        margin-left: 1em;
        /* margin-block: 1em; */
    }

    .social-media-links {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .5em;
        margin-left: 2em;
    }

    .social-media-links img {
        height: 30px;
        width: 30px;
    }


    /* Media Queries */
    @media (min-width: 320px) and (max-width: 480px){

        .heading-section {
            grid-template-columns: 1fr;
            padding-bottom: 48px;
            gap: 1em;
        }

        .member-image {
            width: 50px;
            height: 50px;
        }

    }

    @media (min-width: 481px) and (max-width: 768px){

        .heading-section {
            grid-template-columns: 1fr;
            padding-bottom: 48px;
            gap: 1em;
        }

        .member-image {
            width: 100px;
            height: 100px;
        }

    }

    @media (min-width: 769px) and (max-width: 1024px){

        .heading-section {
            grid-template-columns: 1fr;
            padding-bottom: 48px;
            gap: 1em;
        }

        .member-image {
            width: 100px;
            height: 100px;
        }
    }

    @media (min-width: 1025px) and (max-width: 1280px){

        .heading-section {
            grid-template-columns: 1fr;
            padding-bottom: 48px;
            gap: 1em;
        }

        .member-image {
            width: 100px;
            height: 100px;
        }
    }

    @media (min-width: 1281px){

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
    }

  </style>

