<script lang="ts">
  import { writable } from 'svelte/store';
  import { tick, onDestroy, onMount } from 'svelte';

let Carousel: any;
  let particlesToShow = 1;
let resizeListener: EventListener;

  onMount(async () => {
      const module = await import('svelte-carousel');
      Carousel = module.default;

      if (typeof window !== 'undefined') {
          // Set initial value based on window width
          setParticlesToShow(window.innerWidth);

          resizeListener = () => setParticlesToShow(window.innerWidth);
          window.addEventListener('resize', resizeListener);
      }
  });

  onDestroy(() => {
      if (typeof window !== 'undefined') {
          window.removeEventListener('resize', resizeListener);
      }
  });

function setParticlesToShow(width: number) {
      if (width < 620) {
          particlesToShow = 1;
      } else if (width < 980) {
          particlesToShow = 2;
      } else if (width < 1120) {
          particlesToShow = 3;
      } else {
          particlesToShow = 4;
      }
  }

  const activeMember = writable('Anne Ngatia');

  let i = 0;

  const team = [
      {
          name: 'Anne Ngatia',
          role: 'CMO'
      },
      {
          name: 'Washington Ogol',
          role: 'CEO'
      },
      {
          name: 'Joram Kabach',
          role: 'COO'
      },
      {
          name: 'Alloys Mila',
          role: 'CTO'
      },
      {
          name: 'Kelvin Adungosi',
          role: 'Head of Data'
      },
      {
          name: 'Viola Dimo',
          role: 'Projects'
      }
  ];

  async function autoScroll(){
      await tick();
      i = (i + 1) % team.length;
      activeMember.set(team[i].name);
  }

  const interval = setInterval(autoScroll, 2000);

  onDestroy(() => {
      clearInterval(interval);
  });



  function imageLink(val: string) {
      return `/team-photos/${val.toLocaleLowerCase().replace(' ', '-')}.jpeg`;
  }
</script>

<div id="our-team" class="inline-container">
  <div class="heading-section">
      <div>
          <div class="title">Our Team</div>
          <h4>Meet Our Experienced Team Members</h4>
      </div>
      <div style="font-family: var(--font-family-secondary)">
          Our team members are more than just experts; they are passionate problem solvers, data enthusiasts, and
          software wizards dedicated to bringing your ideas to life. Get to know the individuals who drive our
          success, and explore the diverse skills and backgrounds they bring to the table. At Statsspeak, it's our
          team's collective expertise and unwavering commitment that make the extraordinary possible.
      </div>
  </div>
  <div class="team">
      {#if Carousel}
          <Carousel
              autoplay
              autoplayDuration={2000}
              particlesToShow={particlesToShow}
          >
              {#each team as member}
              <div class="member-list-item" class:active={$activeMember === member.name}>
                  <div class="card">
                      <div class="card-info">
                      <div class="card-avatar">
                          <img
                          class="member-image"
                          src={imageLink(member.name)}
                          alt={member.name.toLocaleLowerCase()}
                           />
                      </div>
                      <div class="card-title">{member.name}</div>
                      <div class="card-subtitle">{member.role}</div>
                      </div>
                      <ul class="card-social">
                      <li class="card-social__item">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z"></path>
                    </svg></li>
                    <li class="card-social__item">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z"></path>
                  </svg></li>
                  <li class="card-social__item">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"></path>
                    </svg>
                  </li>
                </ul>
              </div>
              </div>
              {/each}
          </Carousel>
      {/if}
  </div>
</div>

<style>
  .heading-section {
      display: grid;
      grid-template-columns: 0.7fr 1fr;
      padding-bottom: 112px;
  }

  .title {
      font-family: var(--font-family-secondary), "Source Sans 3", sans-serif;
      color: var(--secondary-500);
      margin-bottom: 24px;
  }

  .member-list-item {
      scroll-snap-align: start;
  }

  .member-image {
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.5s;
  }

  .member-image:hover {
      border: 2px solid var(--primary-500);
      box-shadow: 0px 0px 5px 10px rgb(139 223 232 / 0.5);
  }

  /* Card */
  .card {
  width: 230px;
  height: 264px;
  background: linear-gradient(-9.81deg, #00acc8 0.14%, rgba(115, 218, 230, 0.9) 98.85%);;
  padding: 2rem 1.5rem;
  transition: box-shadow .3s ease, transform .2s ease;
  border-radius: 15px;
}

.card-info {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: transform .2s ease, opacity .2s ease;
}


/*Card footer*/
.card-social {
transform: translateY(200%);
display: flex;
justify-content: space-around;
width: 100%;
opacity: 0;
transition: transform .2s ease, opacity .2s ease;
}

.card-social__item {
list-style: none;
}

.card-social__item svg {
display: block;
height: 18px;
width: 18px;
fill: #515F65;
cursor: pointer;
transition: fill 0.2s ease ,transform 0.2s ease;
}

/*Text*/
.card-title {
color: #333;
font-size: 1em;
font-weight: 600;
line-height: 2rem;
margin-top: 1em;
}

.card-subtitle {
color: #000;
font-size: 0.8em;
margin-top: .5em;
}

/*Hover*/
.card:hover {
/* box-shadow: 0 8px 50px #23232333; */
box-shadow: 0px 8px 50px rgb(139 223 232 / 0.5);
  /* transform: translateY(-5%); */
}

.card:hover .card-info {
transform: translateY(-5%);
}

.card:hover .card-social {
transform: translateY(100%);
opacity: 1;
}

.card-social__item svg:hover {
fill: #232323;
transform: scale(1.1);
}

.card-avatar:hover {
transform: scale(1.1);
}


  /* Media Queries */
  @media (min-width: 320px) and (max-width: 480px){

      .heading-section {
          grid-template-columns: 1fr;
          padding-bottom: 48px;
          gap: 1em;
      }

      .member-list-item {
          scroll-snap-align: start;
          display: flex;
          justify-content: center;
          align-items: center;
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

      .member-list-item {
          scroll-snap-align: start;
          display: flex;
          /* border: 1px solid red; */
          justify-content: center;
          align-items: center;
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

      .member-list-item {
          scroll-snap-align: start;
          display: flex;
          justify-content: center;
          align-items: center;
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

      .member-list-item {
          scroll-snap-align: start;
          display: flex;
          justify-content: center;
          align-items: center;
      }

      .member-image {
          width: 100px;
          height: 100px;
      }
  }

  @media (min-width: 1281px){

      .heading-section {
          grid-template-columns: 1fr;
          padding-bottom: 48px;
          gap: 1em;
      }

      .member-list-item {
          scroll-snap-align: start;
          display: flex;
          justify-content: center;
          align-items: center;
      }

      .member-image {
          width: 100px;
          height: 100px;
      }
  }

</style>
